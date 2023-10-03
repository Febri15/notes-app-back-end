const Hapi = require('@hapi/hapi');
const routes = require('./routes'); 
 
const init = async () => {
    const server = Hapi.server({
        port: 3636,
        host: 'localhost',
        routes: {
          cors: {
            // origin: ['*'],
            origin: ['Access-Control-Allow-Origin','http://notesapp-v1.dicodingacademy.com'],
            headers: ['Accept', 'Content-Type'],
            additionalHeaders: ['X-Requested-With']
          },
        },
      });
 
 
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
 
init();