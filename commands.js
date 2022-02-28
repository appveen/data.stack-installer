function commands(namespace){
	return [
		{
			t: "Create namespace",
			c: `kubectl create namespace ${name}`
		},
		{
			t: "Create proxy secret",
			c: `kubectl create secret -n ${namespace} generic ds-proxy-sec --from-file=./odp_server.key --from-file=./odp_server.crt`
		},
		{
			t: "Create service account",
			c: `kubectl create -f ${namespace}_serviceAccount.yaml`
		},
		{
			t: "Create configMap",
			c: `kubectl create -f ${namespace}_config.yaml`
		},
		{
			t: "Install data.stack services",
			c: `kubectl create -f ${namespace}_common.yaml
kubectl create -f ${namespace}_dm.yaml
kubectl create -f ${namespace}_gw.yaml
kubectl create -f ${namespace}_mon.yaml
kubectl create -f ${namespace}_ne.yaml
kubectl create -f ${namespace}_pm.yaml
kubectl create -f ${namespace}_proxy.yaml
kubectl create -f ${namespace}_sm.yaml
kubectl create -f ${namespace}_user.yaml
kubectl create -f ${namespace}_messaging.yaml
kubectl create -f ${namespace}_cache.yaml`
		},
	];
}