/*
SCRIPTS
*/

/* CREATING TABLE USERS */
CREATE TABLE Users (
	fName VARCHAR(30) NOT NULL,
  lName VARCHAR(30) NOT NULL,
  email VARCHAR(50) NOT NULL,
  username VARCHAR(50) NOT NULL PRIMARY KEY,
  password VARCHAR(50) NOT NULL,
  gender VARCHAR(10) NOT NULL,
  country VARCHAR(10) NOT NULL
);

/* INSERTING DUMMY USERS INTO THE DATABASE */
INSERT INTO Users(fName, lName, email, username, password, gender, country)
VALUES ('Mauricio', 'Cortes', 'mauro@gmail.com', 'maurycortes', '12345', 'male', 'MX'),
			 ('Marcela', 'Garza', 'marce22@gmail.com', 'marcelagarza', '12345', 'female', 'FR'),
       ('Alfredo', 'Salazar', 'alfred@mail.com', 'alfredo08', 'alfred90', 'male', 'AR');



/* CREATING TABLE CAR MODELS */
CREATE TABLE Cars (
 	model VARCHAR(10) NOT NULL,
 	year VARCHAR(10) NOT NULL,
	startingPrice VARCHAR(10) NOT NULL,
 	motor VARCHAR(20) NOT NULL,
 	seatsMaterial VARCHAR(20) NOT NULL,
	technology VARCHAR(500) NOT NULL,
	wheels VARCHAR(20) NOT NULL,
	sportMode VARCHAR(20) NOT NULL,
	airBags VARCHAR(20) NOT NULL,
	sound VARCHAR(20) NOT NULL,
	bluetooth VARCHAR(20) NOT NULL,
	parkingSensors VARCHAR(20) NOT NULL,
	personalAssistant VARCHAR(20) NOT NULL,
	automaticWindows VARCHAR(20) NOT NULL,
	gps VARCHAR(20) NOT NULL,
	automaticParking VARCHAR(20) NOT NULL,
	numberOfSeats VARCHAR(20) NOT NULL,
	numberOfDoors VARCHAR(20) NOT NULL
);

/* INSERTING CAR MODELS INFO INTO THE DATABASE */
INSERT INTO Cars(model, year, startingPrice, motor, seatsMaterial, technology, wheels, sportMode, airBags, sound, bluetooth, parkingSensors, personalAssistant, automaticWindows, gps, automaticParking, numberOfSeats, numberOfDoors)
VALUES ('X1', '2019', '190,000', 'V4 2.0L', 'Fabric', 'Cruise control', '17"', 'No', 'Yes', 'Sony Max Sound', 'No', 'No', 'No', 'No', 'No', 'No', '5', '3'),
			 ('X2', '2019', '240,000', 'V6 2.0L', 'Fabric', 'Cruise control, Google Car Play', '18"', 'Yes', 'Yes', 'Bose M1', 'Yes', 'No', 'No', 'Yes', 'Yes', 'No', '5', '5'),
 			 ('X3', '2019', '320,000', 'V6 2.5L', 'Leather', 'Cruise control, Google Car Play, AI Assistant', '18"', 'Yes. 4 Sport modes', 'Yes', 'Bose M2 Premier', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', '7', '5');



/* CREATING TABLE CONTACT INFO */
CREATE TABLE Contact (
	country VARCHAR(10) NOT NULL,
	email VARCHAR(50) NOT NULL,
	phone VARCHAR(20) NOT NULL,
	address VARCHAR(100) NOT NULL
);

/* INSERTING CONTACT INFO INTO THE DATABASE */
INSERT INTO Contact(country, email, phone, address)
VALUES ('NONE', 'contact_mexico@marke.com', '83745565', 'address mexico'),
			 ('MX', 'contact_mexico@marke.com', '83745565', 'address mexico'),
			 ('US', 'contact_us@marke.com', '22541487', 'address us'),
			 ('CA', 'contact_canada@marke.com', '77884455', 'address canada'),
			 ('BR', 'contact_brazil@marke.com', '98745622', 'address brazil'),
			 ('GE', 'contact_germany@marke.com', '55505223', 'address germany'),
			 ('CH', 'contact_china@marke.com', '88884587', 'address china'),
			 ('AU', 'contact_australia@marke.com', '60603254', 'address australia'),
			 ('FR', 'contact_france@marke.com', '74745858', 'address france'),
			 ('RU', 'contact_russia@marke.com', '46501010', 'address russia'),
			 ('EN', 'contact_england@marke.com', '00002213', 'address england'),
			 ('AR', 'contact_argentina@marke.com', '21202031', 'address argentina');



/* CREATING TABLE PRICING INFO */
CREATE TABLE Pricing (
	username VARCHAR(50) NOT NULL,
	model VARCHAR(50) NOT NULL,
	base_price VARCHAR(50) NOT NULL,
	final_price VARCHAR(50) NOT NULL,
	initial_payment VARCHAR(50) NOT NULL,
	monthly_payment VARCHAR(50) NOT NULL,
	taxes VARCHAR(50) NOT NULL
);
