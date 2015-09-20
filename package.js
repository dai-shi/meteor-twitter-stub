Package.describe({
  name: "twitter-stub",
  summary: "A stub for use in testing. Stubs the oauth calls amongst other APIs.",
  version: "1.0.1_1",
  debugOnly: true
});

Package.on_use(function (api) {
  api.use(['service-configuration@1.0.3'], ['server']);
  api.use(['xolvio:http-interceptor@0.3.0'], ['server']);
  api.use(['underscore@1.0.2', 'iron:router@1.0.6'], ['server']);
  api.add_files([
    'twitter-stub-server.js'
  ], ['server']);
  api.export('TwitterStub', 'server');
});
