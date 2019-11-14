module.exports = {
    createFolderStudying3 : (req, res, next) => {
        const db = req.app.get('db')
        const {user_id} = req.params
        const {studyName} = req.body

        db.add3_to_studying([user_id, studyName]).then((study) => res.status(200).send(study)).catch(err => {
            res.status(400).send({errorMessage:'didnt add a folder'})
        })
    },
    updateFolderStudying3 : (req, res, next) => {
        const db = req.app.get('db')
        const {folder_id} = req.params
        const {studying_name} = req.body
        db.update3_to_studying([folder_id, studying_name]).then((study) => res.status(200).send(studied)).catch(err => {
            res.status(400).send({errorMessage:'did not update'})
        })
    },
    
    deleteFolderStudying3 : (req, res, next) => {
        const db = req.app.get('db')
        const {studying_id, folder_id} = req.params
        db.delete3_studying(studying_id, folder_id).then((study) => res.status(200).send(study)).catch(err => {
            res.status(400).send({errorMessage:'did not delete'})
        })
    },

    readStudyingFolder3 : async (req, res, next) => {
        const db = req.app.get('db')
        const {user_id} = req.params
        const study = await db.read3_studying_folder(user_id)
        if(study){
            res.status(200).send(study)
        }
    }
}
