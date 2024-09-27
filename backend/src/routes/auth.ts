import express, { Router } from "express";

export const router = Router();

router.get("/login", function (res: any, req: any) {
	res.send("Login Page");
});

router.get("/register", function (res: any, req: any) {
	res.send("Register");
});
