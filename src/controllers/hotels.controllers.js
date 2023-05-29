import { getDetailsDB, getHotelsDB } from "../repositories/hotels.repository.js";

export const getHotels = async (req, res) => {
  const { destination_id } = req.params;
  const { min, max } = req.query;

  try {
    const hotels = await getHotelsDB(destination_id, min, max);

    res.status(200).send(hotels.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const getHotelsDescription = async (req, res) => {
  const { hotel_id } = req.params;

  try {
    const description = await getDetailsDB(hotel_id);

    res.status(200).send(description.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
