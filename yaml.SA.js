function yamlSA(namespace) {
	return `apiVersion: v1
kind: ServiceAccount
metadata:
  name: datastack-admin
  namespace: ${namespace}
---
kind: ClusterRole
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: datastack-admin-role
rules:
- apiGroups: ["*"]
  resources: ["*"]
  verbs: ["*"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: datastack-admin
roleRef:
  kind: ClusterRole
  name: datastack-admin-role
  apiGroup: ""
subjects:
- kind: ServiceAccount
  name: datastack-admin
  namespace: ${namespace}
`
}