import { Router } from "express";
import { getHotels } from "../controllers/hotels.controllers.js";

const hotelsRouter = Router();

hotelsRouter.get("/hotels/:destination_id", getHotels);

export default hotelsRouter;
