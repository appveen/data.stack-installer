function yamlNE(namespace, dockerUrl) {
	return `apiVersion: v1
kind: Service
metadata:
  name: ne
  namespace: ${namespace}
spec:
  type: ClusterIP
  selector:
    app: ne
  ports:
    - protocol: TCP
      port: 80
      targetPort: 10010
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ne
  namespace: ${namespace}
spec:
  replicas: 1
  selector:
    matchLabels:
      app: ne
  template:
    metadata:
      labels:
        app: ne
    spec:
      containers:
        - name: ne
          image: '${dockerUrl}data.stack:ne.2.0.0'
          ports:
            - containerPort: 10010
          livenessProbe:
            httpGet:
              path: /ne/health/live
              port: 10010
            initialDelaySeconds: 10
            periodSeconds: 10
          readinessProbe:
            httpGet:
              path: /ne/health/ready
              port: 10010
            initialDelaySeconds: 10
            periodSeconds: 10
          envFrom:
          - configMapRef:
              name: config`
}