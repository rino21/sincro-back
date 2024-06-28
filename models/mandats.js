const db = require('../db');

const getAllMandats = () => db.query('SELECT * FROM Mandats');
const getMandatByIds = (membre_id, fonction_id) => db.query('SELECT * FROM Mandats WHERE membre_id = ? AND fonction_id = ?', [membre_id, fonction_id]);
const createMandat = (mandat) => db.query('INSERT INTO Mandats SET ?', mandat);
const updateMandat = (membre_id, fonction_id, mandat) => db.query('UPDATE Mandats SET ? WHERE membre_id = ? AND fonction_id = ?', [mandat, membre_id, fonction_id]);
const deleteMandat = (membre_id, fonction_id) => db.query('DELETE FROM Mandats WHERE membre_id = ? AND fonction_id = ?', [membre_id, fonction_id]);

module.exports = { getAllMandats, getMandatByIds, createMandat, updateMandat, deleteMandat };
