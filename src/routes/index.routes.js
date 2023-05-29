import { Router } from "express";
import citiesRouter from "./cities.routes.js";
import hotelsRouter from "./hotels.routes.js";

const routes = Router();

routes.use(citiesRouter);
routes.use(hotelsRouter);

export default routes;
