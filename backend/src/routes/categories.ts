import express, { Router } from "express";
import { create_categories } from "../controller/categoriesController";

export const router = Router();

router.get("/categories", function (res: any, req: any) {
	res.send("Categories");
});

router.post("/categories", create_categories);

router.delete("/categories/:id", function (req: any, res: any) {
	res.send("Delete category id: " + req.params.id);
});

