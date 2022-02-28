function yamlProxy(namespace, dockerUrl) {
	return `apiVersion: v1
kind: Service
metadata:
  name: proxy
  namespace: ${namespace}
spec:
  type: LoadBalancer
  selector:
    app: proxy
  ports:
    - protocol: TCP
      name: proxy
      port: 32001
      targetPort: 32001
      nodePort: 32001
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: proxy
  namespace: ${namespace}
spec:
  replicas: 1
  selector:
    matchLabels:
      app: proxy
  template:
    metadata:
      labels:
        app: proxy
    spec:
      volumes:
        - name: ds-proxy-sec
          secret:
            secretName: ds-proxy-sec
      containers:
        - name: proxy
          image: "${dockerUrl}data.stack:proxy.2.1.0"
          ports:
            - containerPort: 32001
          livenessProbe:
            httpGet:
              path: /health/live
              port: 32001
              scheme: HTTPS
            initialDelaySeconds: 5
            periodSeconds: 10
            timeoutSeconds: 60
          readinessProbe:
            httpGet:
              path: /health/ready
              port: 32001
              scheme: HTTPS
            initialDelaySeconds: 5
            periodSeconds: 10
            timeoutSeconds: 60
          volumeMounts:
            - name: ds-proxy-sec
              mountPath: "/app/keys"
              readOnly: true
          envFrom:
            - configMapRef:
                name: config`
}