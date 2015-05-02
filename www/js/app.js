define([
	"router",
	"notify",
	"moment",
	"ratchet"
], function(Router, notify, moment, ratchet) {

	$.support.cors = true;

	// INITIALIZE
	var initialize = function() {

		// phonegap is ready
		document.addEventListener("deviceready", function() {

			// do status bar magic
			if (typeof(StatusBar) !== 'undefined') {
				window.setTimeout(function() {
					StatusBar.styleDefault();
					StatusBar.backgroundColorByHexString("#F6F6F6");
					StatusBar.show();
				}, 1000);
			}

			// apply matching themes
			if (device.platform == "Android" || device.platform == "iOS") {
				$('link[href="css/ratchet-theme-ios.min.css"]').attr("href", "css/ratchet-theme-" + device.platform.toLowerCase() + ".css");
			}

			Router.initialize();

		}, false);
	};

	return {
		"initialize": initialize
	};
});