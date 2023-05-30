import { Router } from "express";
import { getCities, postCity } from "../controllers/cities.controllers.js";

const citiesRouter = Router();

citiesRouter.get("/destinations", getCities);
citiesRouter.post("/destinations", postCity);

export default citiesRouter;
