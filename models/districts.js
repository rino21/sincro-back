const db = require('../db');

const getAllDistricts = () => db.query('SELECT * FROM Districts');
const getDistrictById = (id) => db.query('SELECT * FROM Districts WHERE district_id = ?', [id]);
const createDistrict = (district) => db.query('INSERT INTO Districts SET ?', district);
const updateDistrict = (id, district) => db.query('UPDATE Districts SET ? WHERE district_id = ?', [district, id]);
const deleteDistrict = (id) => db.query('DELETE FROM Districts WHERE district_id = ?', [id]);

module.exports = { getAllDistricts, getDistrictById, createDistrict, updateDistrict, deleteDistrict };
