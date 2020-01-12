import { Schema } from 'mongoose';
import { VISIT } from 'src/constants';

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
  },
});

userSchema.pre('remove', function(next) {
  this.model(VISIT).deleteMany({ user: this._id }, next);
});
