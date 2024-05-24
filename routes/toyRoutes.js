import express from "express";
import * as toyController from "../controllers/toyController.js";

const router = express.Router();

router.get("/alltoys", toyController.getAllToys);
router.get("/singleToys/:id", toyController.getToyById);
router.get("/search/:text", toyController.searchToys);
router.get("/alltoys/:subCategory", toyController.getToysBySubCategory);
router.get("/myToys/:sellerEmail", toyController.getToysBySellerEmail);
router.get("/twentyToys", toyController.getLimitedToys);
router.post("/add-toys", toyController.addToy);
router.put("/toy/:id", toyController.updateToy);
router.delete("/toy/:id", toyController.deleteToy);

export default router;
