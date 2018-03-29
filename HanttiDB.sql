-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Palvelin: 127.0.0.1
-- Luontiaika: 29.03.2018 klo 17:39
-- Palvelimen versio: 5.5.57-0ubuntu0.14.04.1
-- PHP:n versio: 5.5.9-1ubuntu4.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Tietokanta: `HanttiDB`
--

-- --------------------------------------------------------

--
-- Rakenne taululle `NOTE`
--

CREATE TABLE IF NOT EXISTS `NOTE` (
  `NoteID` int(11) NOT NULL AUTO_INCREMENT,
  `Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Head` varchar(40) DEFAULT NULL,
  `Kuvaus` varchar(500) NOT NULL,
  `SessionID` varchar(500) DEFAULT NULL,
  `Tekija` int(1) NOT NULL,
  `Antaja` int(1) NOT NULL,
  `UserID` int(11) NOT NULL,
  `Location` varchar(20) NOT NULL,
  PRIMARY KEY (`NoteID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=47 ;

--
-- Vedos taulusta `NOTE`
--

INSERT INTO `NOTE` (`NoteID`, `Time`, `Head`, `Kuvaus`, `SessionID`, `Tekija`, `Antaja`, `UserID`, `Location`) VALUES
(1, '2017-12-12 22:35:14', 'Lapsenvahti', 'Monen vuoden kokemuksen omaava itsealoitteinen opiskelija on juuri nyt vapaana sinun lastesi lapsenvahdiksi!', NULL, 1, 0, 1, 'Vantaa'),
(23, '2017-12-12 22:32:36', 'Jokapaikanhöylä', 'Ei ole haastetta, josta en selviä. Ota yhteyttä ja ansaitse auttava käteni!', NULL, 1, 0, 4, 'Helsinki'),
(24, '2017-12-12 22:51:36', 'Koiran ulkoiluttaja', 'Meidän koiramme Vinkki tarvitsee ulkoiluttajaa! Kenelläkään ei ole perheestä aikaa ulkoiluttaa Vinkkiä, joten tarvitaan apua! Hyvä palkka tiedossa.', NULL, 0, 1, 4, 'Helsinki'),
(26, '2017-12-12 22:39:16', 'Koiran ulkoiluttaja', 'Oon Masa ja oon törkeen hyvä kuntoinen jannu! Oon valmis viemäään teidän piskit mun lenkeille mukaan, joten olkaa yhteydessä!', NULL, 0, 1, 2, 'Helsinki'),
(27, '2017-12-12 22:41:08', 'CS-opettaja', 'Etsitään (väh. Global Elite) CS:GO-peluria, joka olisi valmis opettamaan minulle pelin salat!', NULL, 0, 1, 1, 'Helsinki'),
(29, '2017-12-12 22:43:38', 'Apua tietokoneen kanssa', 'Auttakaa! Minulla meni tietokone jumiin enkä tiedä mitä tehdä!', NULL, 0, 1, 8, 'Helsinki'),
(30, '2017-12-12 22:46:01', 'Jokapaikanhöylä', 'Olen vailla vahvaa miestä.', NULL, 0, 1, 11, 'Helsinki'),
(31, '2017-12-12 22:46:47', 'Vaipanvaihto', 'Lapsenlapsella pääsi käymään vahinko!', NULL, 0, 1, 8, 'Vantaa'),
(32, '2017-12-12 22:49:04', 'Lumenluoja', 'Lunta sataa, mutta kaikkia EI tarvitse v#@!taa! Erkki Esimerkki rientää apuun ja luo lumet minkä kokoiselta pihalta tahansa!', NULL, 1, 0, 6, 'Espoo'),
(33, '2017-12-12 22:50:58', 'Siivooja', 'Valmis käymään läpi talojen pimeimmätkin kolkat! En pelkää mitään ja teen erittäin tarkkaa jälkeä. Palkkaa minut, niin et tule pettymään!', NULL, 1, 0, 7, 'Helsinki'),
(34, '2017-12-12 22:53:00', 'Koodari', 'Pienimuotoisia ohjelmia tai suoraa opetusta.', NULL, 1, 0, 5, 'Vantaa'),
(35, '2017-12-12 22:54:05', 'Mekaanikko', 'Talvirenkaat pitäisi vaihtaa autoon!', NULL, 0, 1, 10, 'Helsinki'),
(36, '2017-12-12 22:56:10', 'Tanssinopettaja', 'Tanssinopettajaopiskelija Tampereelta valmis opettamaan niin lapsia kuin aikuisia! Vain yksityistunteja!', NULL, 1, 0, 9, 'Vantaa'),
(37, '2017-12-12 23:23:15', '', '', NULL, 1, 0, 2, ''),
(38, '2017-12-13 01:39:59', 'Työukko', 'Valmis joka tilanteeseen. Miehen mukana tulee varustevyö, josta löytyy kaikki jokapäiväiseen arkeen tarvittavat vermeet vasarasta purukumiin.JOTAIN LISÄÄ', NULL, 1, 0, 2, 'Helsinki'),
(39, '2017-12-13 04:51:08', 'Kuljetustehtävä', 'tarvitaan nopea kuriiri yhteen kuljetustehtävään. No questions asked.', NULL, 0, 1, 12, 'Helsinki'),
(40, '2017-12-13 12:23:09', 'korjausmies', 'hemmetin koova äijä tekee duunia', NULL, 1, 0, 2, 'Vantaa'),
(41, '2017-12-14 14:48:11', 'moi kaikki', 'epoossaa moi', NULL, 0, 1, 8, 'Espoo'),
(42, '2017-12-25 11:15:24', '', '', NULL, 1, 0, 14, ''),
(43, '2017-12-25 11:26:07', 'pappa tarvii lapsen', 'paljon', NULL, 1, 0, 8, 'Helsinki'),
(44, '2017-12-25 11:58:34', 'hoitsuja tarvitaan', 'mahdollisimman kuumia hoitsuja kiitos mutta ei kiitos', NULL, 0, 1, 15, 'Espoo'),
(45, '2018-03-14 07:25:59', '', '', NULL, 1, 0, 5, ''),
(46, '2018-03-14 08:30:25', 'Koodari', 'koodia tarjolla', NULL, 1, 0, 5, 'Helsinki');

-- --------------------------------------------------------

--
-- Rakenne taululle `USER`
--

CREATE TABLE IF NOT EXISTS `USER` (
  `UserID` int(11) NOT NULL AUTO_INCREMENT,
  `session` varchar(100) DEFAULT NULL,
  `FirstName` varchar(30) NOT NULL,
  `LastName` varchar(30) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `Password` varchar(30) NOT NULL,
  `Time` datetime NOT NULL,
  `Rating` int(11) NOT NULL,
  `Score` int(11) NOT NULL,
  `Votes` int(11) NOT NULL,
  `Description` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

--
-- Vedos taulusta `USER`
--

INSERT INTO `USER` (`UserID`, `session`, `FirstName`, `LastName`, `Email`, `Password`, `Time`, `Rating`, `Score`, `Votes`, `Description`) VALUES
(1, NULL, 'Teppo', 'Kuparinen', 'teppo.kuparinen@hotmail.com', 'teppo', '0000-00-00 00:00:00', 3, 6, 2, 'Olen 21-vuotias insinööriopiskelija Klaukkalasta. Työmoraalini on lyömätön.'),
(2, '0v47e54qihgvueic4p84nuh1f2', 'Masa', 'Mainio', 'masa.mainio@gmail.com', 'masa', '0000-00-00 00:00:00', 3, 12, 4, 'Moro mä oon Masa. Oon tosi kova äijä tekemään duunia, etkä tuu varmasti pettymään jos palkaat mut! ONHAN TÄÄ HIENO'),
(4, NULL, 'Jere', 'Rahikainen', 'jere.rahikainen@hantti.fi', 'jere123', '0000-00-00 00:00:00', 3, 3, 1, 'Kiinnostuksen kohteet: Olut, jääkiekko'),
(5, NULL, 'Konsta', 'Jaakkola', 'konsta@hanttihomma.fi', 'konsta', '0000-00-00 00:00:00', 3, 46, 14, 'valvon koodaustehtävien vuoksi koska vaan. Kunpa olisin itse koodi.'),
(6, NULL, 'Erkki', 'Esimerkki', 'erkki.esimerkki@esim.fi', 'esimerkki', '0000-00-00 00:00:00', 2, 0, 0, 'Keskinkertaisuuden täydellistymä.'),
(7, NULL, 'Jari', 'Sillanpää', 'jartsa65@hotmail.fi', 'valkeaaunelmaa', '0000-00-00 00:00:00', 4, 4, 1, 'Työnteko sujuu kuin rasvattu. ;)'),
(8, NULL, 'Pappa', 'Nygrén', 'pappa.nygren@luukku.com', 'kissa123', '0000-00-00 00:00:00', 4, 13, 3, 'Minä olen jo vanha ja rahnainen ukko, joten tarvitsen usein apua kaikenlaisiin hanttihommiin!'),
(9, NULL, 'Pasi', 'Anssi', 'pasi.anssi@gmail.com', 'simpanssi', '0000-00-00 00:00:00', 3, 36, 13, 'Lempiajanviete on ehdottomasti pasianssin pelaaminen!'),
(10, NULL, 'Maija', 'Meikäläinen', 'maija.meikalainen@hotmail.com', 'maija', '0000-00-00 00:00:00', 4, 0, 0, 'Kiintiönainen.'),
(11, NULL, 'Päivi', 'Räsänen', 'ei@ei.ei', 'ei', '0000-00-00 00:00:00', 1, 0, 0, 'Ei.'),
(12, '6u8tlin2k0bdb0o2ar5v08ess1', 'Jari', 'Aarnio', 'huume.poliisi@gmail.com', 'jari', '0000-00-00 00:00:00', 0, 0, 0, 'Olen jari.\nKelpuutan palkaksi mielelläni Bitcoineja.\nItse en niitä louhi.'),
(13, NULL, 'teppo', 'kuparinen', 'teppo.moi@metro.fi', 'qwerty', '0000-00-00 00:00:00', 0, 0, 0, NULL),
(14, NULL, 'santtu', 'joo', 'santtu@gmail.com', '12345', '0000-00-00 00:00:00', 0, 0, 0, 'on kivaa tehä töitä\n'),
(15, NULL, 'katri', 'Jaakkola', 'katri.jaakkola@kolumbus.fi', '1234', '0000-00-00 00:00:00', 0, 0, 0, 'tosi hyvä hoitsu\n');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
