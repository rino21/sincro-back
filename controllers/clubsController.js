const Clubs = require('../models/clubs');

const getAllClubs = async (req, res) => {
  try {
    const [rows] = await Clubs.getAllClubs();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getClubById = async (req, res) => {
  try {
    const [rows] = await Clubs.getClubById(req.params.id);
    if (rows.length === 0) return res.status(404).json({ message: `Ce Club n'est pas encore existe.` });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createClub = async (req, res) => {
  try {
    const result = await Clubs.createClub(req.body);
    res.status(201).json({ message: `Le club : ${req.body.club_id} a été bien enregistré.` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateClub = async (req, res) => {
  try {
    const result = await Clubs.updateClub(req.params.id, req.body);
    if (result.affectedRows === 0) return res.status(404).json({ message: `Ce club n'est pas encore existe.` });
    res.json({ message: 'Club mis à jour.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteClub = async (req, res) => {
  try {
    const result = await Clubs.deleteClub(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ message: `Ce club n'existe pas.` });
    res.json({ message: 'Club supprimé.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllClubs, getClubById, createClub, updateClub, deleteClub };
