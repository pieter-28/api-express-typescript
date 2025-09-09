import {Request, Response, NextFunction} from "express";
import {User} from "../models/user";

export default class UserController {
    static async getUser(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await User.findAll();
            return res.status(200).json({
                data: user,
                message: "Get user successfully",
                status: 200,
            });
        } catch (e) {
            next(e);
        }
    }

    static async findUserById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id;
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({message: "User not found"});
            }
            return res.status(200).json({
                data: user,
                message: "Get user successfully",
                status: 200,
            });
        } catch (e) {
            next(e);
        }
    }

    static async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body;
            if (!body.username) {
                return res.status(400).json({message: "Name is required"});
            }
            if (!body.name) {
                return res.status(400).json({message: "Name is required"});
            }
            if (!body.email) {
                return res.status(400).json({message: "Email is required"});
            }
            if (!body.password) {
                return res.status(400).json({message: "Password is required"});
            }
            const user = await User.create({
                name: body.name,
                username: body.username,
                email: body.email,
                password: body.password
            });
            return res.status(201).json({
                data: user,
                message: "User created successfully",
                status: 201,
            });
        } catch (e) {
            next(e);
        }
    }

    static async updateUser(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id;
            const body = req.body;
            if (!body.username) {
                return res.status(400).json({message: "Name is required"});
            }
            if (!body.name) {
                return res.status(400).json({message: "Name is required"});
            }
            if (!body.email) {
                return res.status(400).json({message: "Email is required"});
            }
            if (!body.password) {
                return res.status(400).json({message: "Password is required"});
            }
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({message: "User not found"});
            }
            await user.update({
                name: body.name,
                username: body.username,
                email: body.email,
                password: body.password
            });
            return res.status(200).json({
                data: user,
                message: "User updated successfully",
                status: 200,
            });
        } catch (e) {
            next(e);
        }
    }

    static async deleteUser(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id;
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({message: "User not found"});
            }
            await user.destroy();
        } catch (e) {
            next(e);
        }
    }
}