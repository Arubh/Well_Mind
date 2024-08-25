'use client';
import React, { useEffect, useState } from 'react';
import NewsCard from '@/components/newsCard';

const API_KEY="fec15366a25844f8bf372a05a96b734a"
const BASE_URL = `https://newsapi.org/v2/top-headlines?language=en&category=health&pageSize=6&apiKey=${API_KEY}`;

export default function News() {
  const [news, setNews] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchNews = async (page = 1) => {
      setStatus('loading'); 
      try {
        const response = await fetch(`${BASE_URL}&page=${page}`, { cache: "no-store" });
        if (!response.ok) {
          throw new Error('Network response w as not ok');
        }
        const data = await response.json();
        setNews(data.articles);
        setTotalResults(data.totalResults);
        setStatus('succeeded');
      } catch (error) {
        setStatus('failed');
        setError(error.message);
      }
    };

    fetchNews(currentPage);
  }, [currentPage]);

  if (status === 'loading') return <div class="loader"><div class="justify-content-center jimu-primary-loading"></div></div>;
  if (status === 'failed') return <div className='lg:pl-[200px] lg:pr-[400px] px-10'>Please try again later</div>;

  const filteredNews = news.filter(article => article.title !== '[Removed]');

  return (
    <div className="flex flex-col items-center justify-center px-auto mt-10">
      <div>
        {filteredNews.map((news, index) => (
          <div key={index} className="">
            <NewsCard news={news} />
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center mb-10">
        <button
          onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 mr-2 bg-navyBlue text-[white]"
        >
          Previous Page
        </button>
        <span className="mx-2 text-lg bg-navyBlue text-[white]">{currentPage}</span>
        <button
          onClick={() => setCurrentPage(prevPage => (prevPage * 6 >= totalResults ? prevPage : prevPage + 1))}
          disabled={currentPage * 6 >= totalResults}
          className="px-4 py-2 ml-2 bg-navyBlue text-[white]"
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
