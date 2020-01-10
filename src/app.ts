import { Doctor } from './models/doctorModels';
import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import mongoose from 'mongoose';
import { router } from './routes';
require('dotenv').config();
import models, { connectDb } from './models';
import { doctors } from './fixtures/doctors';

const app = express();
const eraseDatabaseOnSync = true;

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      Doctor.deleteMany({}),
      // .Message.deleteMany({}),
    ]);
  }

  createDoctors();

  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`)
  );
});
async function createDoctors() {
  const docs = doctors.map(doc => new Doctor({ ...doc }));
}
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
