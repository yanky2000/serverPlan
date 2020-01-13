import express from 'express';
import passport from 'passport';
import '../controllers/user.controller';

export const userRouter = express.Router();

userRouter.get('/auth/facebook', passport.authenticate('facebook'));

userRouter.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/home',
    failureRedirect: '/fail',
  })
);

userRouter.get('/fail', (req, res) => {
  res.send('Failed attempt');
});
