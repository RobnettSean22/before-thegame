const initalState = {
    japanese: null
}
export const GET_CHARACTERS = 'GET_CHARACTERS'

export const readKanji = charcters => ({
    type: GET_CHARACTERS,
    payload: charcters
})

const kanjiCharacters = (state = initalState, action) => {
    const {type, payload} = action
    switch(type){
        case GET_CHARACTERS:
            return{
                ...state,
                japanese:payload
            }
        default:
            return state;
    }
}

export default kanjiCharacters

