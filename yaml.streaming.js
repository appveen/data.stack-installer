function yamlMessaging(namespace, dockerUrl) {
	return `apiVersion: v1
kind: Service
metadata:
  name: streaming
  namespace: ${namespace}
spec:
  type: ClusterIP
  selector:
    app: streaming
  ports:
    - protocol: TCP
      port: 4222
      targetPort: 4222
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: streaming
  namespace: ${namespace}
spec:
  replicas: 1 
  selector:
    matchLabels:
      app: streaming
  template: 
    metadata:
      labels:
        app: streaming
    spec:
      containers:
      - name: streaming
        image: ${dockerUrl}streaming:1.0.0
        args:
          - "-cid"
          - "datastack-cluster"
          - "--store"
          - "FILE"
          - "--dir"
          - "/store"
          - "--max_age"
          - "24h"
          - "--max_channels"
          - "0"
        ports:
          - containerPort: 4222
        volumeMounts:
          - name: streaming-store
            mountPath: /store
      volumes:
        - name: streaming-store
          hostPath:
            path: /mnt/store`
}