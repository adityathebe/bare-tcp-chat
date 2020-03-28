const net = require('net');
const readline = require('readline');

const server = net.createServer();
server.listen(3000, '0.0.0.0');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

server.on('connection', socket => {
	console.log('Got new connection');
	socket.write('Welcome User');

	socket.on('data', buffer => {
		console.log(buffer.toString());
		rl.question('> ', ans => {
			socket.write(ans);
		});
	});
});
