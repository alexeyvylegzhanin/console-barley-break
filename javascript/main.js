(function(game) {
	
	document.getElementById('generate').addEventListener('click', function() {
		
		var deckSize = Number(document.getElementById('deckSize').value),
			matrixSize = game.getMatrixSize();

		if (!matrixSize || matrixSize !== deckSize) {
			game.setMatrixSize(deckSize)
				.fill();
		}

		game.shuffle()
			.output();

	}, false);

	window.addEventListener('keydown', function(event) {
		
		var deckReady = game.getMatrixSize() ? true : false,
			isComplete = game.appData.isComplete;
		
		if (!isComplete && deckReady && event.keyCode > 36 && event.keyCode < 41) {
			game.makeMove(event.keyCode)
				.incrementSteps()
				.checkCompletion()
				.output();
		}

	}, false);

})(window.barleyBreak);