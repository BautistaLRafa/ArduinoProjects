var five = require("johnny-five"),
	board,
	button;

board = new five.Board();

board.on("ready", function(){

	button = new five.Button(7);
	led = new five.Led(9);

	button.on("hold", function() {
    	console.log( "Button held" );
  	});

  	button.on("press", function() {
    	console.log( "Button pressed" );
  	});

  	button.on("release", function() {
    	console.log( "Button released" );
  	});

	board.repl.inject({
		button: button,
		led: led
	});

});