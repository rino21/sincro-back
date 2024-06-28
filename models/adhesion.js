const db = require('../db');

const getAllAdhesions = () => db.query('SELECT * FROM Adhesion');
const getAdhesionByIds = (club_id, membre_id) => db.query('SELECT * FROM Adhesion WHERE club_id = ? AND membre_id = ?', [club_id, membre_id]);
const createAdhesion = (adhesion) => db.query('INSERT INTO Adhesion SET ?', adhesion);
const deleteAdhesion = (club_id, membre_id) => db.query('DELETE FROM Adhesion WHERE club_id = ? AND membre_id = ?', [club_id, membre_id]);

module.exports = { getAllAdhesions, getAdhesionByIds, createAdhesion, deleteAdhesion };
