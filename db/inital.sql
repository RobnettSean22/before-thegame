CREATE TABLE users(
    user_id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(30) NOT NULL UNIQUE,
    password TEXT NOT NULL,
    email TEXT UNIQUE,
    image TEXT,
    short_message VARCHAR(120)
 );
 INSERT INTO users(username, password, email, short_message)
 VALUES
 ('UniverSoul', 'blind22', 'blind22@gmail.com', 'learning to live in japan')

CREATE TABLE kanji(
kanji_id SERIAL PRIMARY KEY NOT NULL,
index_number INTEGER, 
user_id INTEGER REFERENCES users(user_id),
folder_id INTEGER REFERENCES studied(folder_id)
);

CREATE TABLE studied(
folder_id SERIAL PRIMARY KEY NOT NULL,
folder_name TEXT NOT NULL,
user_id INTEGER REFERENCES users(user_id)

);
INSERT INTO studied(user_id, folder_name)
VALUES
(1, 'kitchen');
