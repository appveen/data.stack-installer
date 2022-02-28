let config = {
	'Database': [
		{
			"l": "Author DB URL",
			"e": "MONGO_AUTHOR_URL",
			"t": "text",
			"d": "mongodb://localhost:27017",
			"r": true,
			"h": "MongoDB standard connection URL, without options."
		},
		{
			"l": "AppCenter DB URL",
			"e": "MONGO_APPCENTER_URL",
			"t": "text",
			"d": "mongodb://localhost:27017",
			"r": true,
			"h": "MongoDB standard connection URL, without options."
		},
		{
			"l": "Logs DB URL",
			"e": "MONGO_LOGS_URL",
			"t": "text",
			"d": "mongodb://localhost:27017",
			"r": true,
			"h": "MongoDB standard connection URL, without options."
		},
		{
			"l": "Author DB",
			"e": "MONGO_AUTHOR_DBNAME",
			"t": "text",
			"d": "datastackConfig",
			"r": true,
			"h": ""
		},
		{
			"l": "Logs DB",
			"e": "MONGO_LOGS_DBNAME",
			"t": "text",
			"d": "datastackLogs",
			"r": true,
			"h": ""
		},
		{
			"l": "Reconnection wait time (ms)",
			"e": "MONGO_RECONN_TIME_MILLI",
			"t": "number",
			"d": "1000",
			"r": true,
			"h": "Milliseconds to wait before attempting to reconnect to MongoDB."
		},
		{
			"l": "DB Reconnection interval",
			"e": "MONGO_RECONN_TRIES",
			"t": "number",
			"d": "21600",
			"r": true,
			"h": "Maximum number to attempts to reconnect."
		},
		{
			"l": "DB connection pool size",
			"e": "MONGO_CONNECTION_POOL_SIZE",
			"t": "number",
			"d": "5",
			"h": null
		}
	],
	'Streaming': [
		{
			"l": "Connection URL",
			"e": "STREAMING_HOST",
			"t": "text",
			"d": "nats://streaming.appveen:4222",
			"r": true,
			"h": null
		},
		{
			"l": "Username",
			"e": "STREAMING_USER",
			"t": "text",
			"d": null,
			"h": null
		},
		{
			"l": "Password",
			"e": "STREAMING_PASS",
			"t": "text",
			"d": null,
			"h": null
		},
		{
			"l": "Channel name",
			"e": "STREAMING_CHANNEL",
			"t": "text",
			"d": "datastack-cluster",
			"r": true,
			"h": null
		},
		{
			"l": "Max. reconnection attempts",
			"e": "STREAMING_RECONN_ATTEMPTS",
			"t": "number",
			"d": 500, 
			"h": "Maximum number to attempts to reconnect.", 
		},
		{
			"l": "Reconnection wait time (ms)",
			"e": "STREAMING_RECONN_TIMEWAIT_MILLI",
			"t": "number",
			"d": 500, 
			"h": "Time to wait before attempting to reconnect.", 
		},
	],
	'Cache': [
		{
			"l": "Cache URL",
			"e": "CACHE_HOST",
			"t": "text",
			"d": "cache.appveen", 
			"r": true,
			"h": null, 
		},
		{
			"l": "Cache port",
			"e": "CACHE_PORT",
			"t": "number",
			"d": "6397", 
			"h": null, 
		},
		{
			"l": "Cluster connection URL",
			"e": "CACHE_CLUSTER",
			"t": "text",
			"d": null, 
			"h": "Cache cluster URL in the format ip:port,ip:port. If set then this will be used instead of <code>CACHE_HOST</code> and <code>CACHE_PORT</code>.", 
		},
		{
			"l": "Max. reconnection attempts",
			"e": "CACHE_RECONN_ATTEMPTS",
			"t": "number",
			"d": 500, 
			"h": "Maximum number to attempts to reconnect.", 
		},
		{
			"l": "Reconnection wait time (ms)",
			"e": "CACHE_RECONN_TIMEWAIT_MILLI",
			"t": "number",
			"d": 500, 
			"h": "Time to wait before attempting to reconnect.", 
		},
	],
	"Docker": [
		{
			"l": "Registry server type",
			"e": "DOCKER_REGISTRY_TYPE",
			"t": "select",
			"v": ["-Nil-", "Custom" ,"ECR", "GCR"],
			"d": "-Nil-",
			"h": null
		},
		{
			"l": "URL",
			"e": "DOCKER_REGISTRY_SERVER",
			"t": "text",
			"d": null,
			"h": null
		},
		{
			"l": "Email",
			"e": "DOCKER_EMAIL",
			"t": "text",
			"d": null,
			"h": null
		},
		{
			"l": "Username",
			"e": "DOCKER_USER",
			"t": "text",
			"d": null,
			"h": null
		},
		{
			"l": "Password",
			"e": "DOCKER_PASSWORD",
			"t": "text",
			"d": null,
			"h": null
		},
		{
			"l": "Container engine",
			"e": "DOCKER_CONTAINER_ENGINE",
			"t": "select",
			"v": ["docker", "podman"],
			"d": "docker",
			"h": null
		},
		{
			"l": "Container format",
			"e": "DOCKER_CONTAINER_FORMAT",
			"t": "select",
			"v": ["docker", "oci"],
			"d": "docker",
			"h": null
		},
		{
			"l": "Reject invalid docker certificates?",
			"e": "DOCKER_CONTAINER_ENGINE_TLS_VERIFY",
			"t": "checkbox",
			"d": true,
			"h": null
		},
		{
			"l": "AWS Access key",
			"e": "AWS_ACCESS_KEY_ID",
			"t": "text",
			"d": null,
			"h": null
		},
		{
			"l": "AWS Secret",
			"e": "AWS_SECRET_ACCESS_KEY",
			"t": "text",
			"d": null,
			"h": null
		},
		{
			"l": "AWS Region",
			"e": "AWS_DEFAULT_REGION",
			"t": "text",
			"d": null,
			"h": null
		},
	],
	'Access Control': [
		{
			"l": "User token duration (s)",
			"e": "RBAC_USER_TOKEN_DURATION",
			"t": "number",
			"d": 600,
			"h": "Validity in seconds for the JWT token of a user. Minimum value must be 600s (10m)"
		},
		{
			"l": "Allow user to refresh token?",
			"e": "RBAC_USER_TOKEN_REFRESH",
			"t": "checkbox",
			"d": true,
			"h": "User can call the session refresh API without logging in."
		},
		{
			"l": "Bot token validity (m)",
			"e": "RBAC_BOT_TOKEN_DURATION",
			"t": "number",
			"d": 15,
			"h": "Validity in minutes for the JWT token of a bot. Minimum value must be 15m"
		},
		{
			"l": "Heartbeat interval (s)",
			"e": "RBAC_HB_INTERVAL",
			"t": "number",
			"d": 60,
			"h": "Heartbeat interval in seconds. Heartbeat is used to keep the session alive."
		},
		{
			"l": "Max. heartbeat miss count",
			"e": "RBAC_HB_MISS_COUNT",
			"t": "number",
			"d": 1,
			"h": "Max. number of consecutive missed-heartbeats to invalidate a session."
		},
		{
			"l": "Strong password",
			"e": "RBAC_PASSWORD_COMPLEXITY",
			"t": "checkbox",
			"d": false,
			"h": "Enable/Disable strong password requirement."
		},
		{
			"l": "Min. password length",
			"e": "RBAC_PASSWORD_LENGTH",
			"t": "number",
			"d": 10,
			"h": "Required min. length of the password."
		},
		{
			"l": "Auth. mode",
			"e": "RBAC_USER_AUTH_MODES",
			"t": "select",
			"v": ["local"],
			"d": "local",
			"h": "Authentication modes."
		},
		{
			"l": "Close window to logout",
			"e": "RBAC_USER_CLOSE_WINDOW_TO_LOGOUT",
			"t": "checkbox",
			"d": false,
			"h": "End the user session when the user closed the window."
		},
		{
			"l": "No. of failed login attempts to lock the account.",
			"e": "RBAC_USER_LOGIN_FAILURE_THRESHOLD",
			"t": "number",
			"d": 10,
			"h": "Max. number of consecutive login failures allowed before the account is locked."
		},
		{
			"l": "Time window to count failed attempts (s)",
			"e": "RBAC_USER_LOGIN_FAILURE_DURATION",
			"t": "number",
			"d": 1,
			"h": "Time interval for which the number of consecutive login failures should be counted."
		},
		{
			"l": "Cooldown duration before account is reenabled (s)",
			"e": "RBAC_USER_LOGIN_FAILURE_COOLDOWN",
			"t": "number",
			"d": 60,
			"h": "The account is reactivated after <code>RBAC_USER_LOGIN_FAILURE_COOLDOWN</code> seconds if it gets locked due to multiple failed logins attempts."
		},
		{
			"l": "Single active session per user",
			"e": "RBAC_USER_TO_SINGLE_SESSION",
			"t": "checkbox",
			"d": false,
			"h": "If enabled, users can have only one active session."
		},
		{
			"l": "Allow user to relogin?",
			"e": "RBAC_USER_RELOGIN_ACTION",
			"t": "select",
			"v": ["allow", "deny"],
			"d": "allow",
			"h": "Allow a user to start a new session while one is already active. This works with <code>RBAC_USER_TO_SINGLE_SESSION</code> setting."
		}
	],
	'Security': [
		{
			"l": "Access-Control-Allow-Origin",
			"e": "SEC_HEADER_ACCESS_CONTROL_ALLOW_ORIGIN",
			"t": "text",
			"d": "*",
			"h": null
		},
		{
			"l": "Access-Control-Allow-Methods",
			"e": "SEC_HEADER_ACCESS_CONTROL_ALLOW_METHODS",
			"t": "text",
			"d": "GET, POST, OPTIONS, PUT, DELETE",
			"h": null
		},
		{
			"l": "Access-Control-Allow-Headers",
			"e": "SEC_HEADER_ACCESS_CONTROL_ALLOW_HEADERS",
			"t": "text",
			"d": "content-type,authorization,access-control-allow-methods,access-control-allow-origin,*",
			"h": null
		},
		{
			"l": "Cache-Control",
			"e": "SEC_HEADER_CACHE_CONTROL",
			"t": "text",
			"d": "no-cache",
			"h": null
		},
		{
			"l": "Content-Security-Policy (CSP)",
			"e": "SEC_HEADER_CONTENT_SECURITY_POLICY",
			"t": "text",
			"d": "default-src * data: 'unsafe-eval' 'unsafe-inline'",
			"h": null
		},
		{
			"l": "Server",
			"e": "SEC_HEADER_SERVER",
			"t": "text",
			"d": "data.stack/2.1.0",
			"h": null
		},
		{
			"l": "Strict-Transport-Security",
			"e": "SEC_HEADER_STRICT_TRANSPORT_SECURITY",
			"t": "text",
			"d": "max-age=31536000; includeSubDomains",
			"h": null
		},
		{
			"l": "X-Content-Type-Options",
			"e": "SEC_HEADER_X_CONTENT_TYPE_OPTION",
			"t": "text",
			"d": "nosniff",
			"h": null
		},
		{
			"l": "X-Frame-Options (XFO)",
			"e": "SEC_HEADER_X_FRAME_OPTION",
			"t": "text",
			"d": "sameorigin",
			"h": null
		},
		{
			"l": "X-Powered-By",
			"e": "SEC_HEADER_X_POWERED_BY",
			"t": "text",
			"d": "data.stack/2.0",
			"h": null
		},
		{
			"l": "X-XSS-Protection",
			"e": "SEC_HEADER_X_XSS_PROTECTION",
			"t": "text",
			"d": "1; mode=block",
			"h": null
		},
	],
	'File Storage': [
		{
			"l": "Type",
			"e": "STORAGE_ENGINE",
			"t": "select",
			"v": ["GRIDFS", "AZURE"],
			"d": "GRIDFS",
			"h": "Defines which storage option to use for storing files.",
		},
		{
			"l": "Connection string",
			"e": "STORAGE_AZURE_CONNECTION_STRING",
			"t": "text",
			"d": null,
			"h": "Connection string to connect to Azure Storage Account.",
		},
		{
			"l": "Container name",
			"e": "STORAGE_AZURE_CONTAINER",
			"t": "text",
			"d": null,
			"h": "Container to be used to store files in Azure Storage Account.",
		},
		{
			"l": "Shared key",
			"e": "STORAGE_AZURE_SHARED_KEY",
			"t": "text",
			"d": null,
			"h": "Shared Key for the Azure Storage Account.",
		},
		{
			"l": "Link validity (s)",
			"e": "STORAGE_AZURE_TIMEOUT",
			"t": "text",
			"d": null,
			"h": "Duration for which the download link will be active.",
		},
	],
	'Hooks': [
		{
			"l": "Retry limit",
			"e": "HOOK_RETRY",
			"t": "number",
			"d": 3,
			"h": "Number to retries when there is a failure."
		},
		{
			"l": "Connection timeout (s)",
			"e": "HOOK_CONNECTION_TIMEOUT",
			"t": "number",
			"d": 30,
			"h": null
		},
		{
			"l": "Concurrent outbound requests",
			"e": "HOOK_POST_BATCH",
			"t": "number",
			"d": 500,
			"h": "Maximum number of parallel API request that will made to external system in case of Post/Workflow hooks."
		}
	],
	'Misc': [
		{
			"l": "API Timeout(s)",
			"e": "API_REQUEST_TIMEOUT",
			"t": "number",
			"d": 120,
			"h": "API request timeout for all incoming requests.",
		},
		{
			"l": "API Methods to log",
			"e": "API_LOGS_METHODS",
			"t": "text",
			"d": "POST,PUT,DELETE",
			"h": "Only the above API methods would be logged.",
		},
		{
			"l": "API logs retention (days)",
			"e": "API_LOGS_TTL_DAYS",
			"t": "number",
			"d": 30,
			"h": "Number of days to retain API logs.",
		},
		{
			"l": "Open bookmarks in new window",
			"e": "BOOKMARK_OPEN_TAB",
			"t": "checkbox",
			"d": true,
			"h": null
		},
		{
			"l": "Certificate CN",
			"e": "CERTIFICATE_COMMON_NAME",
			"t": "text",
			"d": "data.stack.appveen.com",
			"r": true,
			"h": null
		},
		{
			"l": "Certificate Country",
			"e": "CERTIFICATE_COUNTRY",
			"t": "text",
			"d": "IN",
			"r": true,
			"h": null
		},
		{
			"l": "Certificate State",
			"e": "CERTIFICATE_STATE",
			"t": "text",
			"d": "Karnataka",
			"r": true,
			"h": null
		},
		{
			"l": "Certificate Locality",
			"e": "CERTIFICATE_LOCALITY",
			"t": "text",
			"d": "Bangalore",
			"r": true,
			"h": null
		},
		{
			"l": "Certificate Email",
			"e": "CERTIFICATE_EMAIL",
			"t": "text",
			"d": "support@appveen.com",
			"r": true,
			"h": null
		},
		{
			"l": "Certificate Organization",
			"e": "CERTIFICATE_ORGANIZATION",
			"t": "text",
			"d": "appveen Techologies Pvt. Ltd.",
			"r": true,
			"h": null
		},
		{
			"l": "Certificate Organization_unit",
			"e": "CERTIFICATE_ORGANIZATION_UNIT",
			"t": "text",
			"d": "data.stack",
			"r": true,
			"h": null
		},
		{
			"l": "Certificate Root_domain",
			"e": "CERTIFICATE_ROOT_DOMAIN",
			"t": "text",
			"d": "appveen.com",
			"r": true,
			"h": null
		},
		{
			"l": "Permitted file extensions",
			"e": "DATA_STACK_ALLOWED_FILE_TYPE",
			"t": "text",
			"d": "jpeg,ppt,xls,csv,doc,jpg,png,gif,zip,tar,rar,gz,bz2,7z,mp4,mp3,pdf,ico,docx,pptx,xlsx,ods,xml,txt",
			"h": null
		},
		{
			"l": "Namespace",
			"e": "DATA_STACK_NAMESPACE",
			"t": "text",
			"d": "appveen",
			"h": "Kubernetes namespace where data.stack is deployed.",
		},
		{
			"l": "Environment",
			"e": "DATASTACKENV",
			"t": "text",
			"d": "K8s",
			"h": null
		},
		{
			"l": "LDAP connection timeout",
			"e": "DIRECTORY_CONNECTION_TIMEOUT_MILLI",
			"t": "number",
			"d": 10000,
			"h": "Time to wait for establishing an LDAP connection."
		},
		{
			"l": "LDAP max records to fetch",
			"e": "DIRECTORY_RECORD_FETCH_TIME_LIMIT",
			"t": "number",
			"d": 20,
			"h": "Max. number of records to fetch per LDAP query."
		},
		{
			"l": "Temp. file mountpath for data services",
			"e": "DS_FS_MOUNT_PATH",
			"t": "text",
			"d": "/tmp/ds",
			"h": "This is pure file system volume for the data service pods. The recommended path for this is <em>/tmp/ds</em> . All data services will share this path. We do not support the configuration involving Persistent Volumes and Persistent Volume Claims as of now.",
		},
		{
			"l": "Encryption Key",
			"e": "ENCRYPTION_KEY",
			"t": "text",
			"d": "aVerySecureEncryption_key@!#$^^123",
			"r": true,
			"h": "This key is used to encrypt sensitive data in the DB",
		},
		{
			"l": "Function log retention (d)",
			"e": "FAAS_LOGS_TTL_DAYS",
			"t": "number",
			"d": 30,
			"h": "Retention time for Function logs."
		},{
			"l": "FQDN",
			"e": "FQDN",
			"t": "text",
			"d": null,
			"h": null
		},
		{
			"l": "Google API key",
			"e": "GOOGLE_API_KEY",
			"t": "text",
			"d": null,
			"h": "This key is used for rendering maps",
		},
		{
			"l": "SSL key size",
			"e": "KEY_SIZE",
			"t": "select",
			"v": [2048, 4096],
			"d": 4096,
			"h": null
		},
		{
			"l": "LOG_LEVEL",
			"e": "LOG_LEVEL",
			"t": "select",
			"v": ["INFO", "ERROR", "DEBUG", "TRACE"],
			"d": "INFO",
			"h": null,
		},
		{
			"l": "Max. File size",
			"e": "MAX_FILE_SIZE",
			"t": "text",
			"d": "5MB",
			"h": "Max. allowed file size to be uploaded.",
		},
		{
			"l": "Max. JSON size",
			"e": "MAX_JSON_SIZE",
			"t": "text",
			"d": "100kb",
			"h": "Max. allowed JSON payload size.",
		},
		{
			"l": "MODE",
			"e": "MODE",
			"t": "select",
			"v": ["DEV", "PROD"],
			"d": "PROD",
			"h": null
		},
		{
			"l": "Events hook",
			"e": "NE_EVENTS_URL",
			"t": "text",
			"d": null,
			"h": "URL where the data.stack events will be published.",
		},
		{
			"l": "NODE_ENV",
			"e": "NODE_ENV",
			"t": "text",
			"d": "text",
			"h": "text",
		},
		{
			"l": "Nodejs heap size",
			"e": "NODE_MAX_HEAP_SIZE",
			"t": "number",
			"d": 4096,
			"h": "Max heap size for generated data services."
		},
		{
			"l": "Enable TLS on Proxy",
			"e": "PROXY_ENABLE_TLS",
			"t": "checkbox",
			"d": true,
			"h": "Run Proxy deployment on HTTP or HTTPs"
		},
		{
			"l": "Release version",
			"e": "RELEASE",
			"t": "text",
			"d": "2.0",
			"h": null
		},
		{
			"l": "Save mode for filters",
			"e": "SAVE_FILTER_DEFAULT_MODE_PRIVATE",
			"t": "checkbox",
			"d": true,
			"h": "text",
		},
		{
			"l": "TLS_REJECT_UNAUTHORIZED",
			"e": "TLS_REJECT_UNAUTHORIZED",
			"t": "checkbox",
			"d": false,
			"h": "Allow/Deny data.stack to make connections requests to systems with expired or invalid certificates.",
		},
		{
			"l": "Default timezone",
			"e": "TZ_DEFAULT",
			"t": "text",
			"d": "Zulu",
			"h": "Default timezone for apps.",
		},
		{
			"l": "UI Logs TTL (s)",
			"e": "UI_LOGS_TTL",
			"t": "number",
			"d": 172800,
			"h": "Retention time for UI logs in seconds",
		},
	]
};

let yamlFiles = {
	"Common": "common",
	"Deployment manager": "dm",
	"Gateway": "gw",
	"Monitoring": "mon",
	"Notification engine": "ne",
	"Partner manager": "pm",
	"Proxy": "proxy",
	"Service manager": "sm",
	"User": "user",
	"Messaging": "messaging",
	"Cache": "cache",
	"Config Map": "config",
	"Service Account": "serviceAccount",
}