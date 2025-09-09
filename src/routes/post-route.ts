import express from "express";
import PostController from "../controller/PostController";

const postRoute = express.Router();
postRoute.get("/posts", PostController.getPost);
postRoute.get("/posts/:id", PostController.getPostById);
postRoute.post("/posts", PostController.createPost);
postRoute.put("/posts/:id", PostController.updatePost);
postRoute.delete("/posts/:id", PostController.deletePost);

export {
    postRoute
};
