const app = require('./src/app');

console.log('Server running in ' + app.address().port);

module.exports = app;
