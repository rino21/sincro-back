const db = require('../db');

const getAllZones = () => db.query('SELECT * FROM Zones');
const getZoneById = (id) => db.query('SELECT * FROM Zones WHERE zone_id = ?', [id]);
const createZone = (zone) => db.query('INSERT INTO Zones SET ?', zone);
const updateZone = (id, zone) => db.query('UPDATE Zones SET ? WHERE zone_id = ?', [zone, id]);
const deleteZone = (id) => db.query('DELETE FROM Zones WHERE zone_id = ?', [id]);

module.exports = { getAllZones, getZoneById, createZone, updateZone, deleteZone };
