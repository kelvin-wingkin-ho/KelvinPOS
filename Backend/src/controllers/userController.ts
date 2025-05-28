import { Request, Response } from "express";
import { getAllUsers } from "../services/userService";

export const getUsers = async (req: Request, res: Response) => {
    const users = await getAllUsers();
    res.json(users);
}