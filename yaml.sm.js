function yamlSM(namespace, dockerUrl) {
	return `apiVersion: v1
kind: Service
metadata:
  name: sm
  namespace: ${namespace}
spec:
  type: ClusterIP
  selector:
    app: sm
  ports:
    - protocol: TCP
      port: 80
      targetPort: 10003
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: sm
  namespace: ${namespace}
spec:
  replicas: 1
  selector:
    matchLabels:
      app: sm
  template:
    metadata:
      labels:
        app: sm
    spec:
      serviceAccountName: odp-admin
      containers:
        - name: sm
          image: '${dockerUrl}data.stack:sm.2.1.0'
          ports:
            - containerPort: 10003
          livenessProbe:
            httpGet:
              path: /sm/health/live
              port: 10003
            initialDelaySeconds: 10
            periodSeconds: 10
            timeoutSeconds: 60
          readinessProbe:
            httpGet:
              path: /sm/health/ready
              port: 10003
            initialDelaySeconds: 10
            periodSeconds: 10
            timeoutSeconds: 60
          envFrom:
          - configMapRef:
              name: config`
}