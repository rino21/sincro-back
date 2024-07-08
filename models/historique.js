const db = require('../db');

const logAction = (membre_id, action, cible, cible_id) => {
    return db.query('INSERT INTO Historique (membre_id, action, cible, cible_id) VALUES (?, ?, ?, ?)', 
                    [membre_id, action, cible, cible_id]);
};

const getHistoriqueGlobal = ()=>{
    return db.query('SELECT * FROM Historique ORDER BY id DESC')
}

const getHistoriqueGlobalById = (id)=>{
    return db.query('SELECT * FROM Historique WHERE id = ?', [id])
}

const getNombreHistorique = ()=>{
    return db.query('SELECT count(id) as nb_historique FROM Historique WHERE vu_global=false')
}

const setHistoriqueGlobalCheck = ()=>{
    return db.query(`UPDATE Historique AS h
            JOIN (SELECT id FROM Historique WHERE vu_global = false) AS sub
            ON h.id = sub.id
            SET h.vu_global = true;
            `)
}

const setHistoriquePropreCheck = (id)=>{
    return db.query(`UPDATE Historique AS h
            JOIN (SELECT id FROM Historique WHERE vu_propre = false) AS sub
            ON h.id = sub.id
            SET h.vu_propre = true;`, [id])
}

module.exports = { logAction, setHistoriquePropreCheck, getHistoriqueGlobal, getHistoriqueGlobalById, getNombreHistorique, setHistoriqueGlobalCheck };
