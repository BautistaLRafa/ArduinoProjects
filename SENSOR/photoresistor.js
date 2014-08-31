var five = require("johnny-five"),
	board = new five.Board(),
	photoresistor;

board.on("ready",function(){

	photoresistor = new five.Sensor({
		pin: "A2",
		freq: 250
	})

	this.repl.inject({
		photo: photoresistor
	});


	photoresistor.on("data", function(){

		console.log(this.value);
	});



});