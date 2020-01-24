UPDATE studied

SET folder_name = $3

WHERE user_id = $1 AND folder_id = $2;

SELECT *
From studied
ORDER BY folder_name

