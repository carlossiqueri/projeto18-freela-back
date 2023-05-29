import { Router } from "express";
import { getTicketDetails, getTickets } from "../controllers/tickets.controllers.js";

const ticketsRouter = Router();
ticketsRouter.get("/tickets/:destination_id", getTickets);
ticketsRouter.get("/tickets/details/:flight_id", getTicketDetails);

export default ticketsRouter;