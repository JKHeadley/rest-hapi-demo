let Hapi = require('hapi')
let mongoose = require('mongoose')
let RestHapi = require('rest-hapi')

async function api () {
  try {

    let server = new Hapi.Server({port: 8080})

    let config = {
      appTitle: 'rest-hapi-demo',
      enableTextSearch: true,
      logRoutes: true,
      docExpansion: 'list',
      swaggerHost: 'localhost:8080',
      mongo: {
        URI: 'mongodb://localhost:27017/rest_hapi',
      },
    }

    await server.register({
      plugin: RestHapi,
      options: {
        mongoose: mongoose,
        config: config,
      },
    })

    await server.start()

    RestHapi.logUtil.logActionComplete(RestHapi.logger, 'Server Initialized', server.info)

    return server
  } catch (err) {
    console.log('Error starting server:', err)
  }

}

module.exports = api()
