import { Router } from "express";
import { createUser } from "../controllers/userController.js";
import userValidation from "../middlewares/userValidation.js";

const router = Router();

// Middleware to validate user data before creating a new user
router.post("/create", userValidation, createUser);

export default router;
