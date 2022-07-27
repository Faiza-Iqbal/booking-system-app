import express from "express";

import { addBooking, updateBooking } from "../controllers/bookings.js";

const router = express.Router();

router.post("/", addBooking);
router.patch("/:id", updateBooking);

export default router;
