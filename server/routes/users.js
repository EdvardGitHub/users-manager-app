import { Router } from 'express';
import {
  getUsers,
  createUsers,
  updateUsers,
  deleteUsers,
} from '../controllers/users.js';

const router = Router();

// get users
router.get('/', getUsers);
// create users
router.post('/', createUsers);
// update users
router.patch('/:id', updateUsers);
// delete users
router.delete('/:id', deleteUsers);

export default router;
