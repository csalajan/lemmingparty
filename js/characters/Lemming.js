var Lemming = function(game, gameSize) {
	this.game = game;
	this.speed = 3;
	
	var random = Math.random() * 100;
	if (random >= 0 && random < 33) {
		this.type = 'Falling';
	} else if (random >= 33 && random < 66) {
		this.type = 'Flying';
	} else if (random >= 66) {
		this.type = 'Tank';
	}

	this.sprite = new Image();
	this.sprite.src = 'images/lemming_sprites.png';

	this.posArr = [];

	this.pos = 0;

	this.standArr = [
		[358, 50]
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

	this.flyArr = [
		[692, 255],
		[822, 255],
		[952, 255]
	];

	this.tankArr = [
		[1026, 8],
		[1123 , 8]
	];

	this.fallArr = [
		[254, 206]
	]

	switch (this.type) {
		case 'Walking':
			this.size = {x: 47, y: 50};
			this.posArr = this.walkArr;
			this.center = {
				x: gameSize.x,
				y: gameSize.y - this.size.y / 2,
			};
			this.mov = -this.speed;
			
			break;
		case 'Flying':
			this.size = {x: 128, y: 65};
			this.posArr = this.flyArr;
			this.center = {
				x: gameSize.x,
				y: Math.random() * (gameSize.y - this.size.y)
			};
			this.mov = -this.speed;
			break;
		case 'Tank':
			this.size = {x: 94, y: 58};
			this.posArr = this.tankArr;
			this.center = {
				x: gameSize.x,
				y: gameSize.y - this.size.y / 2
			};
			this.mov = -this.speed;
			break;
		case 'Falling':
			this.size = {x: 44, y: 75};
			this.posArr = this.fallArr;
			this.center = {
				x: Math.random() * gameSize.x,
				y: 0
			};

			this.mov = this.speed;
	}
	
}

Lemming.prototype = {
	update: function(gameSize) {
		
		if (this.type == 'Falling') {
			this.center.y += this.mov;
			if (this.center.y > gameSize.y - this.size.y / 3) {
				this.type = 'Walking';
				this.size = {x: 47, y: 50};
				this.center.x = -this.center.x;
				this.posArr = this.walkArr;
				this.mov = this.speed;
			}
		} else {
			this.center.x += this.mov;
		}
		if (this.pos >= this.posArr.length - 1) {
			this.pos = 0;
		} else {
			this.pos++;
		}

		if (this.center.y - this.size.y > gameSize.y) {
			this.game.removeBody(this);
		}
	},
	draw: function(screen) {
		screen.save();
		if (this.type == 'Walking') {
			screen.scale(-1, 1)
		}
		screen.drawImage(this.sprite, this.posArr[this.pos][0], this.posArr[this.pos][1], this.size.x, this.size.y, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);
		screen.restore();
		
	}
};