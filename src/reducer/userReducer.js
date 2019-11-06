const initalState = {
    user: null

}

export const SET_USER = 'SETE_USER';

const guest = (state = initalState, action) => {
    const {type, payload} = action
    switch(type){
        case SET_USER:
            return {
                ...state,
                user:payload
            }
        default:
            return state
    }
}

export default guest