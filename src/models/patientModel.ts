import { Schema } from 'mongoose';
import { Person, options } from './commonSchema';
import { USER } from 'src/constants';

export const User = Person.discriminator(
  USER,
  new Schema(
    {
      dob: Date,
      login: {
        type: String,
        required: true,
        unique: true,
      },
      password: String,
      userData: String,
      contacts: {
        email: {
          type: String,
          unique: true,
          match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
        },
        phone: 123456677,
      },
    },
    options
  )
);
