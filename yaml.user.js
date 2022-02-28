function yamlUSER(namespace, dockerUrl) {
	return `apiVersion: v1
kind: Service
metadata:
  name: user
  namespace: ${namespace}
spec:
  type: ClusterIP
  selector:
    app: user
  ports:
    - protocol: TCP
      port: 80
      targetPort: 10004
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: user
  namespace: ${namespace}
spec:
  replicas: 1
  selector:
    matchLabels:
      app: user
  template:
    metadata:
      labels:
        app: user
    spec:
      serviceAccountName: odp-admin
      containers:
        - name: user
          image: '${dockerUrl}data.stack:user.2.1.0'
          ports:
            - containerPort: 10004
          livenessProbe:
            httpGet:
              path: /rbac/health/live
              port: 10004
            initialDelaySeconds: 10
            periodSeconds: 10
          readinessProbe:
            httpGet:
              path: /rbac/health/ready
              port: 10004
            initialDelaySeconds: 10
            periodSeconds: 10
          envFrom:
          - configMapRef:
              name: config`
}