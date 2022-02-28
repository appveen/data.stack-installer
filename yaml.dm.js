function yamlDM(namespace, dockerUrl) {
	return `apiVersion: v1
kind: Service
metadata:
  name: dm
  namespace: ${namespace}
spec:
  type: ClusterIP
  selector:
    app: dm
  ports:
    - protocol: TCP
      port: 80
      targetPort: 10709
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: dm
  namespace: ${namespace}
spec:
  replicas: 1
  selector:
    matchLabels:
      app: dm
  template:
    metadata:
      labels:
        app: dm
    spec:
      serviceAccountName: odp-admin
      volumes:
      - name: docker-sock
        hostPath:
          path: /var/run
      containers:
        - name: dm
          image: '${dockerUrl}data.stack:dm.2.0.0'
          ports:
            - containerPort: 10709
          securityContext:
            privileged: true
          volumeMounts:
            - name: docker-sock
              mountPath: /var/run
          envFrom:
          - configMapRef:
              name: config`;
}