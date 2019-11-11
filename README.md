

# frontend(react)

## dependencies
    - axios
    - react-router-dom
    - redux-promise-middleware
    - http-proxy-middleware

### components
    - search bar x
    - Header x
        * Nav links
            + logo
            + Home
            + All kanji
            + My Kanji
            + Kanji Help
    - Landing page (home) x
        * <filter search bar/>
        * tilted background picture
        * Login in button
        * logotu button
        * register
    - All kanji x
        * <fiilter search bar/>
        * Kanji card (kanj-scroll card) = button
    - Created card group x
    - My kanji x
        * Japanese bacground
        * profile picture 
        * username
        * short description
        * studied
            + <created card groups ()/>  = button
            + create new group button
        * currently studying
            + <created card groups ()/>  = button
            + create new group button
        * future studies
            + <created card groups ()/> = button
            + create new group button
    - Kanji card (kanj-scroll card) = button
    - Card kanji list (group card specific) x one component
        * name of card
        * <study button/>
        * kanji info
    - Study button x
    - Single-kanji-page x
        * Kanji english meaning
        * kanji it self
        * kanji info
        * sentence exmples
        * school year, jlpt, unicode, note
    - kanji flash card x
    - Study Page
        * Flash Card
    - login.js
        * username
        * password
        * login button
        * register Button
    -sign up(register)
        * username
        * password
        * email
        * sign up button

    


### Routes

    - AllKanji => AllKanji.js
    - AllKanji.js => SingleKanjiPage.js
    - MyKanji => MyKanji.js
    - MyKanji.js => KanjiCardList.js
    - KanjiCardList.js => StudyPage
    - Home => Home.js
    - Logo => home.js
    - login => login.js
    - register => signup.js
    - signup button => myKanji.js

        

    
   

# backend(express)

## dependencies
    - bcyript
    - express
    - express-session
    - massive dotenv

## server
    - db
    - index 
    - controller
        * userController
        * kanjiController

### endponts

**User/auth**

- userSession: => get => /auth/session
- register: => /auth/register
- logout: => /auth/logout
- login: => /auth/login




**Kanji**
- showAllKanji => get => ?



# database(sql)
```sql
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



 CREATE TABLE studied(
     playlist_id SERIAL PRIMARY KEY NOT NULL,
     playlist_name TEXT,
     user_id INTEGER REFERENCES users(user_id),
     kanji_id INTEGER REFERENCES ,
 )
 INSERT INTO playlists(playlist_name, user_id, kanji_id)
 VALUES
 ('kitchen', 1, 2)

 
```
