module.exports = {
    createFolderStudied : (req, res, next) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {name} = req.body
        db.add_to_studied([id,name]).then((studied) => res.status(200).send(studied)).catch(err => {
            res.status(400).send({errorMessage:'didnt add a folder'})
        })
    },
    updateFolderStudied : (req, res, next) => {
        const db = req.app.get('db')
        
    }   
}