var dualShock = require('dualshock-controller');

var controller = dualShock({
	config: "dualShock3",
	accelerometerSmoothing: true,
	analogStickSmoothing: false
});

controller.on('error',function(data){
	console.log("Ups, ha ocurrido un error... info: "+data);	
});

controller.on('connected', function(data) {
	console.log("It's great!!! Your controller is connected");
});

controller.on('left:move', function(data) {
	console.log("Left Stick "+"x: "+data.x+"y: "+data.y);
});
controller.on('right:move', function(data) {
	console.log("Right Stick "+"x: "+data.x+"y: "+data.y);
});
controller.on('square:press', function (data) {
	console.log("Cuadro Presionado");
});
controller.on('square:release', function (data) {
	console.log("Cuadro Soltado");
});
controller.on('square:hold', function (data) {
	console.log("Cuadro Mantenido");
});
controller.on('battery:change',function(data){
	console.log("Batería: "+data);
})

controller.connect();
