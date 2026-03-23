allow_k8s_contexts('kind-earlypass-dev')

# metrics-server (required for kubectl top / k9s memory+CPU display)
local_resource(
    'metrics-server',
    cmd='kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml && kubectl patch deployment metrics-server -n kube-system --type=json -p=\'[{"op":"add","path":"/spec/template/spec/containers/0/args/-","value":"--kubelet-insecure-tls"}]\'',
    labels=['infra'])

# Infrastructure
k8s_yaml('tilt/postgres.yaml')
k8s_resource('postgres', port_forwards='5432:5432', labels=['infra'])

k8s_yaml('tilt/redis.yaml')
k8s_resource('redis', port_forwards='6379:6379', labels=['infra'])

k8s_yaml('tilt/jaeger.yaml')
k8s_resource('jaeger', port_forwards=['16686:16686', '4317:4317', '4318:4318'], labels=['infra'])

k8s_yaml('tilt/otel-collector.yaml')
k8s_resource('otel-collector', labels=['infra'], resource_deps=['jaeger'])

k8s_yaml('tilt/prometheus.yaml')
k8s_resource('prometheus', port_forwards='9090:9090', labels=['infra'], resource_deps=['otel-collector'])

k8s_yaml('tilt/grafana.yaml')
k8s_resource('grafana', port_forwards='3001:3001', labels=['infra'], resource_deps=['prometheus'])

# Migrations (runs locally against port-forwarded postgres)
local_resource(
    'migrations',
    cmd='mise exec -- go tool goose -dir migrations postgres "postgres://earlypass:earlypass@localhost:5432/earlypass?sslmode=disable" up',
    resource_deps=['postgres'],
    labels=['app'])

docker_prune_settings(num_builds=2)

# App
docker_build('earlypass', '.', dockerfile='tilt/Dockerfile.dev')
k8s_yaml('tilt/app.yaml')
k8s_resource('earlypass',
    port_forwards=['3000:3000'],
    resource_deps=['postgres', 'redis', 'migrations'],
    labels=['app'])
