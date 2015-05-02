define([
	"jquery",
	"underscore-min",
	"backbone-min",
	"junior",
	"views/HomeView",
], function($, _, backbone, Jr, HomeView) {
	var AppRouter = Jr.Router.extend({
		routes: {
			"": "home"
		},

		currentView: null,

		// RENDERING
		rendering: function(view) {
			if (this.currentView) {
				this.currentView.unload();
			}

			this.currentView = view;
			this.renderView(this.currentView);
		},

		// HOME
		home: function() {
			this.rendering(new HomeView());
		}
	});

	// starting the app
	var initialize = function() {

		window.router = new AppRouter;
		Backbone.history.start();
	};

	return {
		initialize: initialize
	};
});