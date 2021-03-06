var Banner = function(game, gameSize, attached) {
	this.attached = attached;
	this.game = game;
	this.text = "Hello World!";
	this.size = {x: 250, y: 65};
	this.center = {x: 0, y: 0}
}

Banner.prototype = {
	update: function(gameSize) {
		this.center.x = this.attached.center.x + 200;
		this.center.y = this.attached.center.y;
	},
	draw: function(screen) {
		screen.fillStyle="#FFFFFF";
		screen.fillRect(this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);

		screen.font = "30px Georgia";
		screen.fillStyle="#000000";
		screen.fillText(this.text,this.center.x - (this.size.x / 2) + 25,this.center.y - (this.size.y / 2) + 40);
	}
}