define([
	"jquery",
	"underscore-min",
	"backbone-min",
	"junior",
	"notify",
	"text!templates/home.html",
], function($, _, backbone, Jr, notify, homeTpl) {

	var HomeView = Jr.View.extend({

		events: {
			"touchend [data-navigate]": "goto"
		},

		// INITIALIZE
		initialize: function() {},

		// RENDER
		render: function() {

			// render basis html
			var t = _.template(homeTpl)({});
			this.$el.html(t);

			return this;
		},

		// UNLOAD
		unload: function() {
			this.undelegateEvents();
		},

		// GOTO 
		goto: function(e) {
			e.preventDefault();

			var $e = $(e.target);
			if (!$e.data("navigate")) $e = $e.parent();

			// return to last screen
			Jr.Navigator.navigate($e.data("navigate"), {
				trigger: true,
				animation: {
					type: Jr.Navigator.animations.SLIDE_STACK,
					direction: Jr.Navigator.directions.LEFT
				}
			});
		}
	});

	return HomeView;
});