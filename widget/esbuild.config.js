// esbuild config for the EarlyPass widget.
// Produces a single IIFE bundle targeting < 20KB gzipped.
// Run via: npm run build
const esbuild = require("esbuild");

const watch = process.argv.includes("--watch");

const buildOptions = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  outfile: "dist/widget.js",
  format: "iife",
  globalName: "EarlyPass",
  target: ["es2017"],
  minify: !watch,
  sourcemap: watch ? "inline" : false,
  logLevel: "info",
};

if (watch) {
  esbuild.context(buildOptions).then((ctx) => ctx.watch());
} else {
  esbuild.build(buildOptions).catch(() => process.exit(1));
}
