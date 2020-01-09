import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import mongoose from 'mongoose';
import { router } from './routes';
require('dotenv').config();

const app = express();

mongoose.connect('mongodb://localhost/subscribers', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('connected to database'));

app.use(
  cors({
    credentials: true,
  })
);
app.use(express.urlencoded());
app.use(express.json());
app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use('/', router);
app.listen(3000, () => console.log('working server!'));
