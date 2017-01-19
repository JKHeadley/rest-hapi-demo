'use strict';

let Hapi = require('hapi');
let mongoose = require('mongoose');
let restHapi = require('rest-hapi');

function api(){

    let server = new Hapi.Server();

    let config = {
        appTitle: "rest-hapi-demo",
        enableTextSearch: true,
        docExpansion: 'list'
    };

    server.connection(restHapi.config.server.connection);

    restHapi.config = config;

    server.register({
            register: restHapi,
            options: {
                mongoose: mongoose
            }
        },
        function() {
            server.start(function () {
                restHapi.logUtil.logActionComplete(restHapi.logger, "Server Initialized", server.info);
            });
        });

    return server;
}

module.exports = api();
