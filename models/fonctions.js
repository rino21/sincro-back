// models/fonctions.js
const db = require('../db');

const getAllFonctions = () => db.query('SELECT * FROM Fonctions');
const getFonctionById = (id) => db.query('SELECT * FROM Fonctions WHERE fonction_id = ?', [id]);
const createFonction = (fonction) => db.query('INSERT INTO Fonctions SET ?', fonction);
const updateFonction = (id, fonction) => db.query('UPDATE Fonctions SET ? WHERE fonction_id = ?', [fonction, id]);
const deleteFonction = (id) => db.query('DELETE FROM Fonctions WHERE fonction_id = ?', [id]);

module.exports = { getAllFonctions, getFonctionById, createFonction, updateFonction, deleteFonction };
