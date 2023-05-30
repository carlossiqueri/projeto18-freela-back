import { db } from "../database/db.connection.js";

const getCitiesDB = () => {
  return db.query(`SELECT * FROM destinations`);
};

export default getCitiesDB;
