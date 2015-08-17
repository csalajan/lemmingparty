var Flag = function(game, gameSize, attached) {
	this.game = game;
	this.attached = attached;

	this.size = {x: 94, y: 58};
	this.center = {x: 0, y: 0};
};

Flag.prototype = {
	update: function(gameSize) {
		this.center.x = this.attached.center.x + 75;
		this.center.y = this.attached.center.y - 50;
	},
	draw: function(screen) {
		screen.fillStyle="#FFFFFF";
		screen.fillRect(this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);
	}
};