import mongoose, { Schema, Document } from 'mongoose';
import { IPerson } from '../../../medPlan/src/models';

export const options = { discriminatorKey: 'kind' };

export const AddressSchema = {
  country: String,
  city: String,
  state: String,
  street: String,
  zipCode: Number,
};
export const ContactsSchema = {
  phone: Number,
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
  },
};
export interface IPersonDoctor extends Document, IPerson {}

const personSchema: Schema<IPersonDoctor> = new Schema(
  {
    firstName: String,
    lastName: String,
    gender: {
      type: String,
      enum: ['Male', 'Female'],
    },
    address: AddressSchema,
    contacts: ContactsSchema,
  },
  options
);

export const Person = mongoose.model('Person', personSchema);
