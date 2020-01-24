
SELECT *
FROM study

WHERE user_id = $1
ORDER BY folder_name;