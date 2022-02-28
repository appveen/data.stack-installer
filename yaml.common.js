function yamlCommon(namespace, dockerUrl) {
	return `apiVersion: v1
kind: Service
metadata:
  name: common
  namespace: ${namespace}
spec:
  type: ClusterIP
  selector:
    app: common
  ports:
    - protocol: TCP
      port: 80
      targetPort: 3000
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: common
  namespace: ${namespace}
spec:
  replicas: 1
  selector:
    matchLabels:
      app: common
  template:
    metadata:
      labels:
        app: common
    spec:
      containers:
        - name: common
          image: '${dockerUrl}data.stack:common.2.1.0'
          ports:
            - containerPort: 3000
          livenessProbe:
            httpGet:
              path: /common/utils/health/live
              port: 3000
            initialDelaySeconds: 10
            periodSeconds: 10
            timeoutSeconds: 60
          readinessProbe:
            httpGet:
              path: /common/utils/health/ready
              port: 3000
            initialDelaySeconds: 10
            periodSeconds: 10
            timeoutSeconds: 60
          envFrom:
          - configMapRef:
              name: config`;
}