import mongoose from 'mongoose';

const placesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    age: {
      type: Number,
      require: true,
      min: 0,
    },
    mail: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Users = mongoose.model('Users', placesSchema);

export default Users;
