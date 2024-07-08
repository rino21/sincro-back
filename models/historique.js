const db = require('../db');

const logAction = (membre_id, action, cible, cible_id) => {
    return db.query('INSERT INTO Historique (membre_id, action, cible, cible_id) VALUES (?, ?, ?, ?)', 
                    [membre_id, action, cible, cible_id]);
};

module.exports = { logAction };
