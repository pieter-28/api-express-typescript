import {Request, Response, NextFunction} from "express";
import {Post} from "../models";

export default class PostController {
    static async getPost(req: Request, res: Response, next: NextFunction) {
        try {
            const post = await Post.findAll();
            return res.status(200).json(post);
        } catch (e) {
            next(e);
        }
    }

    static async getPostById(req: Request, res: Response, next: NextFunction) {
        try {
            const post = await Post.findByPk(req.params.id);
            return res.status(200).json(post);
        } catch (e) {
            next(e);
        }
    }

    static async createPost(req: Request, res: Response, next: NextFunction) {
        try {
            const post = await Post.create(req.body);
            return res.status(201).json(post);
        } catch (e) {
            next(e);
        }
    }
}