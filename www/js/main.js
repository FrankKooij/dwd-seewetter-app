// Specify global module dependencies
require.config({
	baseUrl: "js/libs",
	paths: {
		"app": "../app",
		"router": "../router",
		"views": "../views",
		"notify": "../notify",
		"text": "../text",
		"templates": "../../templates",
	},
	shim: {
		"jquery": {
			exports: "$"
		},
		"underscore-min": {
			exports: "_"
		},
		"backbone-min": {
			deps: ["jquery"],
			exports: "Backbone",
			init: function(_, $) {
				Backbone.$ = $;
				return Backbone;
			}
		},
		"junior": {
			deps: ["jquery", "backbone-min", "underscore-min"],
			exports: "Jr"
		},
		"ratchet": {
			deps: ["jquery"]
		}
	}
});

require([
	"app"
], function(App) {

	App.initialize();
});