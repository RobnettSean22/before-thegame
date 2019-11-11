module.exports = {
    addKanji : (req, res, next) => {
        const db = req.app.get('db')
        const {user_id, folder_id} = req.params
        const {index_number} = req.body
        db.add_kanji([user_id, folder_id, index_number]).then((kanji) => res.status(200).send(kanji)).catch(err => {
            res.status(400).send({errorMessage:'add to list'})
        })
    },
    deleteKanji : (req,res, next) => {
        const db = req.app.get('db')
        const {kanji_id} = req.params
        db.delete_kanji(kanji_id).then((kanji) => res.status(200).send(kanji)).catch(err => {
            res.status(400).send({errorMessage:'did not delete'})
        })
    },
    readKanji : (req,res, next) => {
        const db = req.app.get('db')
        const {user_id, folder_id} = req.params
    }
}