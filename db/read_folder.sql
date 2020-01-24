SELECT *
FROM studied

WHERE user_id = $1
ORDER BY folder_name;