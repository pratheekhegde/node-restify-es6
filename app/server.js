import restify from 'restify';
import bunyan from 'bunyan';
import routes from './routes';

// create restify server object
const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

// enable restify plugins
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.on('after', restify.plugins.auditLogger({
  event: 'after',
  body: 'true',
  log: bunyan.createLogger({
    name: 'audit',
    stream: process.stdout
  }),
  server: server,
  printLog: true
}));

// initialize routes
routes(server);

// start server
server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});