import ElastalertServer from './elastalert_server';

if (process.env.BITSENSOR_SENTRY_ENABLED !== 'false' && process.env.BITSENSOR_SENTRY_DSN !== undefined) {
  var Raven = require('raven');
  Raven.config(process.env.BITSENSOR_SENTRY_DSN, {
    captureUnhandledRejections: true
  }).install();
  console.log('Sentry logging enabled for Elastalert');

  Raven.context(function () {
    let server = new ElastalertServer();
    server.start();
  });
} else {
  let server = new ElastalertServer();
  server.start();
}
