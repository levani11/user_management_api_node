import { Router } from 'express';
import { UserController } from '../controllers/UserController.js';

const userController = new UserController();
const router = Router();


router.get("/", userController.getAllUsers);

router.get("/:id", userController.getUserById);

router.post('/', userController.createUser);

router.delete('/:id', userController.deleteUser);

router.put('/:id', userController.updateUser);

export default router;


