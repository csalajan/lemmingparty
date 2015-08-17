var Factory = function(body, game, gameSize) {
	this.template = body;
	this.game = game;
	this.gameSize = gameSize;

	this.start();
}

Factory.prototype = {
	start: function() {
		var self = this;
		this.timer = setInterval(function() {
			//for (var i  = 0; i < self.amount; i++) {
			var body = new self.template(self.game, self.gameSize);
			self.game.addBody(body);
			//}
		}, 2500);
	},
	stop: function() {
		clearInterval(this.timer);
	}

}