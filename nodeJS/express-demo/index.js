const config = require('config');
const helmet = require('helmet');
const morgan = require('morgan'); // Logs HTTP requests to terminal - but can slow down app
const Joi = require('joi');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const home = require('./routes/home');
const courses = require('./routes/courses');
const express = require('express');
const app = express();

// View engine template
app.set('view engine', 'pug');
app.set('views', './views'); // default path to store templates

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // URL encoded payload parsed
app.use(express.static('public'));
app.use(helmet()); // 3rd party middleware
app.use('/', home);
app.use('/api/courses', courses);

// Configuration
console.log('Application Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));

// Running middleware on Development phase not during Production
if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  console.log('Morgan enabled...');
}

// Custom Middleware
app.use(logger);
app.use(auth);

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
