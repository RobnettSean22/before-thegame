UPDATE study

SET folder_name = $3

WHERE user_id = $1 AND folder_id = $2;

SELECT *
From study
ORDER BY folder_name
