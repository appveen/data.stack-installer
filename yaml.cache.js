function yamlCache(namespace, dockerUrl) {
	return `apiVersion: v1
kind: Service
metadata:
  name: cache
  namespace: ${namespace}
spec:
  type: ClusterIP
  selector:
    app: cache
  ports:
    - protocol: TCP
      port: 6379
      targetPort: 6379
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: cache
  namespace: ${namespace}
spec:
  replicas: 1
  selector:
    matchLabels:
      app: cache
  template: 
    metadata:
      labels:
        env: dev
        app: cache
    spec:
      containers:
      - name: cache
        image: ${dockerUrl}cache:1.0.0
        ports:
        - containerPort: 6379
        volumeMounts:
          - name: cache-db
            mountPath: /data
      volumes:
        - name: cache-db
          hostPath:
            path: /mnt/cache`
}