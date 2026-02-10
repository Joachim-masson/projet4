-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: localhost    Database: simpsons
-- ------------------------------------------------------
-- Server version	8.0.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `characters`
--

DROP TABLE IF EXISTS `characters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `characters` (
  `idcharacters` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb3_bin NOT NULL,
  `portrait-path` varchar(100) COLLATE utf8mb3_bin DEFAULT NULL,
  `age` int DEFAULT NULL,
  `occupation` varchar(100) COLLATE utf8mb3_bin DEFAULT NULL,
  `description` text COLLATE utf8mb3_bin,
  PRIMARY KEY (`idcharacters`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `characters`
--

LOCK TABLES `characters` WRITE;
/*!40000 ALTER TABLE `characters` DISABLE KEYS */;
INSERT INTO `characters` VALUES (1,'Homer Simpson ','\"1.webp\"',39,'Safety Inspector ','\"Homer Jay Simpson (born May 12, 1956) is a man from Springfield and the protagonist of the animated television series The Simpsons. He is a crude, ignorant, and slobbish individual, although he is fundamentally a good person and shows great caring and loyalty to his family, friends and on occasion, to those he barely knows or those he considers his enemies.\" '),(2,'Marge Simpson ','\"2.webp\"',39,'Unemployed ','\"Marjorie Jacqueline \\\"Marge\\\" Simpson (née Bouvier) (Born March 19) is the homemaker and matriarch of the Simpson family. She is also one of the five main characters in The Simpsons TV series. She and her husband Homer have three children: Bart, Lisa, and Maggie. Marge is the moralistic force in her family and often provides a raspy and grounding voice in the midst of her family\'s antics by trying to maintain order in the Simpson household. Aside from her duties at home, Marge has flirted briefly with a number of careers ranging from a police officer to an anti-violence activist.\" '),(3,'Bart Simpson ','\"3.webp\"',10,'Student at Springfield Elementary School ','\"Bartholomew JoJo \\\"Bart\\\" Simpson (February 23, 1979) is the mischievous, rebellious, misunderstood, disruptive and \\\"potentially dangerous\\\" oldest child of the Simpson family in The Simpsons. He is the only son of Homer and Marge Simpson, and the older brother of Lisa and Maggie. He also has been nicknamed \\\"Cosmo\\\", after discovering a comet in \\\"Bart\'s Comet\\\". Bart has also been on the cover on numerous comics, such as \\\"Critical Hit\\\", \\\"Simpsons Treasure Trove #11\\\", and \\\"Winter Wingding\\\". Bart also has a 100-issue comic series entitled the Simpson Comics Presents Bart Simpson. Bart is loosely based off of Matt Groening (who\'s the creator of The Simpsons) and his older brother, Mark Groening.\" '),(4,'Lisa Simpson ','\"4.webp\"',8,'Student at Springfield Elementary School, CTU Agent, Hall-monitor, Member of PETA ','\"Lisa Marie Simpson is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons. She was named after a train called Lil\' Lisa on her parents\' 1st anniversary. In \\\"Homer and Lisa Exchange Cross Words\\\", she called herself Lisa Bouvier after estranging herself from her father after he bet against her in a crossword tournament.\" '),(5,'Maggie Simpson ','\"5.webp\"',1,'Unknown ','\"Margaret Lenny \\\"Maggie\\\" Simpson is the one-year-old daughter and youngest child of Marge and Homer Simpson, the baby sister to Bart and Lisa Simpson and one of the five main characters of The Simpsons. She is often seen sucking on her pacifier, and when she walks, she usually trips over her clothing and falls on her face. Because she rarely ever talks, Maggie is the least seen and heard in the Simpson family. Maggie is very young, at the infant age of only 1.\" '),(6,'Abe Simpson II ','\"6.webp\"',NULL,'Retired ','\"Abraham Jebediah \\\"Abe\\\" Simpson II, commonly known as Grampa Simpson or simply Grampa, is a major recurring character in The Simpsons and a supporting character in The Simpsons Movie. He is the oldest patriarch of the Simpson family, husband of Rita LaFleur, ex-husband of the late Mona Simpson, father of Homer Simpson, Herbert Powell, and Abbey, father-in-law of Marge Simpson and paternal grandfather of Bart, Lisa, and Maggie Simpson. He is also the ex-boyfriend of Jacqueline Bouvier. '),(7,'Patty Bouvier ','\"7.webp\"',NULL,'Springfield DMV Employee ','\"Patricia Maleficent \\\"Patty\\\" Bouvier is one of Marge\'s cynical chain-smoking twin sisters, who works at the DMV and has a strong dislike for her brother-in-law, Homer Simpson. Patty is a lesbian since she has confessed this to Marge (asking \\\"did you actually think I was straight?\\\") and appeared on a float at a pride parade. She is also the maternal aunt to Bart, Lisa, Maggie, and Ling. She is named after Matt Groening\'s sister Patty Groening.\" '),(8,'Selma Bouvier ','\"8.webp\"',NULL,'Employee of Department of Motor Vehicles ','\"Selma Bouvier-D\'Amico (née Bouvier; previously Terwilliger, Hutz, McClure, Discothèque, and Simpson) is one of Marge\'s older chain-smoking twin sisters. She works at the DMV and possesses a strong dislike for her brother-in-law, Homer, although on extremely rare occasions she shows kindness towards him and seems to tolerate him. She seems to despise Homer slightly less than her twin sister, Patty Bouvier.\" '),(9,'Ned Flanders ','\"9.webp\"',60,'The Leftorium (formerly) ','\"Nedward \\\"Ned\\\" Flanders, Jr., more commonly known as Flanders, is the Simpson family\'s extremely religious next door neighbor. He is a genuinely well-meaning, good-natured person. Though firmly religious, he can be timid and something of an easy pushover. He is a major character in The Simpsons and a minor, recurring antagonist in the Treehouse of Horror episodes. Ned thoroughly worships God and strictly follows the Bible as literally as possible and is easily shocked when challenged on any point of dogma. He owns Leftorium Express, a downsized version of his former business The Leftorium and a home business, Flancrest Enterprises, which makes religious hook rugs. He also works as a member of the Springfield Volunteer Fire Department. He even (legally) owns the Simpsons\' house, renting it out to the family at a low rate, showing that he would burn through much of his resources just to help his neighbors out. In Hurricane Neddy, Flanders was shown to be a kid 30 years ago in the show\'s floating timeline, but in Viva Ned Flanders, he claims to be 60 years old and looks younger thanks to following the 3 C\'s.\" '),(10,'Maude Flanders ','\"10.webp\"',NULL,'Housewife (former) ','\"Maude Flanders was a major character of The Simpsons in the first 11 seasons, was the first wife of Ned Flanders, and the late mother of Todd and Rod Flanders.\" ');
/*!40000 ALTER TABLE `characters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `characters_has_location`
--

