import { User } from '../models/User.js';

export class UserController {

    getAllUsers = async (req, res, next) => {
        try {
            const users = await User.getAll();
            res.status(200).json(users);
        } catch (err) {
            console.error("DB error:", err);
            res.status(500).send("Database error");
        }
    };

    getUserById = async (req, res, next) => {
        const { id } = req.params;

        try {
            const user = await User.getById(id);
            if (!user) return res.status(404).send("User not found");
            res.status(200).json(user);
        } catch (err) {
            res.status(500).send("Database error");
        }
    }

    createUser = async (req, res, next) => {
        try {
            const newUser = await User.create(req.body);
            res.status(201).json({ message: "User created successfully", id: newUser.id });
        } catch (err) {
            console.error("DB error:", err);
            res.status(500).send("Database error");
        }
    }

    updateUser = async (req, res, next) => {
        const { id } = req.params;
        try {
            const updated = await User.update(id, req.body);
            if (!updated) return res.status(404).send("User not found");
            res.status(200).json({ message: "User updated successfully" });
        } catch (err) {
            console.error("DB error:", err);
            res.status(500).send("Database error");
        }
    }

    deleteUser = async (req, res, next) => {
        const { id } = req.params;
        try {
            const deleted = await User.delete(id);
            if (!deleted) return res.status(404).send("User not found");
            res.status(200).json({ message: "User deleted successfully" });
        } catch (err) {
            console.error("DB error:", err);
            res.status(500).send("Database error");
        }
    }
}