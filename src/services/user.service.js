import User from '../models/user.model.js';

export const getAllUsers = async () => await User.find();

export const getUserById = async (id) => await User.findById(id);

export const createUser = async (data) => {
  const user = new User(data);
  return await user.save();
};

export const updateUser = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

export const deleteUser = async (id) => {
  const result = await User.findByIdAndDelete(id);
  return !!result;
};
