const pool = require('../config/database');

module.exports.getProduct = async (req, res) => {
        let connexion;
        try {
            connexion = await pool.getConnection();
            const result = await connexion.query('CALL afficherProduit()');
            console.log(result);
            return res.status(200).json({ success: result })
        } catch (error) {
            return res.status(400).json({ error: error.message });
        } finally {
            if (connexion) connexion.end()
        }
}

module.exports.getProductById = async (req, res) => {
    let connexion;
        try {
            connexion = await pool.getConnection();
            const result = await connexion.query('SELECT * FROM produit WHERE idProduit=req.param.idProduit');
            console.log(result);
            return res.status(200).json({ success: result })
        } catch (error) {
            return res.status(400).json({ error: error.message });
        } finally {
            if (connexion) connexion.end()
        }

}