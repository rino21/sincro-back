const db = require('../db');

const getAllTaches = () => db.query('SELECT * FROM Taches');
const getTacheById = (id) => db.query('SELECT * FROM Taches WHERE tache_id = ?', [id]);
const createTache = (tache) => db.query('INSERT INTO Taches SET ?', tache);
const updateTache = (id, tache) => db.query('UPDATE Taches SET ? WHERE tache_id = ?', [tache, id]);
const deleteTache = (id) => db.query('DELETE FROM Taches WHERE tache_id = ?', [id]);

module.exports = { getAllTaches, getTacheById, createTache, updateTache, deleteTache };
