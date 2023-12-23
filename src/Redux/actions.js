// actions.js
export const addFavorite = (article) => ({
    type: 'ADD_FAVORITE',
    payload: article,
  });
  
  export const removeFavorite = (articleTitle) => ({
    type: 'REMOVE_FAVORITE',
    payload: articleTitle,
  });
  
  export const setNews = (news) => ({
    type: 'SET_NEWS',
    payload: news,
  });
  