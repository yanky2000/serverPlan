import mongoose from 'mongoose';
import 'dotenv/config';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
const models = {};
export { connectDb };
// export default models;
