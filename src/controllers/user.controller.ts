import { User } from '../models/userModel';
import passport from 'passport';
import dotenv from 'dotenv';
import strategy from 'passport-facebook';

const FacebookStrategy = strategy.Strategy;

dotenv.config();

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
      callbackURL: process.env.FACEBOOK_CALLBACK_URL as string,
      profileFields: ['email', 'name'],
    },
    function(accessToken, refreshToken, profile, done) {
      const { email, first_name, last_name } = profile._json;
      const userData = {
        contacts: { email: email },
        firstName: first_name,
        lastName: last_name,
      };
      new User(userData).save();
      done(null, profile);
    }
  )
);
