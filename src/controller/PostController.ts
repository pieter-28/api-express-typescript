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
            if (!post) {
                return res.status(404).json({message: "Post not found"});
            }
            return res.status(200).json(post);
        } catch (e) {
            next(e);
        }
    }

    static async createPost(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body;
            if (!body.title) {
                return res.status(400).json({message: "Title is required"});
            }
            if (!body.description) {
                return res.status(400).json({message: "Description is required"});
            }
            const post = await Post.create({
                title: body.title,
                description: body.description
            });
            return res.status(201).json({
                data: post,
                message: "Post created successfully",
                status: 201,
            });
        } catch (e) {
            next(e);
        }
    }

    static async updatePost(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id;
            const body = req.body;
            if (!body.title) {
                return res.status(400).json({message: "Title is required"});
            }
            if (!body.description) {
                return res.status(400).json({message: "Description is required"});
            }
            const post = await Post.findByPk(id);
            if (!post) {
                return res.status(404).json({message: "Post not found"});
            }
            await post.update(
                {
                    title: body.title,
                    description: body.description
                },
                {
                    where: {
                        id: post.id
                    }
                }
            );

            return res.status(200).json({
                data: post,
                message: "Post updated successfully",
                status: 200,
            });

        } catch (e) {
            next(e);
        }
    }

    static async deletePost(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id;
            const post = await Post.findByPk(id);
            if (!post) {
                return res.status(404).json({message: "Post not found"});
            }
            await post.destroy();
            return res.status(200).json({
                message: "Post deleted successfully",
                status: 200,
            });
        } catch (e) {
            next(e);
        }
    }
}