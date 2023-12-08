import express from "express";
import {getUsers, getUsersById, createUsers, updateUsers, deleteUsers} from "../controllers/UserControler"

const router = express.router();

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', createUsers);
router.patch('/users/:id', updateUsers);
router.delete('/users/:id', deleteUsers);

export default router