import express, {Router} from 'express';
import { create_tag, delete_tag, get_tags, update_tag } from '../controller/tagsController';

export const router = Router();

router.get("/tags", get_tags);
router.post("/tags", create_tag);
router.put("/tags/:id", update_tag);
router.delete("/tags/:id", delete_tag);
  