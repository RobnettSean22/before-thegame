module.exports = {
    createFolderStudied : (req, res, next) => {
        const db = req.app.get('db')
        const {user_id} = req.params
        const {folder_name} = req.body
        db.add_to_studied([user_id, folder_name]).then((studied) => res.status(200).send(studied)).catch(err => {
            res.status(400).send({errorMessage:'didnt add a folder'})
        })
    },
    updateFolderStudied : (req, res, next) => {
        const db = req.app.get('db')
        const {folder_id} = req.params
        const {folder_name} = req.body
        db.update_to_studied([folder_id, folder_name]).then((studied) => res.status(200).send(studied)).catch(err => {
            res.status(400).send({errorMessage:'did not update'})
        })
    },
    
    deleteFolderStudied : (req, res, next) => {
        const db = req.app.get('db')
        const {folder_id} = req.params
        db.delete_studied(folder_id).then((studied) => res.status(200).send(studied)).catch(err => {
            res.status(400).send({errorMessage:'did not delete'})
        })
    }
}