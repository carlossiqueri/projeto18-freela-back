import { db } from "../database/db.connection.js";

export const getTicketsDB = (id, min, max) => {
  if (min && max) {
    return db.query(
      `
            SELECT flights.flight_date, flights.departure, flights.arrival, flights.price, companies.name AS compania_aerea, origins.origin_name AS origem, destinations.name AS destino
            FROM flights
            JOIN companies ON flights.company_id = companies.id
            JOIN origins ON flights.origin_id = origins.id
            JOIN destinations ON flights.destination_id = destinations.id
            WHERE destination_id = $1 AND flights.price >= $2 AND flights.price <= $3;
            `,
      [id, min, max]
    );
  } else if (min) {
    return db.query(
      `
            SELECT flights.flight_date, flights.departure, flights.arrival, flights.price, companies.name AS compania_aerea, origins.origin_name AS origem, destinations.name AS destino
            FROM flights
            JOIN companies ON flights.company_id = companies.id
            JOIN origins ON flights.origin_id = origins.id
            JOIN destinations ON flights.destination_id = destinations.id
            WHERE destination_id = $1 AND flights.price >= $2;
            `,
      [id, min]
    );
  } else if (max) {
    return db.query(
      `
            SELECT flights.flight_date, flights.departure, flights.arrival, flights.price, companies.name AS compania_aerea, origins.origin_name AS origem, destinations.name AS destino
            FROM flights
            JOIN companies ON flights.company_id = companies.id
            JOIN origins ON flights.origin_id = origins.id
            JOIN destinations ON flights.destination_id = destinations.id
            WHERE destination_id = $1 AND flights.price <= $3;
            `,
      [id, max]
    );
  }

  return db.query(
    `
        SELECT flights.flight_date, flights.departure, flights.arrival, flights.price, companies.name AS compania_aerea, origins.origin_name AS origem, destinations.name AS destino
        FROM flights
        JOIN companies ON flights.company_id = companies.id
        JOIN origins ON flights.origin_id = origins.id
        JOIN destinations ON flights.destination_id = destinations.id
        WHERE destination_id = $1;
        `,
    [id]
  );
};

export const getFlightDetailsDB = (id) => {
    return (
    db.query(`
    SELECT flights.flight_date, flights.departure, flights.arrival, flights.price, companies.name AS compania_aerea, origins.origin_name AS origem, destinations.name AS destino
    FROM flights
    JOIN companies ON flights.company_id = companies.id
    JOIN origins ON flights.origin_id = origins.id
    JOIN destinations ON flights.destination_id = destinations.id
    WHERE flights.id = $1;
    `, [id])
    )
}