const db = require('../db');

const getAllClubs = () => db.query('SELECT * FROM Clubs');
const getClubById = (id) => db.query('SELECT * FROM Clubs WHERE club_id = ?', [id]);
const createClub = (club) => db.query('INSERT INTO Clubs SET ?', club);
const updateClub = (id, club) => db.query('UPDATE Clubs SET ? WHERE club_id = ?', [club, id]);
const deleteClub = (id) => db.query('DELETE FROM Clubs WHERE club_id = ?', [id]);

module.exports = { getAllClubs, getClubById, createClub, updateClub, deleteClub };
