module.exports = function (server, mongoose, logger) {
  server.route({
    method: 'GET',
    path: '/hello-world',
    config: {
      handler: function(request, h) { return "Hello World" },
      tags: ['api'],
      plugins: {
        'hapi-swagger': {}
      }
    }
  });
};