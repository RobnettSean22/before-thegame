INSERT INTO studied(user_id, folder_name)
VALUES
($1, $2);
SELECT * FROM studied



WHERE user_id = $1;