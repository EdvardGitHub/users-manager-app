import mongoose from 'mongoose';
import { MONGO_URL } from './index.js';

const connectDB = async () => {
  const connectToMongoDB = await mongoose.connect(`${MONGO_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  console.log(`MongoDB connected ${connectToMongoDB.connection.host}`.bgCyan);
};

export default connectDB;
