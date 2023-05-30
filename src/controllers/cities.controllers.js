import { db } from "../database/db.connection.js";
import getCitiesDB from "../repositories/cities.repository.js";

export const getCities = async (req, res) => {
  try {
    const allCities = await getCitiesDB();
    res.send(allCities.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const postCity = async (req, res) => {
  const { name, photo } = req.body;
  try {
    const checkCity = await db.query(
      `SELECT * FROM destinations WHERE name = $1`,
      [name]
    );

    if (checkCity.rows[0]) return res.status(409).send("City already exists");

    await db.query(`INSERT INTO destinations (name, photo) VALUES ($1, $2)`, [
      name,
      photo,
    ]);

    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(res.error);
  }
};
