import mongoose, { Schema, Document } from 'mongoose';
import { IPerson } from '../../../medPlan/src/models';

export const options = { discriminatorKey: 'kind' };

export interface IPersonDoctor extends Document, IPerson {}
const personSchema: Schema = new Schema(
  {
    //   doctorId: {
    //     type: String,
    //     unique: true,
    //   },
    firstName: String,
    lastName: String,
    gender: {
      type: String,
      enum: ['Male', 'Female'],
    },
    // email: {
    //   type: String,
    // },
    // phone: Number,
    age: Number,
    // contacts: {
    //   address: {
    //     country: String,
    //     city: String,
    //     state: String,
    //     street: String,
    //     zipCode: Number,
    //   },
    //   phone: Number,
    //   email: String,
    // },
  },
  options
);

export const Person = mongoose.model('Person', personSchema);
