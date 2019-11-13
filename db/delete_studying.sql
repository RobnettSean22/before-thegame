DELETE FROM studying

WHERE folder_id = $1;

SELECT * FROM studying;