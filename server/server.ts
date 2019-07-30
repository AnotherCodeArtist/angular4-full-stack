import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config({ path: '.env' });
import {app, ioServer} from './app';
import {catSystem} from './logging';
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true } );
const db = mongoose.connection;
(<any>mongoose).Promise = global.Promise;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  catSystem.info('Connected to MongoDB');
  ioServer.listen(process.env.WSPORT || 4300, () => {
    console.log('WebSockets are available at port ' + (process.env.WSPORT || 4300));
  });
  app.listen(app.get('port'), () => {
    catSystem.info('Angular Full Stack listening on port ' + app.get('port'));
  });
});



