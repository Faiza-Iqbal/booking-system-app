import express from "express";

import {
  addBooking,
  getBooking,
  updateBooking,
} from "../controllers/bookings.js";

const router = express.Router();

router.post("/", addBooking);
router.patch("/:id", updateBooking);
router.get("/", getBooking);

export default router;
