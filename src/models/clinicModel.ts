import { Schema, model } from 'mongoose';
import { DOCTOR, CLINIC } from '../constants';
import { AddressSchema, ContactsSchema } from './commonSchema';

export const ClinicSchema = new Schema({
  title: String,
  doctors: [{ type: Schema.Types.ObjectId, ref: DOCTOR }],
  address: AddressSchema,
  contacts: ContactsSchema,
});

export const Clinic = model(CLINIC, ClinicSchema) 