DROP TABLE IF EXISTS `characters_has_location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `characters_has_location` (
  `characters_idcharacters` int NOT NULL,
  `location_idlocation` int NOT NULL,
  PRIMARY KEY (`characters_idcharacters`,`location_idlocation`),
  KEY `fk_characters_has_location_characters_idx` (`characters_idcharacters`),
  KEY `fk_characters_has_location_location1_idx` (`location_idlocation`),
  CONSTRAINT `fk_characters_has_location_location1` FOREIGN KEY (`location_idlocation`) REFERENCES `location` (`idlocation`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `characters_has_location`
--

LOCK TABLES `characters_has_location` WRITE;
/*!40000 ALTER TABLE `characters_has_location` DISABLE KEYS */;
INSERT INTO `characters_has_location` VALUES (1,1),(1,2),(1,4),(1,5),(1,6),(1,9),(1,10),(2,1),(2,4),(3,1),(3,3),(3,10),(4,1),(4,3),(4,10),(5,1),(5,4),(6,1),(6,9),(10,8);
/*!40000 ALTER TABLE `characters_has_location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `location` (
  `idlocation` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8mb3_bin DEFAULT NULL,
  `img-path` varchar(45) COLLATE utf8mb3_bin DEFAULT NULL,
  PRIMARY KEY (`idlocation`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (1,'Simpsons’s home','Loc1.webp'),(2,'nuclear plant','Loc2.webp'),(3,'elementary school','Loc3.webp'),(4,'kwik-e-mart','Loc4.webp'),(5,'moe’s','Loc5.webp'),(6,'general hospital','Loc6.webp'),(7,'police station','Loc8.webp'),(8,'cemetery','Loc9.webp'),(9,'retirement castle','Loc10.webp'),(10,'krusty burger','Loc11.webp');
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `idusers` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb3_bin NOT NULL,
  `email` varchar(100) COLLATE utf8mb3_bin NOT NULL,
  `hashpassword` varchar(100) COLLATE utf8mb3_bin DEFAULT NULL,
  `habilitation` varchar(45) COLLATE utf8mb3_bin NOT NULL,
  PRIMARY KEY (`idusers`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES 
(1,'Visitor','jo@visitor.fr',NULL,'visitor'),
(2,'Creator','jo@create.fr',NULL,'createAdmin'),
(3,'Deletor','jo@delete.fr',NULL,'deleteAdmin'),
(4,'Updator','jo@update.fr',NULL,'updateAdmin'),
(5,'Full','jo@full.fr','$argon2id$v=19$m=65536,t=5,p=1$BSZ2CDgSD6IAwKuy7KNKyw$M0fGcYYV8bOiDjgPx6HUY3v/mVtf4JEoZLt8QXyfZ84','fullAdmin');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-02-09 15:35:42
