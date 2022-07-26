import express from "express";

import { addTour } from "../controllers/tours.js";

const router = express.Router();

router.post("/", addTour);

export default router;
