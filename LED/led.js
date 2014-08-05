var five = require("johnny-five"),
  keypress = require("keypress"),
  board = new five.Board(),
  time = 10000,
  led,
  piezo;

  keypress(process.stdin);

board.on("ready", function() {
  // Default to pin 13
  led = new five.Led.Array([9, 10, 11]);
  piezo = new five.Piezo(3);

  led["encender"] = function(pin,time){
    led[pin].strobe(time);

    console.log("Está encendido el PIN "+pin);
    return;
  };

  this.repl.inject({
    // led: led
    piezo: piezo
  });

  process.stdin.on('keypress', function (ch, key) {
    console.log('got "keypress"', key);

    if (key.name === "g") {
      led.stop().off();
      led.encender(0,500);
      piezo.frequency(1,Infinity);
    } else if (key.name === "y") {
      led.stop().off();
      led.encender(1,250);
      piezo.frequency(2,Infinity);
    } else if (key.name === "r") {
      led.stop().off();
      led.encender(2,125);
      piezo.frequency(4,Infinity);
    } else {
      led.stop().off();
      piezo.off();
    };

  });
  
});
