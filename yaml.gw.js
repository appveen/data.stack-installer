function yamlGW(namespace, dockerUrl) {
	return `apiVersion: v1
kind: Service
metadata:
  name: gw
  namespace: ${namespace}
spec:
  type: ClusterIP
  selector:
    app: gw
  ports:
    - protocol: TCP
      port: 80
      targetPort: 9080
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: gw
  namespace: ${namespace}
spec:
  replicas: 1
  selector:
    matchLabels:
      app: gw
  template:
    metadata:
      labels:
        app: gw
    spec:
      containers:
        - name: gw
          image: '${dockerUrl}data.stack:gw.2.1.0'
          ports:
            - containerPort: 9080
          livenessProbe:
            httpGet:
              path: /gw/health/live
              port: 9080
            initialDelaySeconds: 10
            periodSeconds: 10
            timeoutSeconds: 60
          readinessProbe:
            httpGet:
              path: /gw/health/ready
              port: 9080
            initialDelaySeconds: 10
            periodSeconds: 10
            timeoutSeconds: 60
          envFrom:
          - configMapRef:
              name: config`
}