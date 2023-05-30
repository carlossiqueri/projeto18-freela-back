import { Router } from "express";
import {
  getTicketDetails,
  getTickets,
  postFlight,
} from "../controllers/tickets.controllers.js";

const ticketsRouter = Router();
ticketsRouter.get("/tickets/:destination_id", getTickets);
ticketsRouter.get("/tickets/details/:flight_id", getTicketDetails);
ticketsRouter.post("/tickets", postFlight);

export default ticketsRouter;
