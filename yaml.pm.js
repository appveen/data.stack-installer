function yamlPM(namespace, dockerUrl) {
	return `apiVersion: v1
kind: Service
metadata:
  name: pm
  namespace: ${namespace}
spec:
  type: ClusterIP
  selector:
    app: pm
  ports:
    - protocol: TCP
      port: 80
      targetPort: 10011
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: pm
  namespace: ${namespace}
spec:
  replicas: 1
  selector:
    matchLabels:
      app: pm
  template:
    metadata:
      labels:
        app: pm
    spec:
      serviceAccountName: dataStack-admin
      containers:
        - name: pm
          image: '${dockerUrl}data.stack:pm.2.1.0'
          ports:
            - containerPort: 10011
          livenessProbe:
            httpGet:
              path: /pm/health/live
              port: 10011
            initialDelaySeconds: 10
            periodSeconds: 10
            timeoutSeconds: 60
          readinessProbe:
            httpGet:
              path: /pm/health/ready
              port: 10011
            initialDelaySeconds: 10
            periodSeconds: 10
            timeoutSeconds: 60
          envFrom:
          - configMapRef:
              name: config`
}