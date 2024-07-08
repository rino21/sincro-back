const Taches = require('../models/taches');
const Historique = require('../models/historique');

const getAllTaches = async (req, res) => {
  try {
    const [rows] = await Taches.getAllTaches();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTacheById = async (req, res) => {
  try {
    const [rows] = await Taches.getTacheById(req.params.id);
    if (rows.length === 0) return res.status(404).json({ message: 'Tache not found' });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTache = async (req, res) => {
  try {
    const data = req.body;
    // data["membre_id"] = req.params.membre_id
    const result = await Taches.createTache(data);
    await Historique.logAction(req.params.membre_id, 'create', 'Taches', result[0].insertId);
    res.status(201).json({ tache_id: result[0].insertId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTache = async (req, res) => {
  try {
    const data = req.body;
    const result = await Taches.updateTache(req.params.id, data);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Tache not found' });
    await Historique.logAction(req.params.membre_id, 'update', 'Taches', req.params.id);
    res.json({ message: 'Tache updated' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTache = async (req, res) => {
  try {
    const result = await Taches.deleteTache(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Tache not found' });
    await Historique.logAction(req.params.membre_id, 'delete', 'Taches', req.params.id);
    res.json({ message: 'Tache deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllTaches, getTacheById, createTache, updateTache, deleteTache };
