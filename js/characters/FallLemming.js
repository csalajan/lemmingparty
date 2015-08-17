var FallLemming = function(game, gameSize) {
	this.game = game;
	this.speed = 3;
	this.type = 'Falling';

	this.sprite = new Image();
	this.sprite.src = 'images/lemming_sprites.png';

	this.posArr = [];

	this.pos = 0;

	this.fallArr = [
		[254, 206]
	];

	this.walkArr = [
		[8, 0],
		[58, 0],
		[108, 0],
		[158, 0],
		[208, 0],
		[258, 0],
		[308, 0],
		[358, 0],
		[408, 0],
		[458, 0],
		[508, 0],
		[558, 0],
		[608, 0]

	];

	this.size = {x: 44, y: 75};
	this.posArr = this.fallArr;
	this.center = {
		x: Math.random() * gameSize.x,
		y: 0
	};
	this.mov = this.speed;
}

FallLemming.prototype = Lemming.prototype;