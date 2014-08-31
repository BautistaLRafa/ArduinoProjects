var five = require('johnny-five'),
	songs = require('j5-songs'),
	board = new five.Board();

board.on("ready", function(){

	var piezo = new five.Piezo();

	var song = songs.load('mario-fanfare');

	piezo.play(song);

	this.repl.inject({
		piezo: piezo,
		songs: songs
	});


});