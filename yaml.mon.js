function yamlMON(namespace, dockerUrl) {
	return `apiVersion: v1
kind: Service
metadata:
  name: mon
  namespace: ${namespace}
spec:
  type: ClusterIP
  selector:
    app: mon
  ports:
    - protocol: TCP
      port: 80
      targetPort: 10005
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mon
  namespace: ${namespace}
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mon
  template:
    metadata:
      labels:
        app: mon
    spec:
      containers:
        - name: mon
          image: '${dockerUrl}data.stack:mon.2.0.0'
          ports:
            - containerPort: 10005
          livenessProbe:
            httpGet:
              path: /mon/health/live
              port: 10005
            initialDelaySeconds: 10
            periodSeconds: 10
          readinessProbe:
            httpGet:
              path: /mon/health/ready
              port: 10005
            initialDelaySeconds: 10
            periodSeconds: 10
          envFrom:
          - configMapRef:
              name: config`
}