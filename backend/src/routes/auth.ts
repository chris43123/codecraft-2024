import express, { Router } from "express";
import { register } from "../controller/authController";

export const router = Router();

router.get("/login", function (res: any, req: any) {
	res.send("Login Page");
});

router.post("/register", register);
