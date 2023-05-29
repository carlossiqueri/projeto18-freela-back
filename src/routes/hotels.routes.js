import { Router } from "express";
import { getHotels, getHotelsDescription } from "../controllers/hotels.controllers.js";

const hotelsRouter = Router();

hotelsRouter.get("/hotels/:destination_id", getHotels);
hotelsRouter.get("/hotels/details/:hotel_id", getHotelsDescription);

export default hotelsRouter;
