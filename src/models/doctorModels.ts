import { options, Person, IPersonDoctor } from './commonSchema';
import mongoose from 'mongoose';

export const Doctor = Person.discriminator(
  'Doctor',
  new mongoose.Schema(
    {
      doctorId: {
        type: String,
        required: true,
        unique: true,
      },
      title: String,
      specialization: [String],
      clinicIds: [String],
    },
    options
  )
);
