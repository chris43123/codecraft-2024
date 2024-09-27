import express, { Router } from "express";
import { register, login } from "../controller/authController";

export const router = Router();

router.post("/login", login);
router.post("/register", register);
