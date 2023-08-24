const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const utilities = require('./utilities');
const logger = require('morgan');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// MongoDB connection URL and options
const url = 'mongodb://localhost:27017';
const dbName = 'water_level_db';

const db = require(utilities.db);

let waterLevel = 50;
let batteryLevel = 60;

app.use(utilities.globalRequestInterceptor.requestInterceptor);


app.use(utilities.globalErrorHandler);
app.use(utilities.globalReponseHandler.responseHandler);

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  const db = client.db(dbName);

  app.get('/levels', async (req, res) => {
    try {
      const levels = await db.collection('levels').findOne({});
      res.json(levels);
    } catch (error) {
      console.error('Error fetching levels:', error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });

  app.post('/levels', async (req, res) => {
    const { water, battery } = req.body;
    waterLevel = water;
    batteryLevel = battery;

    try {
      await db.collection('levels').updateOne({}, { $set: { waterLevel, batteryLevel } }, { upsert: true });
      res.json({ message: 'Levels updated successfully' });
    } catch (error) {
      console.error('Error updating levels:', error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });

  process.on('unhandledRejection', (reason) => {
    console.log('********************************');
    console.log('Reason: ' + reason);
    console.log('********************************');
  });
  
  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
