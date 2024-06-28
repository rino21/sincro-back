const Region = require('../models/region');

const getAllRegions = async (req, res) => {
  try {
    const [rows] = await Region.getAllRegions();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRegionById = async (req, res) => {
  try {
    const [rows] = await Region.getRegionById(req.params.id);
    if (rows.length === 0) return res.status(404).json({ message: `Cette region n'est pas encore enregistré.` });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createRegion = async (req, res) => {
  try {
    const result = await Region.createRegion(req.body);
    res.status(201).json({ message: `La region : ${req.body.nom_region} a été bien enregistrée.`});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateRegion = async (req, res) => {
  try {
    const result = await Region.updateRegion(req.params.id, req.body);
    if (result.affectedRows === 0) return res.status(404).json({ message: `Cette region n'est pas encore enregistré.`});
    res.json({ message: 'Region mis à jour.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteRegion = async (req, res) => {
  try {
    const result = await Region.deleteRegion(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ message: `Cette region n'est pas encore enregistré.` });
    res.json({ message: 'Region supprimée.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllRegions, getRegionById, createRegion, updateRegion, deleteRegion };
