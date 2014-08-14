var five = require("johnny-five"),
	board,
	servo;

board = new five.Board();

board.on("ready",function(){

	servo = new five.Servo({
		pin: 5, 
		type: "continuous",
		startAt: 0
	});

	servo["sequence"]= function(){
		servo.to(45);
		board.wait(3000, function() {
			servo.min();
			servo.to(110,2000);
			servo.to(30,3000);
		});
	};

	this.repl.inject({
	    servo: servo
	 });

});

