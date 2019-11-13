INSERT INTO kanji(index_number, user_id, folder_id, studying_id)
VALUES
($1, $2, $3, $4);
SELECT * FROM  kanji