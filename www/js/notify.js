define([], function() {

	// ALERT
	var alert = function(o, callback) {
		navigator.notification.alert(o.message, callback, o.title, "Ok");
	};

	// CONFIRM
	// return true/false
	var confirm = function(o, callback) {
		navigator.notification.confirm(
			o.message,
			function(buttonIndex) {
				return callback(buttonIndex == 2);
			},
			o.title, ["Nein", "Ja"]
		);
	};

	// ERROR
	var error = function(message) {

		this.alert({
			"title": "Es ist ein Fehler aufgetreten!",
			"message": message,
		}, function() {});
	};

	// DEL
	var del = function(message, callback) {

		this.confirm({
			"title": "Ganz sicher?",
			"message": message
		}, callback);
	};

	// BAD GATEWAY
	var badGateway = function() {
		this.error("Der Server ist aktuell nicht zu erreichen...");
	};

	return {
		"alert": alert,
		"confirm": confirm,
		"error": error,
		"del": del,
		"badGateway": badGateway
	};
});