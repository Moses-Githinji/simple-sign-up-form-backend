import express from "express";
import { getUsers } from "../controllers/getUsers.js";

const router = express.Router();

// get all users
router.get("/", getUsers);

export default router;
