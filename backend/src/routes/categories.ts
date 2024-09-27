import express, { Router } from "express";

export const router = Router();

router.get("/categories", function (res: any, req: any) {
	res.send("Categories");
});

router.post("/categories", function (req: any, res: any) {
	res.send("Create a new category");
});

router.delete("/categories/:id", function (req: any, res: any) {
	res.send("Delete category id: " + req.params.id);
});

module.exports = router;
