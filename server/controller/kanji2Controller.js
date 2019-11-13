module.exports = {
    addKanji2 : (req, res, next) => {
        const db = req.app.get('db')
        const {user_id, folder_id} = req.params
        const {index_number} = req.body
        db.add2_kanji([index_number, user_id, folder_id ]).then((kanji2) => res.status(200).send(kanji2)).catch(err => {
            res.status(400).send({errorMessage:'add to list failed'})
        })
    },
    deleteKanji2 : (req,res, next) => {
        const db = req.app.get('db')
        const {kanji_id} = req.params
        db.delete2_kanji(kanji_id).then((kanji2) => res.status(200).send(kanji2)).catch(err => {
            res.status(400).send({errorMessage:'did not delete'})
        })
    },
    readKanji2 : async (req,res, next) => {
        const db = req.app.get('db')
        const {user_id, folder_id} = req.params
        const kanji2 = await db.read2_kanji([user_id, folder_id])
            res.status(200).send(kanji2)
    }
}