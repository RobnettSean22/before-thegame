DELETE FROM studied

WHERE folder_id = $1;

SELECT * FROM studied;