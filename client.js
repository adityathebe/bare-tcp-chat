const net = require('net');
const readline = require('readline');

const socket = new net.Socket();
socket.connect(3000, '0.0.0.0');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

socket.on('data', buffer => {
	console.log(buffer.toString());
	rl.question('> ', answer => {
		socket.write(answer);
	});
});

