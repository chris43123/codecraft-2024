import express, { Router } from "express";
import { get_categories, create_category, update_category, delete_category } from "../controller/categoriesController";

export const router = Router();

router.get("/categories", get_categories);
router.post("/categories", create_category);
router.put("/categories/:id", update_category);
router.delete("/categories/:id", delete_category);

