const District = require('../models/districts');

const getAllDistricts = async (req, res) => {
  try {
    const [rows] = await District.getAllDistricts();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDistrictById = async (req, res) => {
  try {
    const [rows] = await District.getDistrictById(req.params.id);
    if (rows.length === 0) return res.status(404).json({ message: `Le district ${req.params.id} n'existe pas.` });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createDistrict = async (req, res) => {
  try {
    const result = await District.createDistrict(req.body);
    res.status(201).json({ message : `Le district ${req.body.district_id} a été bien enregistré.` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateDistrict = async (req, res) => {
  try {
    const result = await District.updateDistrict(req.params.id, req.body);
    if (result.affectedRows === 0) return res.status(404).json({ message: `Le district ${req.params.id} n'existe pas.` });
    res.json({ message: 'Le district mis à jour.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteDistrict = async (req, res) => {
  try {
    const result = await District.deleteDistrict(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ message: `Le district ${req.params.id} n'existe pas.` });
    res.json({ message: 'District supprimé.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllDistricts, getDistrictById, createDistrict, updateDistrict, deleteDistrict };
