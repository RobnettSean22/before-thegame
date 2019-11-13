DELETE FROM study

WHERE folder_id = $1;

SELECT * FROM study;