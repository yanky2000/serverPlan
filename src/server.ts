import { userRouter } from './routes/user.router';
import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import passport from 'passport';
import { Visit } from './models/visitModel';
import { User } from './models/userModel';
import { User1 } from './fixtures/users';
import { Person } from './models/commonSchema';
import { Doctor } from './models/doctorModels';
import { router } from './routes/routes';
import { connectDb } from './models';
import { physician } from './fixtures/doctors';
import { Clinic } from './models/clinicModel';
import { wmemorial } from './fixtures/clinics';
import { visit1 } from './fixtures/visits';
import { Result } from './models/visitResultModel';
import { result1 } from './fixtures/results';

const app = express();
const eraseDatabaseOnSync = true;

connectDb().then(async () => {
  // const re = await Doctor.find();
  // const users = await User.find();
  // const clinics = await Clinic.find();
  if (eraseDatabaseOnSync) {
    Promise.all([
      Person.deleteMany({}),
      Clinic.deleteMany({}),
      Visit.deleteMany({}),
      Result.deleteMany({}),
      User.deleteMany({}),
    ]);
  }

  createInitData();

  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`)
  );
});

app.use(passport.initialize());
app.use(function(req, res, next) {
  res.setHeader(
    'Content-Security-Policy',
    "script-src 'self' https://apis.google.com"
  );
  return next();
});
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
// app.use('/', userRouter);
app.use('/', router);

async function createInitData() {
  try {
    const clinic = new Clinic(wmemorial);
    await clinic.save();

    const doctor = new Doctor({ ...physician, clinics: [clinic.id] });
    await doctor.save();

    const result = new Result(result1);
    await result.save();

    const visit = new Visit({
      ...visit1,
      // user: [user.id],
      doctor: [doctor.id],
      clinic: [clinic.id],
      results: [[result.id]],
    });
    await visit.save();

    const user = new User({ ...User1, visits: [visit.id] });
    await user.save();
  } catch (err) {
    console.log(err);
  }
}
