import express from "express";

import { addTour, getTours, deleteTour } from "../controllers/tours";

const router = express.Router();

router.post("/", addTour);
router.get("/", getTours);
router.get("/:id", getTours);
router.delete("/:id", deleteTour);

export default router;
