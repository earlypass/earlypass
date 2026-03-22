#!/usr/bin/env node
// Build script: bundles dashboard TypeScript source via esbuild.
// Output: ../internal/dashboard/static/
//
// Production build: app.js is renamed to app.{sha256-8}.js and index.html is
// updated to reference the hashed filename, enabling immutable caching.
// Watch/dev build: plain app.js is used (no hash, no caching complications).

const crypto = require("crypto");
const esbuild = require("esbuild");
const fs = require("fs");
const path = require("path");

const watch = process.argv.includes("--watch");

const outDir = path.join(
  __dirname,
  "..",
  "..",
  "internal",
  "dashboard",
  "static"
);
fs.mkdirSync(path.join(outDir, "vendor"), { recursive: true });

// Copy static assets that are not processed by esbuild.
fs.copyFileSync(
  path.join(__dirname, "..", "src", "vendor", "uPlot.min.css"),
  path.join(outDir, "vendor", "uPlot.min.css")
);
// index.html is copied here for watch mode; prod build rewrites it after hashing.
fs.copyFileSync(
  path.join(__dirname, "..", "src", "index.html"),
  path.join(outDir, "index.html")
);

const buildOptions = {
  entryPoints: ["src/app.ts"],
  bundle: true,
  outfile: path.join(outDir, "app.js"),
  format: "esm",
  target: ["es2017"],
  minify: !watch,
  sourcemap: watch ? "inline" : false,
  logLevel: "info",
};

if (watch) {
  esbuild.context(buildOptions).then((ctx) => ctx.watch());
} else {
  esbuild.build(buildOptions).then(() => {
    // Compute SHA-256 of the bundle and use first 8 hex chars as the cache key.
    const content = fs.readFileSync(path.join(outDir, "app.js"));
    const hash = crypto.createHash("sha256").update(content).digest("hex").slice(0, 8);
    const hashedName = `app.${hash}.js`;

    // Write the hashed file.
    fs.writeFileSync(path.join(outDir, hashedName), content);

    // Remove stale hashed files from previous builds.
    for (const f of fs.readdirSync(outDir)) {
      if (/^app\.[a-f0-9]{8}\.js$/.test(f) && f !== hashedName) {
        fs.unlinkSync(path.join(outDir, f));
      }
    }

    // Remove the plain app.js — only the hashed version should be served.
    fs.unlinkSync(path.join(outDir, "app.js"));

    // Rewrite index.html to reference the hashed filename.
    const htmlSrc = path.join(__dirname, "..", "src", "index.html");
    const html = fs.readFileSync(htmlSrc, "utf8").replace("./app.js", `./${hashedName}`);
    fs.writeFileSync(path.join(outDir, "index.html"), html);

    console.log(`  Hashed asset: ${hashedName}`);
  }).catch(() => process.exit(1));
}
