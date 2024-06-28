// models/membre.js
const db = require('../db');

const getAllMembres = () => db.query('SELECT * FROM Membre');
const getMembreById = (id) => db.query('SELECT * FROM Membre WHERE membre_id = ?', [id]);
const createMembre = (membre) => db.query('INSERT INTO Membre SET ?', membre);
const updateMembre = (id, membre) => db.query('UPDATE Membre SET ? WHERE membre_id = ?', [membre, id]);
const deleteMembre = (id) => db.query('DELETE FROM Membre WHERE membre_id = ?', [id]);

module.exports = { getAllMembres, getMembreById, createMembre, updateMembre, deleteMembre };
