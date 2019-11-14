DELETE FROM kanji2

WHERE user_id = $1 and folder_id = $2;

DELETE FROM studying

WHERE user_id = $1 AND folder_id = $2;


SELECT * FROM studying;