var TankLemming = function(game, gameSize) {
	this.type = 'Tank';
	this.game = game;
	this.speed = 3;

	this.size = {x: 94, y: 58};
	this.center = {
		x: gameSize.x,
		y: gameSize.y - this.size.y / 2
	};
	this.mov = -this.speed;

	this.sprite = new Image();
	this.sprite.src = 'images/lemming_sprites.png';

	this.posArr = [
		[1026, 8],
		[1123 , 8]
	];

	this.pos = 0;
	if (this.game.banners) {
		this.game.addBody(new Flag(game, gameSize, this));
	}
}

TankLemming.prototype = Lemming.prototype;