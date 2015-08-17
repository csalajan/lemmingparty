var FlyLemming = function(game, gameSize) {
	this.game = game;
	this.speed = 3;
	this.type = 'Flying';

	this.sprite = new Image();
	this.sprite.src = 'images/lemming_sprites.png'

	this.posArr = [
		[692, 255],
		[822, 255],
		[952, 255]
	];

	this.pos = 0;

	this.size = {x: 128, y: 65};
	this.center = {
		x: gameSize.x,
		y: Math.random() * (gameSize.y - this.size.y)
	};
	this.mov = -this.speed;
}

FlyLemming.prototype = Lemming.prototype;