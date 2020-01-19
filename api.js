let Hapi = require("@hapi/hapi");
let mongoose = require("mongoose");
let RestHapi = require("rest-hapi");
let Auth = require("./plugins/auth.plugin.js");

async function api() {
  try {
    let server = Hapi.Server({
      port: 8080
    });

    let config = {
      appTitle: "rest-hapi-demo-auth",
      swaggerHost: "localhost:8080",
      mongo: {
        URI: "mongodb://localhost:27018/rest_hapi"
      },
      authStrategy: Auth.strategy
    };

    await server.register(Auth);
    await server.register({
      plugin: RestHapi,
      options: {
        mongoose,
        config
      }
    });

    await server.start();

    RestHapi.logUtil.logActionComplete(
      RestHapi.logger,
      "Server Initialized",
      server.info
    );

    return server;
  } catch (err) {
    console.log("Error starting server:", err);
  }
}

module.exports = api();
