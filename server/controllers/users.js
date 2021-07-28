import mongoose from 'mongoose';
import UsersData from '../models/users.js';

// get users
export const getUsers = async (req, res) => {
  try {
    const allUsers = await UsersData.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// create users
export const createUsers = async (req, res) => {
  const { name, age, mail, password } = req.body;

  try {
    if (!name.trim() || !age.trim() || !mail.trim() || !password.trim()) {
      return res
        .status(422)
        .json({ message: 'Error, all fields are required' });
    }

    const newUsers = await new UsersData({ ...req.body });
    await newUsers.save();
    res.status(200).json(newUsers);
  } catch (error) {
    console.error(error);
  }
};

// update users
export const updateUsers = async (req, res) => {
  const { id } = req.params;
  const place = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  const updateUser = await UsersData.findByIdAndUpdate(id, place, {
    new: true,
  });

  res.json(updateUser);
};

// delete users
export const deleteUsers = async (req, res) => {
  try {
    await UsersData.findByIdAndRemove({ _id: req.params.id }).exec(
      (error, result) => {
        if (error) {
          return res
            .status(422)
            .json({ message: `There is no such user ${id}` });
        }
        result
          .remove()
          .then(() => res.status(200).json({ message: 'Success deleted!' }))
          .catch((error) => console.error(error));
      }
    );
  } catch (error) {
    console.error(error);
  }
};
