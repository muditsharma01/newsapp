import React from 'react';
import { connect } from 'react-redux';
import { FaHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Utility function to check if an article is a favorite
const isFavorite = (favorites, articleTitle) => favorites.includes(articleTitle);

const FavoriteArticles = ({ favorites, allNews, toggleFavorite }) => {
  // Filter the news articles based on favorites
  const favoriteArticles = allNews.filter((article) => isFavorite(favorites, article.title));

  return (
    <div className="container mx-auto mt-16">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Favorite Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {favoriteArticles.map((article) => (
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
                className={`inline-flex items-center text-red-500 ${isFavorite(favorites, article.title) ? 'fill-current' : 'stroke-current'}`}
              >
                ❤️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Map Redux state to component props
const mapStateToProps = (state) => ({
  favorites: state.favorites,
  // Ensure 'news' is initialized in the state
  allNews: state.news || [],
});

// Connect the component to the Redux store
export default connect(mapStateToProps)(FavoriteArticles);
