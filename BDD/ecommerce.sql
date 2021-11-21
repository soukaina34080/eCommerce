CREATE TABLE `Adresse` (
`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`numAppart` INT NULL,
`numRue` INT NOT NULL,
`NomRueVoie` VARCHAR(50) NOT NULL,
`codePostal` INT NOT NULL,
`ville` VARCHAR(50) NOT NULL,
`pays` VARCHAR(50) NOT NULL
)



;



CREATE TABLE `Utilisateur` (
`idUser` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`nom` VARCHAR(50) NOT NULL,
`prenom` VARCHAR(50) NOT NULL,
`login` VARCHAR(50) NOT NULL,
`mot de passe` VARCHAR(50) NOT NULL,
`role` ENUM('vendeur','client') NOT NULL,
`idAdresse` INT NOT NULL,
FOREIGN KEY (idAdresse) REFERENCES Adresse(id)
)
;



CREATE TABLE `Vendeur` (
`idVendeur` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`numTel` INT NOT NULL,
`email` VARCHAR(50) NOT NULL,
`idAdresse` INT NOT NULL,
FOREIGN KEY (idAdresse) REFERENCES Adresse(id)
)
;



CREATE TABLE `Produit` (
`idProduit` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`nom` VARCHAR(50) NOT NULL,
`quantiteStock` INT,
`prix` INT NOT NULL,

`idVendeur` INT NOT NULL,
FOREIGN KEY (idVendeur) REFERENCES Vendeur(idVendeur)
)
;


CREATE TABLE `Payement` (
`idPayement` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`methodePayement` ENUM ('Paypal','Carte credit','Bitcoin','Virement','SoldeOUcoupon'))
;




CREATE TABLE `Commande` (
`idCommande` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`numCommande` INT NOT NULL,
`methodePayement` INT NOT NULL,
`action` ENUM ('reclamer','rembourser'),
FOREIGN KEY (methodePayement) REFERENCES Payement(idPayement)
);



CREATE TABLE `Livraison` (
`idLivraison` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`numSuivi` INT NOT NULL,
`numCommande` INT NOT NULL,
`etatLivraison` VARCHAR(50) NOT NULL,
FOREIGN KEY (numCommande) REFERENCES Commande(idCommande)
);



CREATE TABLE `LigneCommande` (
`idLigne` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`idProduit` INT NOT NULL,
`idCommande` INT NOT NULL,
`quantite`INT NOT NULL,
FOREIGN KEY (idCommande) REFERENCES Commande(idCommande),
FOREIGN KEY (idProduit) REFERENCES Produit(idProduit)
);



CREATE TABLE `AvisClient` (
`idAvis` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`message` VARCHAR(50) NOT NULL,
`idClient` INT NOT NULL,
`idProduit` INT NOT NULL,
FOREIGN KEY (idProduit) REFERENCES Produit(idProduit),
FOREIGN KEY (idClient) REFERENCES Utilisateur(idUser)
);


USE projetreact;


DELIMITER //



CREATE OR REPLACE PROCEDURE ajoutAdresse (IN numAppart INT,IN numRue INT,IN NomRueVoie VARCHAR(50),IN codePostal INT,IN ville VARCHAR(50),
IN pays VARCHAR(50))
BEGIN
INSERT INTO Adresse VALUES (NULL,numAppart,numRue,NomRueVoie,codePostal,ville,pays);

END//

CREATE OR REPLACE PROCEDURE proc2 ()
BEGIN
SELECT * FROM utilisateur;

END//

CREATE OR REPLACE PROCEDURE afficherProduit()
BEGIN
SELECT * FROM produit;

END//