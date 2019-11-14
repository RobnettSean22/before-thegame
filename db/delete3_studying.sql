DELETE FROM kanji3

WHERE user_id = $1 and folder_id = $2;

DELETE FROM study   

WHERE user_id = $1 AND folder_id = $2;


SELECT * FROM study;