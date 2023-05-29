import { Router } from "express";
import citiesRouter from "./cities.routes.js";
import hotelsRouter from "./hotels.routes.js";
import ticketsRouter from "./tickets.routes.js";

const routes = Router();

routes.use(citiesRouter);
routes.use(hotelsRouter);
routes.use(ticketsRouter);

export default routes;
