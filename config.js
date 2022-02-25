let config = {
	'Database': [
		{
			"l": "Author DB URL",
			"e": "MONGO_AUTHOR_URL",
			"t": "text",
			"d": null,
			"h": "MongoDB standard connection URL, without options."
		},
		{
			"l": "AppCenter DB URL",
			"e": "MONGO_APPCENTER_URL",
			"t": "text",
			"d": null,
			"h": "MongoDB standard connection URL, without options."
		},
		{
			"l": "Logs DB URL",
			"e": "MONGO_LOGS_URL",
			"t": "text",
			"d": null,
			"h": "MongoDB standard connection URL, without options."
		},
		{
			"l": "Author DB",
			"e": "MONGO_AUTHOR_DBNAME",
			"t": "text",
			"d": "datastackConfig",
			"h": ""
		},
		{
			"l": "Logs DB",
			"e": "MONGO_LOGS_DBNAME",
			"t": "text",
			"d": "datastackLogs",
			"h": ""
		},
		{
			"l": "Reconnection wait time (ms)",
			"e": "MONGO_RECONN_TIME",
			"t": "number",
			"d": "1000",
			"h": "Milliseconds to wait before attempting to reconnect to MongoDB."
		},
		{
			"l": "DB Reconnection interval",
			"e": "MONGO_RECONN_TRIES",
			"t": "number",
			"d": "21600",
			"h": "Maximum number to attempts to reconnect."
		}
	],
	'Messaging': [
		{
			"l": "Connection URL",
			"e": "MESSAGING_HOST",
			"t": "text",
			"d": "nats://messaging.appveen:4222", 
			"h": null, 
		},
		{
			"l": "Username",
			"e": "MESSAGING_USER",
			"t": "text",
			"d": null, 
			"h": null, 
		},
		{
			"l": "Password",
			"e": "MESSAGING_PASS",
			"t": "text",
			"d": null, 
			"h": null, 
		},
		{
			"l": "Max. reconnection attempts",
			"e": "MESSAGING_RECONN_ATTEMPTS",
			"t": "number",
			"d": 500, 
			"h": "Maximum number to attempts to reconnect.", 
		},
		{
			"l": "Reconnection wait time (ms)",
			"e": "MESSAGING_RECONN_TIMEWAIT",
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
			"d": "redis.appveen", 
			"h": null, 
		},
		{
			"l": "Cache port",
			"e": "CACHE_POST",
			"t": "number",
			"d": "6397", 
			"h": null, 
		},
		{
			"l": "Cluster connection URL",
			"e": "CACHE_CLUSTER",
			"t": "text",
			"d": null, 
			"h": "Redis cluster URL in the format ip:port,ip:port. If set then this will be used instead of <code>CACHE_HOST</code> and <code>CACHE_PORT</code>.", 
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
			"e": "CACHE_RECONN_TIMEWAIT",
			"t": "number",
			"d": 500, 
			"h": "Time to wait before attempting to reconnect.", 
		},
	],
	"Docker": [
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
			"l": "Registry server type",
			"e": "DOCKER_REGISTRY_TYPE",
			"t": "select",
			"v": ["Default", "ECR", "GCR"],
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
			"e": "RBAC_USER_AUTH_MODE",
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
			"d": null,
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
			"d": "data.stack/2.0",
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
	'File Storage': [],
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
	'Misc': []
}