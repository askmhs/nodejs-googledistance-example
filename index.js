import restify from 'restify';

require("babel-core/register");
require("babel-polyfill");

const server = restify.createServer({
	name: 'nodejs-googledistance-example'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

require('./src/routes/distance.js')(server);

server.listen(3000, () => {
    console.log('%s listening at %s', server.name, server.url);
});