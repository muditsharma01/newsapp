import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsCarousel = () => {
  const [news, setNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=0f46a76f595f470687dc01f0476a8990'
        );

        setNews(response.data.articles.slice(0, 3));
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, news.length]);

  return (
    <div className="container mx-auto mt-8 relative">
      <div className="text-left mb-4">
        <h2 className="text-3xl font-semibold text-white">Latest News</h2>
      </div>
      {news.length > 0 && (
        <div className="relative h-60 overflow-hidden">
          <img
            src={news[currentIndex].urlToImage}
            alt={news[currentIndex].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent p-4">
            <h3 className="text-2xl font-semibold mb-2 text-white">{news[currentIndex].title}</h3>
            <p className="text-lg">
              <a
                href={news[currentIndex].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Read More
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsCarousel;
