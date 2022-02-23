let config = [
	[
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
			"l": "DB Reconnection time",
			"e": "MONGO_RECONN_TIME",
			"t": "number",
			"d": "1000",
			"h": "Milliseconds to wait before attempting to reconnect to MongoDB"
		},
		{
			"l": "Db Reconnection interval",
			"e": "MONGO_RECONN_TRIES",
			"t": "number",
			"d": "21600",
			"h": "Maximum number to attempts to try and reestablish a connection to MongoDB"
		}
	]
]