'use strict';

var Hapi = require('hapi');
let mongoose = require('mongoose');
var restHapi = require('rest-hapi');

function api(){

    let server = new Hapi.Server();

    var config = {
        appTitle: "rest-hapi-demo",
        enableTextSearch: true
    };

    restHapi.config = config;

    server.connection(restHapi.config.server.connection);

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
