import mongoose from 'mongoose';

export const options = { discriminatorKey: 'kind' };
const personSchema = new mongoose.Schema(
  {
    //   doctorId: {
    //     type: String,
    //     unique: true,
    //   },
    firstName: String,
    lastName: String,
    gender: {
      type: String,
      enum: ['male', 'female'],
    },
    email: {
      type: String,
      unique: true,
    },
    phone: Number,
    age: Number,
    address: {
      country: String,
      city: String,
      state: String,
      street: String,
      zipCode: Number,
    },
  },
  options
);

export const Person = mongoose.model('Doctor', personSchema);
