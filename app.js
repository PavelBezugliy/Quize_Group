require('@babel/register');

const express = require('express');
const path = require('path');
const logger = require('morgan');
const ssr = require('./middleware/ssr');

const mainRoute = require('./routes/main.route');
const questRoute = require('./routes/quest.route');
const authRoute = require('./routes/auth.route');


const app = express();
const PORT = 3000;

app.use(ssr);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRoute);
app.use('/', questRoute);
app.use('/auth', authRoute);

app.listen(PORT, () => {
  console.log(`server started on PORT: ${PORT}`);
});