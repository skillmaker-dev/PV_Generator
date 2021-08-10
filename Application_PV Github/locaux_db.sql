-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Jul 11, 2021 at 07:04 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `locaux_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `etablissements`
--

CREATE TABLE `etablissements` (
  `id_etablissement` int(11) NOT NULL,
  `nom` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `etablissements`
--

INSERT INTO `etablissements` (`id_etablissement`, `nom`) VALUES
(1, 'Faculté de médecine et de Pharmacie d\'Oujda'),
(2, 'École Nationale des Sciences Appliquées d\'Oujda'),
(3, 'Faculté Pluridisciplinaire de Nador'),
(4, 'Ecole Supérieure de Technologie, Oujda'),
(5, 'Ecole Nationale de Commerce et de Gestion d\'Oujda'),
(6, 'Faculté des Sciences d\'Oujda'),
(7, 'Faculté des Lettres et des Sciences Humaines d\'Oujda'),
(8, 'Faculté des sciences juridiques, économiques et sociales d\'Oujda');

-- --------------------------------------------------------

--
-- Table structure for table `locaux`
--

CREATE TABLE `locaux` (
  `local` varchar(40) NOT NULL,
  `id_etablissement` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `locaux`
--

INSERT INTO `locaux` (`local`, `id_etablissement`) VALUES
('Amphi A', 1),
('Amphi B', 1),
('Amphi C', 1),
('Amphi D', 1),
('Amphi E', 1),
('Amphi F', 1),
('Amphi G', 1),
('Std 1', 1),
('Std 2', 1),
('Std 3', 1),
('Std 4', 1),
('Std 5', 1),
('Std 6', 1),
('Std 7', 1),
('Std 8', 1),
('Std 9', 1),
('Std 10', 1),
('Std 11', 1),
('Std 12', 1),
('Std 13', 1),
('Std 14', 1),
('Amphi A', 1),
('Bibliothèque 1', 1),
('Bibliothèque 2', 1),
('Musée', 1),
('Hall1', 1),
('Hall2', 1),
('Amphi A', 5),
('Amphi B', 5),
('Salle TD 1', 5),
('Salle TD 2', 5),
('Salle TD 3', 5),
('Salle TD 4', 5),
('﻿LABO 1', 7),
('LABO 2', 7),
('Salle 3', 7),
('Salle 4', 7),
('Salle 5', 7),
('Salle 6', 7),
('Salle 7', 7),
('Salle 8', 7),
('Salle 9', 7),
('Salle 10', 7),
('Salle 27', 7),
('Salle 28', 7),
('Salle 34', 7),
('Salle 35', 7),
('Salle 36', 7),
('Salle 37', 7),
('Salle 38', 7),
('Salle 40', 7),
('Salle 41', 7),
('Salle 42', 7),
('Salle 11', 7),
('Salle 12', 7),
('Salle 13', 7),
('Salle 14', 7),
('Salle 15', 7),
('Salle 16', 7),
('Salle 17', 7),
('Salle 18', 7),
('Salle 19', 7),
('Salle 20', 7),
('Salle 32', 7),
('Salle 21', 7),
('Salle 22', 7),
('Salle 23', 7),
('Salle 24', 7),
('Salle 25', 7),
('Salle 26', 7),
('Salle 30', 7),
('Salle 31', 7),
('Salle 39', 7),
('BIBLIO 1', 7),
('BIBLIO 2', 7),
('BIBLIO 3', 7),
('AMPHI ZIRI', 7),
('AMPHI EL GHAZALI', 7),
('AMPHI KADI AYAD', 7),
('AMPHI ZIANI', 7),
('﻿Amphi AlQods', 8),
('Amphi Ibn Khaldoun', 8),
('Amphi Imam Malik', 8),
('Amphi Maghreb Arabe', 8),
('Amphi1', 8),
('Amphi2', 8),
('Amphi3', 8),
('Amphi4', 8),
('Amphi5', 8),
('Amphi6', 8),
('Amphi7', 8),
('Annexe 1', 8),
('Annexe 2', 8),
('Annexe 3', 8),
('Annexe 4', 8),
('Salle 1', 8),
('Salle 10', 8),
('Salle 11', 8),
('Salle 12', 8),
('Salle 13', 8),
('Salle 14', 8),
('Salle 15', 8),
('Salle 16', 8),
('Salle 17', 8),
('Salle 2', 8),
('Salle 3', 8),
('Salle 4', 8),
('Salle 5', 8),
('Salle 6', 8),
('Salle 7', 8),
('Salle 8', 8),
('Salle 9', 8),
('﻿Amphi L', 3),
('Amphi K', 3),
('Amphi J', 3),
('Amphi I', 3),
('Amphi G', 3),
('Amphi H', 3),
('Amphi A', 3),
('Amphi B', 3),
('Amphi C', 3),
('Amphi D', 3),
('Amphi E', 3),
('Amphi F', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `etablissements`
--
ALTER TABLE `etablissements`
  ADD PRIMARY KEY (`id_etablissement`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
