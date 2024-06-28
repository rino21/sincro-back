const db = require('../db');

const getAllEvenements = () => db.query('SELECT * FROM Evenement');
const getEvenementById = (id) => db.query('SELECT * FROM Evenement WHERE ev_id = ?', [id]);
const createEvenement = (evenement) => db.query('INSERT INTO Evenement SET ?', evenement);
const updateEvenement = (id, evenement) => db.query('UPDATE Evenement SET ? WHERE ev_id = ?', [evenement, id]);
const deleteEvenement = (id) => db.query('DELETE FROM Evenement WHERE ev_id = ?', [id]);

module.exports = { getAllEvenements, getEvenementById, createEvenement, updateEvenement, deleteEvenement };
