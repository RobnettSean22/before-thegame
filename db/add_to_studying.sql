INSERT INTO studying(user_id, folder_name)
VALUES
($1, $2);
SELECT * FROM studying



WHERE user_id = $1;