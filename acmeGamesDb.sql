CREATE DATABASE  IF NOT EXISTS `acme_games` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `acme_games`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: acme_games
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `admin` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,0),(2,0);
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carrito`
--

DROP TABLE IF EXISTS `carrito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carrito` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `juego_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `juego_id` (`juego_id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `carrito_ibfk_1` FOREIGN KEY (`juego_id`) REFERENCES `juegos` (`id`),
  CONSTRAINT `carrito_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrito`
--

LOCK TABLES `carrito` WRITE;
/*!40000 ALTER TABLE `carrito` DISABLE KEYS */;
INSERT INTO `carrito` VALUES (4,3,9),(5,1,9);
/*!40000 ALTER TABLE `carrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'mas vendido'),(2,'novedades'),(3,'proximamente'),(4,'oferta');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compatibilidad`
--

DROP TABLE IF EXISTS `compatibilidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compatibilidad` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `plataforma` varchar(255) NOT NULL,
  `icono` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compatibilidad`
--

LOCK TABLES `compatibilidad` WRITE;
/*!40000 ALTER TABLE `compatibilidad` DISABLE KEYS */;
INSERT INTO `compatibilidad` VALUES (1,'pc','fa-solid fa-desktop'),(2,'playstation','fa-brands fa-playstation'),(3,'xbox','fa-brands fa-xbox'),(4,'ios','fa-brands fa-apple'),(5,'android','fa-brands fa-android'),(6,'nintendo','fa-solid fa-game-console-handheld');
/*!40000 ALTER TABLE `compatibilidad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genero`
--

DROP TABLE IF EXISTS `genero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `genero` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genero`
--

LOCK TABLES `genero` WRITE;
/*!40000 ALTER TABLE `genero` DISABLE KEYS */;
INSERT INTO `genero` VALUES (1,'accion'),(2,'arcade'),(3,'aventura'),(4,'carerras'),(5,'deportes'),(6,'estrategia'),(7,'infantil'),(8,'roll'),(9,'terror');
/*!40000 ALTER TABLE `genero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `juegos`
--

DROP TABLE IF EXISTS `juegos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `juegos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `genero_id` int(11) NOT NULL,
  `imagenLogo` text NOT NULL,
  `imagenes` text NOT NULL,
  `precio` int(11) NOT NULL,
  `descuento` int(11) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `minimo` varchar(1000) DEFAULT NULL,
  `so` varchar(1000) DEFAULT NULL,
  `procesador` varchar(1000) DEFAULT NULL,
  `memoria` varchar(1000) DEFAULT NULL,
  `graficos` varchar(1000) DEFAULT NULL,
  `almacenamiento` varchar(1000) DEFAULT NULL,
  `notasAdicionales` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `genero_id` (`genero_id`),
  KEY `categoria_id` (`categoria_id`),
  CONSTRAINT `juegos_ibfk_1` FOREIGN KEY (`genero_id`) REFERENCES `genero` (`id`),
  CONSTRAINT `juegos_ibfk_2` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `juegos`
--

LOCK TABLES `juegos` WRITE;
/*!40000 ALTER TABLE `juegos` DISABLE KEYS */;
INSERT INTO `juegos` VALUES (1,'World of Warcraft',1,8,'/imagenes/1660513682010-imagenLogo.jpg','/imagenes/1660513682033-imagenes.jpg,/imagenes/1660513682048-imagenes.jpg,/imagenes/1660513682051-imagenes.jpg,/imagenes/1660513682052-imagenes.jpg,/imagenes/1660513682056-imagenes.jpg',3200,15,'World of Warcraft, también abreviado como WoW, es un videojuego de rol online multijugador masivo desarrollado en 2004 por Blizzard Entertainment, y disponible para los sistemas operativos Windows y Mac OS X. Está basado en el mundo de ficción y la historia de Warcraft, donde se adopta el papel de un personaje virtual que interactúa con otros personajes y desarrolla situaciones en un ambiente fantástico como en un juego de rol, siendo la cuarta entrega situada en este universo.\r\n\r\nWorld of Warcraft tiene lugar en el mundo de Azeroth, aproximadamente cuatro después de los eventos que concluyen Warcraft III: The Frozen Throne. Desde su estreno, se han publicado un total de siete expansiones principales: The Burning Crusade, Wrath of the Lich King, Cataclysm, Mists of Pandaria, Warlords of Draenor, Legion y Battle for Azeroth.\r\n\r\nEste título llegó a ser el MMORPG más popular del mundo por número de jugadores, con casi 10 millones en el año 2009. En 2014, llegó a tener un total de más de cien millones de cuentas registradas. En 2017, World of Warcraft consiguió recaudar más de 9.230 millones de dólares en ingresos, por lo que es una de las franquicias de videojuegos con mayor recaudación de todos los tiempos. En la BlizzCon 2017, se anunció una versión original del juego titulada World of Warcraft: Classic, que está planeada para proporcionar una forma de experimentar el juego principal antes de que se lanzara cualquiera de sus expansiones. Será lanzado en agosto de 2019.','Requiere un procesador y un sistema operativo de 64 bits.','Windows 10 (November 2019 Update or higher), 8 or 7 (64-bit with the latest updates; some functionality not supported on Windows 7 and 8).','Intel Core i5 2.6GHz or similar.','6 GB de RAM.','GeForce GTX 700 series or similar.','3 GB de espacio disponible.','Performance increases with higher-end systems. Not supported on Windows 10S.'),(2,'Gran Turismo',4,4,'/imagenes/1660513858928-imagenLogo.jpg','/imagenes/1660513858929-imagenes.jpg,/imagenes/1660513858934-imagenes.jpg,/imagenes/1660513858937-imagenes.jpg,/imagenes/1660513858945-imagenes.jpg,/imagenes/1660513858947-imagenes.jpg',12399,20,'Si eres piloto competitivo o casual, coleccionista, aficionado a las modificaciones, diseñador de apariencias o fotógrafo, encuentra tu camino con una colección impresionante de modos de juego, incluidos los favoritos de los fanáticos, como Campaña de GT, Arcade y Escuela de manejo.\r\nGracias a la reincorporación del legendario modo Simulación de GT, puedes comprar y modificar autos, correr con ellos y venderlos en campañas individuales, a medida que desbloqueas nuevos autos y desafíos. Y si te gusta enfrentarte cabeza a cabeza con otros, perfecciona tus habilidades y compite en el modo Sport.\r\nCon más de 420 autos disponibles en Brand Central y la concesionaria de autos usados desde el primer día, Gran Turismo 7 recrea la apariencia y el manejo de vehículos clásicos y superautos vanguardistas con un nivel de detalle sin precedentes. Cada auto tiene una sensación de conducción diferente y única en más de 90 pistas en diferentes condiciones climáticas, incluidas las pistas clásicas de la historia de GT.','Requiere un procesador y un sistema operativo de 64 bits.','Windows 7 or later.','Intel Core i5 2.6GHz or similar.','6 GB de RAM.','GeForce GTX 700 series or similar.','10 GB de espacio disponible.','64-bit operating system is required.'),(3,'Stardew Valley',1,3,'/imagenes/1660514019185-imagenLogo.jpg','/imagenes/1660514019189-imagenes.jpg,/imagenes/1660514019199-imagenes.jpg,/imagenes/1660514019203-imagenes.jpg,/imagenes/1660514019209-imagenes.jpg,/imagenes/1660514019212-imagenes.jpg',3749,50,'Acabas de heredar la vieja parcela agrícola de tu abuelo de Stardew Valley. Decides partir hacia una nueva vida con unas herramientas usadas y algunas monedas.\r\n¿Te ves capaz de vivir de la tierra y convertir estos campos descuidados en un hogar próspero?\r\nCrea la granja de tus sueños! Constrúyela desde cero en una de las cinco configuraciones del mapa.\r\nDomina tu habilidad con la ganadería! Cría animales, siembra cultivos y fabrica maquinaria útil entre muchas más cosas.\r\nÚnete a la comunidad local! Entabla amistad con más de 30 habitantes de Pelican Town.\r\nPersonaliza a tu granjero! Podrás elegir entre cientos de opciones de personalización de personajes.\r\nInstálate y empieza a formar una familia! Comparte tu vida en la granja con uno de los doce personajes con los que podrás tener una relación.\r\nExplora grandes y misteriosas cuevas! Encuentra monstruos peligrosos y tesoros valiosos.','Requiere un procesador y un sistema operativo de 64 bits.','Windows Vista or greater.','2 Ghz.','2 GB de RAM.','256 mb video memory, shader model 3.0+.','500 MB de espacio disponible.','64-bit operating system is required.'),(4,'League Of Legends',1,6,'/imagenes/1660514143265-imagenLogo.jpg','/imagenes/1660514143267-imagenes.jpg,/imagenes/1660514143269-imagenes.jpg,/imagenes/1660514143273-imagenes.jpg,/imagenes/1660514143275-imagenes.jpg,/imagenes/1660514143277-imagenes.jpg',4499,30,'Desarrollado por Airship Syndicate y con el estilo del legendario guionista de cómics Joe Madureira, los creadores de Battle Chasers y Darksiders, Ruined King: A League of Legends Story™ es el primer juego de Riot Forge y os invita a adentraros en el universo de League of Legends. En este trepidante RPG por turnos, podréis configurar vuestro equipo y controlar a un variado elenco de campeones de League of Legends, explorar la ajetreada ciudad de Aguas Estancadas y las misteriosas Islas de la Sombra, y probar el sistema de iniciativa de filas.','Requiere un procesador y un sistema operativo de 64 bits.','Requiere un procesador y un sistema operativo de 64 bits.','Intel Core i5-2300, AMD A8-5600k.','8 GB de RAM.','Radeon Vega 8 / Intel Iris Plus / Geforce GTX 650 / Radeon HD 7770 (2GB VRAM Required).','15 GB de espacio disponible.','Recommended for 1080p, 30FPS on Medium Settings.'),(5,'Minecraft',4,3,'/imagenes/1660514270202-imagenLogo.jpeg','/imagenes/1660514270205-imagenes.jpg,/imagenes/1660514270208-imagenes.jpg,/imagenes/1660514270212-imagenes.jpg,/imagenes/1660514270215-imagenes.jpg,/imagenes/1660514270220-imagenes.jpg',4899,15,'Aprende la historia de Minecraft Legends y explora su mundo nuevo pero familiar, mientras experimentas el Universo Minecraft de una manera nueva y emocionante en este nuevo juego de acción y estrategia.\r\nExplora una tierra hermosa, familiar y misteriosa, llena de vida diversa, biomas exuberantes y ricos recursos necesarios para construir tus defensas y derrotar a la invasión piglin.\r\nInspira a amigos inesperados a formar alianzas valiosas y llévalos en batallas estratégicas para proteger su hogar. ¡Lleva la lucha a los piglins antes de que su corrupción Nether devore el Overworld!\r\nY por último, desafía a tus amigos, o forma equipo con ellos, en emocionantes batallas mientras defiendes tu aldea y lideras a tus aliados para derrotar a tus oponentes.','Requiere un procesador y un sistema operativo de 64 bits.','Windows 10 (November 2019 Update or higher), 8 or 7 (64-bit with the latest updates; some functionality not supported on Windows 7 and 8).','Core i5 2.8GHz or equivalent.','8 GB de RAM.','NVIDIA GeForce GTX 660 or AMD Radeon HD 7870 or equivalent DX11 GPU.','8 GB de espacio disponible.','Performance increases with higher-end systems. Not supported on Windows 10S.'),(6,'Left For Dead 2\'',4,1,'/imagenes/1660514419823-imagenLogo.jpg','/imagenes/1660514419823-imagenes.jpg,/imagenes/1660514419827-imagenes.jpg,/imagenes/1660514419830-imagenes.jpg,/imagenes/1660514419834-imagenes.jpg,/imagenes/1660514419836-imagenes.jpg',3499,25,'Ambientado en el apocalipsis zombi, Left 4 Dead 2 (L4D2) es la esperadísima secuela del galardonado Left 4 Dead, el juego cooperativo número 1 de 2008. Este FPS cooperativo de acción y terror os llevará a ti y a tus amigos por las ciudades, pantanos y cementerios del Sur Profundo, desde Savannah hasta Nueva Orleans, a lo largo de cinco extensas campañas.\r\nJugarás como uno de los cuatro nuevos supervivientes, armado con un amplio y devastador arsenal de armas clásicas y mejoradas. Además de las armas de fuego, también tendrás la oportunidad de masacrar a los infectados con diversas armas de combate cuerpo a cuerpo, desde motosierras hasta hachas, e incluso una mortífera sartén.\r\nPondrás a prueba estas armas contra tres espantosos y formidables nuevos infectados especiales (o jugarás como ellos en el modo Enfrentamiento). También te encontrarás con cinco nuevos infectados comunes no comunes, incluyendo a los aterradores embarrados. AI Director 2.0 lleva la jugabilidad frenética y repleta de acción de L4D a un nivel superior.','Requiere un procesador y un sistema operativo de 64 bits.','Windows® 7 32/64-bit / Vista 32/64 / XP.','Pentium 4 3.0GHz.','2 GB de RAM.','Video card with 128 MB, Shader model 2.0. ATI X800, NVidia 6600 or better.','13 GB de espacio disponible.','DirectX 9.0c compatible sound card.'),(7,'Elden Ring',2,1,'/imagenes/1660514579112-imagenLogo.jpg','/imagenes/1660514579113-imagenes.jpg,/imagenes/1660514579117-imagenes.jpg,/imagenes/1660514579120-imagenes.jpg,/imagenes/1660514579128-imagenes.jpg,/imagenes/1660514579131-imagenes.jpg',4999,10,'Un vasto mundo perfectamente conectado en el que los territorios abiertos estarán repletos de situaciones y mazmorras enormes con diseños complejos y tridimensionales. Mientras exploras, experimentarás el deleite de descubrir amenazas desconocidas y sobrecogedoras, y eso te haré sentir la emoción de la superación.\r\nAdemás de personalizar la apariencia de tu personaje, puedes combinar libremente las armas, armaduras y la magia que te equipas. Puedes desarrollar a tu personaje según tu estilo de juego, tanto para aumentar tu fuerza bruta y ser un guerrero poderoso, como para dominar la magia.\r\nEn el modo multijugador, en el que te puedes conectar directamente con otros jugadores y viajar juntos, el juego incluye un elemento online asíncrono único que te permite sentir la presencia de otros.','Requiere un procesador y un sistema operativo de 64 bits.','Windows 10.','INTEL CORE I5-8400 or AMD RYZEN 3 3300X.','12 GB de RAM.','NVIDIA GEFORCE GTX 1060 3 GB or AMD RADEON RX 580 4 GB.','60 GB de espacio disponible.','Windows Compatible Audio Device.'),(8,'Raft',2,3,'/imagenes/1660514696132-imagenLogo.jpg','/imagenes/1660514696132-imagenes.jpg,/imagenes/1660514696136-imagenes.jpg,/imagenes/1660514696140-imagenes.jpg,/imagenes/1660514696141-imagenes.jpg,/imagenes/1660514696143-imagenes.jpg',5199,15,'Solo o con amigos, tu misión es sobrevivir a una épica aventura oceánica a través de un mar peligroso! ¡Reúne escombros para sobrevivir, expande tu balsa y zarpa hacia islas olvidadas y peligrosas!\r\nAtrapados en una pequeña balsa con nada más que un gancho hecho de plástico viejo, los jugadores se despiertan en un vasto y océano azul totalmente solo y sin tierra a la vista! Con la garganta seca y el estómago vacío, ¡La supervivencia no será fácil! Raft te sumerge a ti y a tus amigos en una aventura épica en mar abierto, con el objetivo de mantenerse con vida, reunir recursos y construirse una casa flotante digna de supervivencia.\r\nLos recursos son difíciles de conseguir en el mar: los jugadores deberán asegurarse de atrapar cualquier escombro que flote usando su anzuelo de confianza y, cuando sea posible, buscar en los arrecifes debajo de las olas y las islas de arriba. Sin embargo, la sed y el hambre no son el único peligro en el océano... cuidado con el hombre. ¡comiendo tiburón decidido a poner fin a tu viaje! Encuentra las últimas partes de la civilización aún sobre el agua.\r\n¡Supera los desafíos, descubre la historia de sus habitantes anteriores y encuentra tu camino hacia el próximo destino!','Requiere un procesador y un sistema operativo de 64 bits.','Windows 7 or later.','Intel Core i5 2.6GHz or similar.','6 GB de RAM.','GeForce GTX 700 series or similar.','10 GB de espacio disponible.','64-bit operating system is required.'),(9,'Terraria',1,3,'/imagenes/1660514825993-imagenLogo.jpg','/imagenes/1660514825993-imagenes.jpg,/imagenes/1660514825995-imagenes.jpg,/imagenes/1660514825997-imagenes.jpg,/imagenes/1660514825999-imagenes.jpg,/imagenes/1660514826007-imagenes.jpg',2500,10,'¡Cava, lucha, explora, construye! Nada es imposible en este juego de aventuras repleto de acción. El mundo es tu lienzo y la tierra misma es tu pintura.\r\n¡Coge tus herramientas y adelante! Crea armas para deshacerte de una gran variedad de enemigos en numerosos ecosistemas. Excava profundo bajo tierra para encontrar accesorios, dinero y otras cosas muy útiles. Reúne recursos para crear todo lo que necesites y conformar así tu propio mundo. Construye una casa, un fuerte o incluso un castillo. La gente se mudará a vivir ahí e incluso quizás te vendan diferentes mercancías que te ayuden en tu viaje.\r\nPero ten cuidado, aún te aguardan más desafíos... ¿Estás preparado para la tarea?','Requiere un procesador y un sistema operativo de 64 bits.','Windows XP / Vista / 7.','1.6 GHz.','512 MB de RAM.','Shader Model 1.1 con 128 MB de RAM.','200 MB de espacio libre.','9.0c o posterior.'),(10,'Fifa 2022',1,5,'/imagenes/1660514941677-imagenLogo.jpg','/imagenes/1660514941678-imagenes.jpg,/imagenes/1660514941681-imagenes.jpg,/imagenes/1660514941681-imagenes.jpg,/imagenes/1660514941682-imagenes.jpg,/imagenes/1660514941682-imagenes.jpg',5499,10,'Juega al juego del mundo con más de 17 000 jugadores, más de 700 equipos, más de 90 estadios y más de 30 ligas de todo el mundo.\r\nModo Carrera: Vive tus sueños con FIFA 22, ya sea como mánager o como futbolista. Crea el club más nuevo de FIFA, diseña tus equipaciones y tu estadio y decide si quieres competir con la élite o ascender desde las divisiones inferiores mientras encaminas a tu club hacia la gloria. También puedes probar tus habilidades como futbolista con un modo Carrera de jugador más inmersivo, que te dará más formas de progresar, alcanzar tus objetivos y sumergirte en tu viaje Pro mediante el juego.\r\nVOLTA FOOTBALL: Vuelve a conquistar las calles con VOLTA FOOTBALL. Crea tu futbolista, elige tu equipación y exprésate a tu manera, por tu cuenta o con tu plantilla, en las calles y pistas de fútbol de todo el mundo. Consigue recompensas por tu habilidad con el balón gracias al nuevo estilo de juego rediseñado y juega cada temporada a eventos únicos que tienen lugar en emplazamientos especiales, al tiempo que desbloqueas nuevo equipamiento mediante un nuevo sistema de progreso en la temporada, que te permite ganar XP en todas las recompensas que se ofrecen en VOLTA FOOTBALL sin importar el modo al que juegues.','Requiere un procesador y un sistema operativo de 64 bits.','Windows 10 - 64-Bit.','Intel Core i3-6100 @ 3.7GHz or AMD Athlon X4 880K @4GHz.','8 GB de RAM.','NVIDIA GTX 660 2GB or AMD Radeon HD 7850 2GB.','50 GB de espacio disponible.','Requiere un procesador y un sistema operativo de 64 bits.'),(11,'Skyrim',4,9,'/imagenes/1660515028158-imagenLogo.jpg','/imagenes/1660515028158-imagenes.jpg,/imagenes/1660515028162-imagenes.jpg,/imagenes/1660515028165-imagenes.jpg,/imagenes/1660515028174-imagenes.jpg,/imagenes/1660515028178-imagenes.jpg',5999,15,'Bethesda Game Studios, los galardonados desarrolladores, presentan un juego completo y con un mundo realmente abierto para realidad virtual. Skyrim VR recrea la obra maestra de la fantasía épica al completo con una escala, una profundidad y una sensación de de inmersión sin igual. En Skyrim VR, un mundo abierto completo cobra vida para que puedas disfrutarlo a tu antojo, enfrentándote a dragones ancestrales, explorando montañas abruptas y muchas otras cosas. Skyrim VR incluye el juego principal, aclamado por la crítica, y los complementos oficiales: Dawnguard, Hearthfire y Dragonborn.\r\nLos dragones, perdidos desde hace tiempo en los pasajes de los Pergaminos antiguos, han regresado a Tamriel y está en juego el futuro del Imperio. Como Sangre de Dragón, el héroe de la profecía nacido con el poder de la Voz, eres el único que puede enfrentarse a ellos.','Requiere un procesador y un sistema operativo de 64 bits.','Windows 7/8.1/10 (64-bit versions).','Intel Core i5-6600K or AMD Ryzen 5 1400 or better.','8 GB de RAM.','Nvidia GeForce GTX 970 / AMD RX 480 8GB or better.','15 GB de espacio disponible.','Requiere un procesador y un sistema operativo de 64 bits.'),(12,'Dota 2',1,6,'/imagenes/1660515173629-imagenLogo.jpg','/imagenes/1660515173629-imagenes.jpg,/imagenes/1660515173646-imagenes.jpg,/imagenes/1660515173654-imagenes.jpg,/imagenes/1660515173669-imagenes.jpg,/imagenes/1660515173676-imagenes.jpg',7949,5,'Cada día, millones de jugadores de todo el mundo entran en batalla como uno de los más de cien héroes de Dota. Y no importa si es su décima hora de juego o la milésima, siempre hay algo nuevo que descubrir. Con frecuentes actualizaciones que garantizan una evolución constante de jugabilidad, características y héroes, Dota 2 realmente ha cobrado vida propia. Cuando se trata de variedad de héroes, habilidades y poderosos objetos, Dota no tiene límite. No hay dos partidas iguales. Cada héroe puede desempeñar varios roles, y hay multitud de objetos para ayudar a satisfacer las necesidades de cada partida. Dota no pone límites a tu forma de jugar, te da el poder de expresar tu propio estilo.\r\nEl equilibrio competitivo es la joya de la corona de Dota, y para garantizar que todo el mundo juegue en un campo de batalla equilibrado, el contenido principal del juego está disponible para todos los jugadores. Los fans pueden coleccionar objetos cosméticos para los héroes y divertidos complementos para el mundo en que estos habitan, pero todo lo necesario para jugar ya está ahí antes de que te unas a tu primera partida.','Requiere un procesador y un sistema operativo de 64 bits.','Windows 7 o posterior.','Intel o AMD de doble núcleo a 2,8 GHz.','4 GB de RAM.','NVIDIA GeForce 8600/9600GT, ATI/AMD Radeon HD2600/3600','15 GB de espacio disponible.','Compatible con DirectX.');
/*!40000 ALTER TABLE `juegos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `juegos_compatibilidad`
--

DROP TABLE IF EXISTS `juegos_compatibilidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `juegos_compatibilidad` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `juegos_id` int(11) NOT NULL,
  `compatibilidad_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `juegos_id` (`juegos_id`),
  KEY `compatibilidad_id` (`compatibilidad_id`),
  CONSTRAINT `juegos_compatibilidad_ibfk_1` FOREIGN KEY (`juegos_id`) REFERENCES `juegos` (`id`),
  CONSTRAINT `juegos_compatibilidad_ibfk_2` FOREIGN KEY (`compatibilidad_id`) REFERENCES `compatibilidad` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `juegos_compatibilidad`
--

LOCK TABLES `juegos_compatibilidad` WRITE;
/*!40000 ALTER TABLE `juegos_compatibilidad` DISABLE KEYS */;
INSERT INTO `juegos_compatibilidad` VALUES (1,1,1),(2,2,2),(3,2,1),(4,2,3),(5,3,1),(6,3,2),(7,3,3),(8,3,5),(9,3,6),(10,3,4),(11,4,1),(12,4,4),(13,4,5),(14,5,1),(15,5,4),(16,5,2),(17,5,3),(18,5,5),(19,6,1),(20,6,3),(21,6,2),(22,7,1),(23,7,2),(24,7,3),(25,8,1),(26,9,1),(27,9,2),(28,9,3),(29,9,4),(30,9,5),(31,9,6),(32,10,1),(33,10,2),(34,10,3),(35,11,1),(36,11,2),(37,11,3),(38,12,1),(39,12,2),(40,12,3),(41,12,4),(42,12,5);
/*!40000 ALTER TABLE `juegos_compatibilidad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) NOT NULL,
  `admin_id` int(11) NOT NULL,
  `password` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `fecha` date NOT NULL,
  `avatar` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `admin_id` (`admin_id`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (8,'nacho',1,'$2a$10$x4/IkZMUJoO9mGBX1gt1Uuoh63k5ucKa/gLVfh0bMf5Poa8UOqzzK','ignacio.jankauskas60@gmail.com','1997-09-08','/imagenes/avatars/1660705933169_img.jpg'),(9,'nachito',1,'$2a$10$Npnlb4j6rqeclLaMieMkfeYe2Sv0SWzU8p4vZH8E3b95Y6PpYmiwG','ignacio.martin.97@hotmail.com','1997-09-08','/imagenes/avatars/1660708097381_img.jpg');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-28 22:29:16
