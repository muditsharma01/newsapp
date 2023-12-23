// reducer.js
const initialState = {
    news: [], // Initialize the 'news' state as an empty array
    favorites: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_FAVORITE':
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      case 'REMOVE_FAVORITE':
        return {
          ...state,
          favorites: state.favorites.filter((article) => article.title !== action.payload),
        };
      case 'SET_NEWS':
        return {
          ...state,
          news: action.payload, // Set the 'news' state with the fetched articles
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  