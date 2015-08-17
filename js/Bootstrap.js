require.config({
	baseUrl: 'js',
	paths: {
		body: 'characters',
		game: 'system'

	}
});

require(['body/Lemming'], function() {
	require(
		[
		'body/TankLemming',
		'body/FallLemming',
		'body/FlyLemming',
		'body/Banner',
		'body/Flag',
		'game/Factory'
		], 
		function() {
			require(['game/Game']);
		}
	);
});