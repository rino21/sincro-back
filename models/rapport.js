const db = require('../db');

const getAllRapports = () => db.query('SELECT * FROM Rapport');
const getRapportById = (id) => db.query('SELECT * FROM Rapport WHERE rapp_id = ?', [id]);
const createRapport = (rapport) => db.query('INSERT INTO Rapport SET ?', rapport);
const updateRapport = (id, rapport) => db.query('UPDATE Rapport SET ? WHERE rapp_id = ?', [rapport, id]);
const deleteRapport = (id) => db.query('DELETE FROM Rapport WHERE rapp_id = ?', [id]);

module.exports = { getAllRapports, getRapportById, createRapport, updateRapport, deleteRapport };
