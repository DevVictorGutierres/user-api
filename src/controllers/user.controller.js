import * as userService from '../services/user.service.js';

export const getUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

export const getUser = async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  user ? res.json(user) : res.status(404).send('User not found');
};

export const createUser = async (req, res) => {
  const user = await userService.createUser(req.body);
  user ? res.status(201).json(user) : res.status(400).send('Invalid user data');
};

export const updateUser = async (req, res) => {
  const user = await userService.updateUser(req.params.id, req.body);
  user ? res.json(user) : res.status(404).send('User not found');
};

export const deleteUser = async (req, res) => {
  const success = await userService.deleteUser(req.params.id);
  success ? res.sendStatus(204) : res.status(404).send('User not found');
};
