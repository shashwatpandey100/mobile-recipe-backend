import express from "express";
import { addFavourite, deleteFavourites } from "../controllers/favourites.controller.js";

const router = express.Router();

router.post("/", addFavourite);
router.delete("/:userId/:recipeId", deleteFavourites)

export default router;