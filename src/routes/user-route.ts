import express from "express";
import UserController from "../controller/UserController";

const userRoute = express.Router();
userRoute.get("/users", UserController.getUser);
userRoute.get("/users/:id", UserController.findUserById);
userRoute.post("/users", UserController.createUser);
userRoute.put("/users/:id", UserController.updateUser);
userRoute.delete("/users/:id", UserController.deleteUser);


export {userRoute};