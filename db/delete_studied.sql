DELETE FROM kanji

WHERE user_id = $1 and folder_id = $2;

DELETE FROM studied 

WHERE user_id = $1 AND folder_id = $2;


SELECT * FROM studied;
