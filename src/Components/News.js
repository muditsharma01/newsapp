// 'News.js'
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addFavorite, removeFavorite, setNews } from '../Redux/actions';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewsCarousel from './NewsCarousel';


const News = ({ news, favorites, addFavorite, removeFavorite, setNews }) => {
  useEffect(() => {
    // Function to fetch news data
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=0f46a76f595f470687dc01f0476a8990`
        );

        // Set the fetched news articles to state using the Redux action
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    // Call the fetchNews function
    fetchNews();
  }, [setNews]); // Add 'setNews' as a dependency

  // Function to toggle favorite status
  const toggleFavorite = (articleTitle) => {
    if (favorites.includes(articleTitle)) {
      // Remove from favorites using the Redux action
      removeFavorite(articleTitle);

      // Log the updated favorites after removal
      console.log('Removed from favorites. Updated Favorites:', favorites);

      toast.error('Removed from favorites', { position: 'top-right' });
    } else {
      // Check if the article is already in favorites
      const isAlreadyFavorite = favorites.includes(articleTitle);

      if (!isAlreadyFavorite) {
        // Add to favorites using the Redux action
        addFavorite(articleTitle);

        // Log the updated favorites after addition
        console.log('Added to favorites. Updated Favorites:', [...favorites, articleTitle]);

        toast.success('Added to favorites', { position: 'top-right' });
      } else {
        // Log that the article is already in favorites
        console.log('Article is already in favorites');

        // Display a toast message indicating that the article is already a favorite
        toast.warning('Article is already in favorites', { position: 'top-right' });
      }
    }
  };

  // Function to check if an article is a favorite
  const isFavorite = (articleTitle) => favorites.some((title) => title === articleTitle);

  return (
    <>
    <NewsCarousel/>
    <div className="mt-16 py-8 space-y-8">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {news.map((article) => (
          <div key={article.title} className="rounded-lg shadow-md hover:shadow-xl transition duration-300 bg-white">
            <img
              className="w-full h-48 object-cover rounded-t-lg"
              src={article.urlToImage || 'https://via.placeholder.com/300'}
              alt={article.title}
            />
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-700">{article.title}</h3>
              <p className="text-gray-600 line-clamp-2">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-500 hover:underline"
              >
                Read More
                <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                </svg>
              </a>
              {/* Add heart icon for favorite */}
              <button
                onClick={() => toggleFavorite(article.title)}
                className={`inline-flex items-center text-red-500 ${isFavorite(article.title) ? 'fill-current' : 'stroke-current'}`}
              >
                ❤️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

// Map Redux state to component props
const mapStateToProps = (state) => ({
  favorites: state.favorites,
  // Ensure 'news' is initialized in the state
  news: state.news || [],
});


// Map Redux actions to component props
const mapDispatchToProps = (dispatch) => ({
  addFavorite: (article) => dispatch(addFavorite(article)),
  removeFavorite: (articleTitle) => dispatch(removeFavorite(articleTitle)),
  setNews: (news) => dispatch(setNews(news)),
});

// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(News);
