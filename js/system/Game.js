;(function() {
	var Game = function(canvasId) {
		var canvas = document.getElementById(canvasId);
		var screen = canvas.getContext('2d');
		var audio = new Audio();
		audio.src = 'sounds/sound.mp3';
		audio.play();
		canvas.width = document.body.clientWidth;
		canvas.height = document.body.clientHeight;

		var gameSize = {
			x: canvas.width,
			y: canvas.height
		};

		this.bodies = [];

		var tick = function() {
			this.update(gameSize);
			this.draw(screen, gameSize);
			requestAnimationFrame(tick);
		}.bind(this);

		tick();
		
		this.TankLemmingFactory = new Factory(TankLemming, this, gameSize);
		setTimeout(function() {
			this.FallLemmingFactory = new Factory(FallLemming, this, gameSize);
		}.bind(this), 225);
		setTimeout(function() {
			this.FlyLemmingFactory = new Factory(FlyLemming, this, gameSize);
		}.bind(this), 425);

	}

	Game.prototype = {
		update: function(gameSize) {
			for (var i = 0; i < this.bodies.length; i++) {
				this.bodies[i].update(gameSize);
				//this.bodies[i].center.y += 7;
			}
		},
		draw: function(screen, gameSize) {
			screen.clearRect(0, 0, gameSize.x, gameSize.y);
			for (var i = 0; i < this.bodies.length; i++) {
				this.bodies[i].draw(screen);
			}
		},
		addBody: function(body) {
			this.bodies.push(body);
		},
		removeBody: function(body) {
			if (this.bodies.indexOf(body) > 0) {
				this.bodies.splice(this.bodies.indexOf(body), 1);
				body = null;
				delete body;
			}
		}
	}

	new Game('screen');
})();