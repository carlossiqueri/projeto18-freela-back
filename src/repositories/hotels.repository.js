import { db } from "../database/db.connection.js";

export const getHotelsDB = (destination_id, min, max) => {
  if (min && max) {
    return db.query(
      `
              SELECT * FROM hotels WHERE destination_id = $1 AND price >= $2 AND price <= $3
              `,
      [destination_id, min, max]
    );
  } else if (min) {
    return db.query(
      `
              SELECT * FROM hotels WHERE destination_id = $1 AND price >= $2 
              `,
      [destination_id, min]
    );
  } else if (max) {
    return db.query(
      `
              SELECT * FROM hotels WHERE destination_id = $1 AND price <= $3
              `,
      [destination_id, max]
    );
  }

  return db.query(
    `
          SELECT * FROM hotels WHERE destination_id = $1
          `,
    [destination_id]
  );
};

export const getDetailsDB = (id) => {
  return db.query(
    `
        SELECT hotels.name, hotels.price, hotels.coffe, hotels.pool, hotels.type, destinations.name AS city, descriptions.description AS description
        FROM hotels
        JOIN descriptions ON hotels.id = descriptions.hotel_id
        JOIN destinations ON hotels.destination_id = destinations.id
        WHERE hotel_id = $1;
        `,
    [id]
  );
};
