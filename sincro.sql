-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 28 juin 2024 à 07:40
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `sincro`
--

-- --------------------------------------------------------

--
-- Structure de la table `adhesion`
--

DROP TABLE IF EXISTS `adhesion`;
CREATE TABLE IF NOT EXISTS `adhesion` (
  `club_id` varchar(45) NOT NULL,
  `membre_id` varchar(45) NOT NULL,
  `date_adhesion` date DEFAULT NULL,
  PRIMARY KEY (`club_id`,`membre_id`),
  KEY `fk_Clubs_has_Membre_Membre1_idx` (`membre_id`),
  KEY `fk_Clubs_has_Membre_Clubs_idx` (`club_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `adhesion`
--

INSERT INTO `adhesion` (`club_id`, `membre_id`, `date_adhesion`) VALUES
('Ident 5637 - Club n° 109717', '5962230', '2019-07-21'),
('Ident 5637 - Club n° 27014', '4079479', '2020-07-21');

-- --------------------------------------------------------

--
-- Structure de la table `clubs`
--

DROP TABLE IF EXISTS `clubs`;
CREATE TABLE IF NOT EXISTS `clubs` (
  `club_id` varchar(45) NOT NULL,
  `nom_club` varchar(45) DEFAULT NULL,
  `zone_id` int(11) NOT NULL,
  PRIMARY KEY (`club_id`),
  KEY `fk_Clubs_Zones1_idx` (`zone_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `clubs`
--

INSERT INTO `clubs` (`club_id`, `nom_club`, `zone_id`) VALUES
('Ident 5637 - Club n° 109717', 'Tsiroanomandidy', 1),
('Ident 5637 - Club n° 116076', 'Vohémar', 1),
('Ident 5637 - Club n° 27014', 'Tsiroanomandidy', 3);

-- --------------------------------------------------------

--
-- Structure de la table `districts`
--

DROP TABLE IF EXISTS `districts`;
CREATE TABLE IF NOT EXISTS `districts` (
  `district_id` int(11) NOT NULL,
  PRIMARY KEY (`district_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `districts`
--

INSERT INTO `districts` (`district_id`) VALUES
(411),
(422),
(423),
(424),
(425),
(426);

-- --------------------------------------------------------

--
-- Structure de la table `evenement`
--

DROP TABLE IF EXISTS `evenement`;
CREATE TABLE IF NOT EXISTS `evenement` (
  `ev_id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(45) DEFAULT NULL,
  `description` longtext,
  `date_ev` date DEFAULT NULL,
  `membre_id` varchar(45) NOT NULL,
  PRIMARY KEY (`ev_id`),
  KEY `fk_Evenement_Membre1_idx` (`membre_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `fichiers`
--

DROP TABLE IF EXISTS `fichiers`;
CREATE TABLE IF NOT EXISTS `fichiers` (
  `fichiers_id` int(11) NOT NULL AUTO_INCREMENT,
  `lien_fichier` longtext,
  `rapp_id` int(11) NOT NULL,
  PRIMARY KEY (`fichiers_id`),
  KEY `fk_Fichiers_Rapport1_idx` (`rapp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `fichiers`
--

INSERT INTO `fichiers` (`fichiers_id`, `lien_fichier`, `rapp_id`) VALUES
(1, 'uploads\\1719184850939.pdf', 9),
(2, 'uploads\\1719184850957.pdf', 9),
(3, 'uploads\\1719184861796.pdf', 10),
(4, 'uploads\\1719184861821.pdf', 10);

-- --------------------------------------------------------

--
-- Structure de la table `fonctions`
--

DROP TABLE IF EXISTS `fonctions`;
CREATE TABLE IF NOT EXISTS `fonctions` (
  `fonction_id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(45) DEFAULT NULL,
  `description` longtext,
  PRIMARY KEY (`fonction_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `fonctions`
--

INSERT INTO `fonctions` (`fonction_id`, `titre`, `description`) VALUES
(2, 'Secrétaire', NULL),
(3, 'Trésorier', NULL),
(4, 'VP1 - Responsable EML (Formation)', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `mandats`
--

DROP TABLE IF EXISTS `mandats`;
CREATE TABLE IF NOT EXISTS `mandats` (
  `membre_id` varchar(45) NOT NULL,
  `annee_debut_mandat` int(11) DEFAULT NULL,
  `annee_fin_mandat` int(11) DEFAULT NULL,
  `description` longtext,
  `fonction_id` int(11) NOT NULL,
  PRIMARY KEY (`membre_id`,`fonction_id`),
  KEY `fk_Membre_has_Fonctions_Membre1_idx` (`membre_id`),
  KEY `fk_Mandats_Fonctions1_idx` (`fonction_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `mandats`
--

INSERT INTO `mandats` (`membre_id`, `annee_debut_mandat`, `annee_fin_mandat`, `description`, `fonction_id`) VALUES
('4079479', 2019, 2024, NULL, 2),
('4079479', 2020, 2025, NULL, 3);

-- --------------------------------------------------------

--
-- Structure de la table `membre`
--

DROP TABLE IF EXISTS `membre`;
CREATE TABLE IF NOT EXISTS `membre` (
  `membre_id` varchar(45) NOT NULL,
  `nom` varchar(25) DEFAULT NULL,
  `prenoms` varchar(255) DEFAULT NULL,
  `sexe` varchar(1) DEFAULT NULL,
  `cmj` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `telephone` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`membre_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `membre`
--

INSERT INTO `membre` (`membre_id`, `nom`, `prenoms`, `sexe`, `cmj`, `email`, `telephone`) VALUES
('4079479', 'Rajaonah', 'Jose', 'M', NULL, 'rajaonahjose@yahoo.fr', '261-331487641'),
('5962230', 'RASOANAIVO', 'Hasina Heriniaina', 'M', NULL, 'rhasoanaivo@yahoo.fr', '');

-- --------------------------------------------------------

--
-- Structure de la table `pays`
--

DROP TABLE IF EXISTS `pays`;
CREATE TABLE IF NOT EXISTS `pays` (
  `pays_id` int(11) NOT NULL AUTO_INCREMENT,
  `nom_pays` varchar(45) NOT NULL,
  PRIMARY KEY (`pays_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `pays`
--

INSERT INTO `pays` (`pays_id`, `nom_pays`) VALUES
(1, 'Madagascar'),
(2, 'La Réunion');

-- --------------------------------------------------------

--
-- Structure de la table `rapport`
--

DROP TABLE IF EXISTS `rapport`;
CREATE TABLE IF NOT EXISTS `rapport` (
  `rapp_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `description` longtext,
  `membre_id` varchar(45) NOT NULL,
  PRIMARY KEY (`rapp_id`),
  KEY `fk_Rapport_Membre1_idx` (`membre_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `rapport`
--

INSERT INTO `rapport` (`rapp_id`, `title`, `description`, `membre_id`) VALUES
(1, 'TATITRA', 'VOLA SISA TAVELA', '4079479'),
(2, 'TATITRA', 'VOLA SISA TAVELA', '4079479'),
(3, 'TATITRA', 'VOLA SISA TAVELA', '4079479'),
(4, 'TATITRA', 'VOLA SISA TAVELA', '4079479'),
(5, 'TATITRA', 'VOLA SISA TAVELA', '4079479'),
(6, 'TATITRA', 'VOLA SISA TAVELA', '4079479'),
(7, 'TATITRA', 'VOLA SISA TAVELA', '4079479'),
(8, 'TATITRA', 'VOLA SISA TAVELA', '4079479'),
(9, 'TATITRA', 'VOLA SISA TAVELA', '4079479'),
(10, 'TATITRA', 'VOLA SISA TAVELA', '4079479');

-- --------------------------------------------------------

--
-- Structure de la table `region`
--

DROP TABLE IF EXISTS `region`;
CREATE TABLE IF NOT EXISTS `region` (
  `region_id` int(11) NOT NULL,
  `nom_region` varchar(45) DEFAULT NULL,
  `district_id` int(11) NOT NULL,
  PRIMARY KEY (`region_id`),
  KEY `fk_Region_Districts1_idx` (`district_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `region`
--

INSERT INTO `region` (`region_id`, `nom_region`, `district_id`) VALUES
(1, 'Region 1', 411),
(3, 'Region 3', 411),
(4, 'Region 3', 422);

-- --------------------------------------------------------

--
-- Structure de la table `taches`
--

DROP TABLE IF EXISTS `taches`;
CREATE TABLE IF NOT EXISTS `taches` (
  `tache_id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(45) DEFAULT NULL,
  `description` longtext,
  `date_tache` date DEFAULT NULL,
  `membre_id` varchar(45) NOT NULL,
  PRIMARY KEY (`tache_id`),
  KEY `fk_Taches_Membre1_idx` (`membre_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `zones`
--

DROP TABLE IF EXISTS `zones`;
CREATE TABLE IF NOT EXISTS `zones` (
  `zone_id` int(11) NOT NULL AUTO_INCREMENT,
  `nom_zone` varchar(45) DEFAULT NULL,
  `region_id` int(11) NOT NULL,
  `pays_id` int(11) NOT NULL,
  PRIMARY KEY (`zone_id`),
  KEY `fk_Zones_Region1_idx` (`region_id`),
  KEY `fk_Zones_Pays1_idx` (`pays_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `zones`
--

INSERT INTO `zones` (`zone_id`, `nom_zone`, `region_id`, `pays_id`) VALUES
(1, 'Zone 11', 4, 2),
(3, 'Zone 12', 3, 2);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `adhesion`
--
ALTER TABLE `adhesion`
  ADD CONSTRAINT `fk_Clubs_has_Membre_Clubs` FOREIGN KEY (`club_id`) REFERENCES `clubs` (`club_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Clubs_has_Membre_Membre1` FOREIGN KEY (`membre_id`) REFERENCES `membre` (`membre_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `clubs`
--
ALTER TABLE `clubs`
  ADD CONSTRAINT `fk_Clubs_Zones1` FOREIGN KEY (`zone_id`) REFERENCES `zones` (`zone_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `evenement`
--
ALTER TABLE `evenement`
  ADD CONSTRAINT `fk_Evenement_Membre1` FOREIGN KEY (`membre_id`) REFERENCES `membre` (`membre_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `fichiers`
--
ALTER TABLE `fichiers`
  ADD CONSTRAINT `fk_Fichiers_Rapport1` FOREIGN KEY (`rapp_id`) REFERENCES `rapport` (`rapp_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `mandats`
--
ALTER TABLE `mandats`
  ADD CONSTRAINT `fk_Mandats_Fonctions1` FOREIGN KEY (`fonction_id`) REFERENCES `fonctions` (`fonction_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Membre_has_Fonctions_Membre1` FOREIGN KEY (`membre_id`) REFERENCES `membre` (`membre_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `rapport`
--
ALTER TABLE `rapport`
  ADD CONSTRAINT `fk_Rapport_Membre1` FOREIGN KEY (`membre_id`) REFERENCES `membre` (`membre_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `region`
--
ALTER TABLE `region`
  ADD CONSTRAINT `fk_Region_Districts1` FOREIGN KEY (`district_id`) REFERENCES `districts` (`district_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `taches`
--
ALTER TABLE `taches`
  ADD CONSTRAINT `fk_Taches_Membre1` FOREIGN KEY (`membre_id`) REFERENCES `membre` (`membre_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `zones`
--
ALTER TABLE `zones`
  ADD CONSTRAINT `fk_Zones_Pays1` FOREIGN KEY (`pays_id`) REFERENCES `pays` (`pays_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Zones_Region1` FOREIGN KEY (`region_id`) REFERENCES `region` (`region_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
