module.exports = {
  createFolderStudied: (req, res, next) => {
    const db = req.app.get("db");
    const { user_id } = req.params;
    const { folderName } = req.body;
    console.log(folderName);
    db.add_to_studied([user_id, folderName])
      .then(studied => res.status(200).send(studied))
      .catch(err => {
        res.status(400).send({ errorMessage: "didnt add a folder" });
      });
  },
  updateFolderStudied: (req, res, next) => {
    const db = req.app.get("db");
    const { user_id, folder_id } = req.params;
    const { folder_name } = req.body;
    db.update_to_studied([user_id, folder_id, folder_name])
      .then(studied => res.status(200).send(studied))
      .catch(err => {
        res.status(400).send({ errorMessage: "did not update" });
      });
  },

  deleteFolderStudied: (req, res, next) => {
    const db = req.app.get("db");
    console.log("delete_studied([user_id,folder_id])");
    const { user_id, folder_id } = req.params;
    db.delete_studied([user_id, folder_id])
      .then(studied => res.status(200).send(studied))
      .catch(err => {
        res.status(400).send({ errorMessage: "did not delete" });
      });
  },

  readFolder: async (req, res, next) => {
    const db = req.app.get("db");
    const { user_id } = req.params;
    db.read_folder(user_id).then(studied => res.status(200).send(studied));
  }
};
