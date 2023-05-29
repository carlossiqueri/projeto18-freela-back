import { db } from "../database/db.connection.js";

export const getHotels = async (req, res) => {
  const { destination_id } = req.params;
    console.log(destination_id)
  try {
    const hotels = await db.query(
      `
        SELECT * FROM hotels WHERE destination_id = $1
        `,
      [destination_id]
    );

    res.status(200).send(hotels.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
