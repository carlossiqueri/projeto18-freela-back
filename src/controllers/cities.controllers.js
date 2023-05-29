import getCitiesDB from "../repositories/cities.repository.js";

export const getCities = async (req, res) => {
  try {
    const allCities = await getCitiesDB();
    res.send(allCities.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
