const debug = require('debug')('app:startup');
const morgan = require('morgan'); // Logs HTTP requests to terminal - but can slow down app
const express = require('express');
const app = express();

// Running middleware on Development phase not during Production
if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  debug('Morgan enabled...'); // shorter than writing console.log()
}

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
