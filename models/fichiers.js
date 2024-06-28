const db = require('../db');

const getAllFichiers = () => db.query('SELECT * FROM Fichiers');
const getFichierById = (id) => db.query('SELECT * FROM Fichiers WHERE fichiers_id = ?', [id]);
const createFichiers = (fichiers) => db.query('INSERT INTO Fichiers (lien_fichier, rapp_id) VALUES ?', [fichiers.map(f => [f.lien_fichier, f.rapp_id])]);
const updateFichiers = (id, fichiers) => db.query('UPDATE Fichiers SET ? WHERE fichiers_id = ?', [fichiers, id]);
const deleteFichier = (id) => db.query('DELETE FROM Fichiers WHERE fichiers_id = ?', [id]);

module.exports = { getAllFichiers, getFichierById, createFichiers, updateFichiers, deleteFichier };
