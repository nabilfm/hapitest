/**
 * Created by maryatimth on 12/12/2016.
 */


const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 9000
});

// Add the route
server.route({
    method: 'GET',
    path:'/',
    handler: function (request, reply) {

        return reply('nabilfm');
    }
});

server.route({
    method: 'GET',
    path:'/say/{words}',
    handler: function (request, reply) {
        return reply({message: request.params.words});
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});