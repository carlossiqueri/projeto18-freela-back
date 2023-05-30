import { db } from "../database/db.connection.js";
import {
  getFlightDetailsDB,
  getTicketsDB,
} from "../repositories/tickets.repository.js";

export const getTickets = async (req, res) => {
  const { destination_id } = req.params;
  const { min, max } = req.query;

  try {
    const ticket = await getTicketsDB(destination_id, min, max);

    res.status(200).send(ticket.rows);
  } catch (err) {
    res.send(err.message);
  }
};

export const getTicketDetails = async (req, res) => {
  const { flight_id } = req.params;

  try {
    const flightDetails = await getFlightDetailsDB(flight_id);

    res.status(200).send(flightDetails.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const postFlight = async (req, res) => {
  const {
    flight_date,
    departure,
    arrival,
    price,
    origin_id,
    company_id,
    destination_id,
  } = req.body;
  try {
    await db.query(
      `INSERT INTO flights (flight_date, departure, arrival, price, origin_id, company_id, destination_id) VALUES ($1, $2)`,
      [
        flight_date,
        departure,
        arrival,
        price,
        origin_id,
        company_id,
        destination_id,
      ]
    );

    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(res.error);
  }
};
