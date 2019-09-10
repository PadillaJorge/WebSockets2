var io = require('socket.io')();

var estado = false; 
	io.sockets.on('connection', function(socket){
	
		
    console.log("UN NUEVO CLIENTE CONECTADO CON EL SOCKET ID: " + socket.id);
    
    //hacer un emit con el estado para cada vez que se conecte un nuevo cliente, arranque con el estado 
	//AQUI COLOCAREMOS TODOS NUESTROS EVENTOS DE TIPO socket.on

	io.sockets.emit('estado', estado, console.log(estado + " hola"))
	

	socket.on('estado', function(data){
		console.log(data);
		io.sockets.emit('estado', data);
		
		estado = data;

	}); 

	}); 

	//AQUI COLOCAREMOS TODOS NUESTROS EVENTOS DE TIPO io.sockets.emit

	module.exports = io;