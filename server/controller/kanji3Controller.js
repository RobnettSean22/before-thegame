module.exports = {
    addKanji3 : (req, res, next) => {
        const db = req.app.get('db')
        const {user_id, folder_id} = req.params
        const {index_number} = req.body
        db.add2_kanji([index_number, user_id, folder_id ]).then((kanji3) => res.status(200).send(kanji3)).catch(err => {
            res.status(400).send({errorMessage:'add to list failed'})
        })
    },
    deleteKanji3 : (req,res, next) => {
        const db = req.app.get('db')
        const {kanji_id} = req.params
        db.delete2_kanji(kanji_id).then((kanji3) => res.status(200).send(kanji3)).catch(err => {
            res.status(400).send({errorMessage:'did not delete'})
        })
    },
    readKanji3 : async (req,res, next) => {
        const db = req.app.get('db')
        const {user_id, folder_id} = req.params
        db.read2_kanji([user_id, folder_id]).then((kanji3) => res.status(200).send(kanji3)).catch(err => {
            res.status(400).send({errorMessage:'can not see kanji'})
        })
    }
}