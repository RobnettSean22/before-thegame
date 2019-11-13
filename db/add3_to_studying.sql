INSERT INTO study(user_id, folder_name)
VALUES
($1, $2);
SELECT * FROM study



WHERE user_id = $1;