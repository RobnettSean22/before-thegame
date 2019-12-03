module.exports = {
  createFolderStudying: (req, res, next) => {
    const db = req.app.get("db");
    const { user_id } = req.params;
    const { studyingName } = req.body;

    db.add_to_studying([user_id, studyingName])
      .then(studying => res.status(200).send(studying))
      .catch(err => {
        res.status(400).send({ errorMessage: "didnt add a folder" });
      });
  },
  updateFolderStudying: (req, res, next) => {
    const db = req.app.get("db");
    const { user_id, folder_id } = req.params;
    const { folder_name } = req.body;
    db.update_to_studying([user_id, folder_id, folder_name])
      .then(studying => res.status(200).send(studying))
      .catch(err => {
        res.status(400).send({ errorMessage: "did not update" });
      });
  },

  deleteFolderStudying: (req, res, next) => {
    const db = req.app.get("db");
    const { user_id, folder_id } = req.params;
    db.delete_studying(user_id, folder_id)
      .then(studying => res.status(200).send(studying))
      .catch(err => {
        res.status(400).send({ errorMessage: "did not delete" });
      });
  },

  readStudyingFolder: async (req, res, next) => {
    const db = req.app.get("db");
    const { user_id } = req.params;
    const studying = await db.read_studying_folder(user_id);

    res.status(200).send(studying);
  }
};
