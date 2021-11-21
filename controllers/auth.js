const pool = require('../config/database');

module.exports.signUp = async (req, res) => {
        let connexion;
        try {
            connexion = await pool.getConnection();    
            const nom = req.body.nom
            const prenom = req.body.prenom
            const email = req.body.email
            const mot_de_passe = req.body.mot_de_passe
            const role = req.body.role  
            
            pool.query(
                'INSERT INTO utilisateur (nom, prenom, email, mot_de_passe, role) VALUES (?,?,?,?,?)',
                [nom, prenom, email, mot_de_passe, role],
                (err, result)=>{
                    console.log(err);
                }
            );
        } catch (error) {
            return res.status(400).json({ error: error.message });
        } finally {
            if (connexion) connexion.end()
        }
    }

           
            
                
        
            
            
       
            
