import express, { Router } from 'express';
import { createtask, deleteTask, getTask, getTaskCategories, getTasktags, listTasks, updateTask } from '../controller/taskController';

export const router = Router();

router.get("/", listTasks);
router.get("/:id", getTask);
router.get("/:id/categories", getTaskCategories);
router.get("/:id/tags", getTasktags);
router.post("/", createtask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

