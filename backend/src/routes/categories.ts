import express, { Router } from "express";
import { get_categories, create_categories, update_category, delete_category } from "../controller/categoriesController";

export const router = Router();

router.get("/categories", get_categories);
router.post("/categories", create_categories);
router.put("/categories", update_category);
router.delete("/categories/:id", delete_category);

