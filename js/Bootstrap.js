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
		'game/Factory'
		], 
		function() {
			require(['game/Game']);
		}
	);
});