var Flag = function(game, gameSize, attached) {
	this.game = game;
	this.attached = attached;
	this.text = "Hello World!";

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

		screen.font = "15px Georgia";
		screen.fillStyle="#000000";
		screen.fillText(this.text,this.center.x - (this.size.x / 2) + 5,this.center.y - (this.size.y / 2) + 30);
	}
};