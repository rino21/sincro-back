const db = require('../db');

const getAllPays = () => db.query('SELECT * FROM Pays');
const getPaysById = (id) => db.query('SELECT * FROM Pays WHERE pays_id = ?', [id]);
const createPays = (pays) => db.query('INSERT INTO Pays SET ?', pays);
const updatePays = (id, pays) => db.query('UPDATE Pays SET ? WHERE pays_id = ?', [pays, id]);
const deletePays = (id) => db.query('DELETE FROM Pays WHERE pays_id = ?', [id]);

module.exports = { getAllPays, getPaysById, createPays, updatePays, deletePays };
