const db = require('../db');

const getAllRegions = () => db.query('SELECT * FROM Region');
const getRegionById = (id) => db.query('SELECT * FROM Region WHERE region_id = ?', [id]);
const createRegion = (region) => db.query('INSERT INTO Region SET ?', region);
const updateRegion = (id, region) => db.query('UPDATE Region SET ? WHERE region_id = ?', [region, id]);
const deleteRegion = (id) => db.query('DELETE FROM Region WHERE region_id = ?', [id]);

module.exports = { getAllRegions, getRegionById, createRegion, updateRegion, deleteRegion };
