import express from "express";
import countController from "../controllers/countController";

const router = express.Router();


router.get('/countriesName', countController.countries);
router.get('/regionsName', countController.regions);
router.get('/citiesName', countController.cities);



export default router;
