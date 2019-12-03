// import Rapid from "../components/Rapid";
// const initalState = {
//   japanese: Rapid.get("/kanji/all")
// };
// export const GET_CHARACTERS = "GET_CHARACTERS";

// export const readKanji = () => ({
//   type: GET_CHARACTERS,
//   payload: japanese
// });

// const kanjiCharacters = (state = initalState, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case GET_CHARACTERS_LOADING:
//       return { ...state, loading: true };
//     case GET_CHARACTERS:
//       return {
//         ...state,
//         japanese: payload.data,
//         loading: false
//       };
//     default:
//       return state;
//   }
// };

// export default kanjiCharacters;
