import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({ country , pageSize, category , apiKey, mode }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // 🔹 Fetch initial data on mount or when category/country changes
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`
        );
        const data = await response.json();
        setArticles(data.articles || []);
        setTotalResults(data.totalResults || 0);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, country]); // re-fetch if category or country changes

  // 🔹 Fetch more data for infinite scroll
  const fetchMoreData = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    setLoading(true);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${nextPage}&pageSize=${pageSize}`
      );
      const data = await response.json();
      setArticles((prevArticles) => prevArticles.concat(data.articles || []));
      setTotalResults(data.totalResults || totalResults);
    } catch (error) {
      console.error("Error fetching more data", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "40px 0px", marginTop: "90px" }}>
        NewsRa - Top Headlines
      </h1>

      {/* Show spinner only while first page is loading */}
      {loading && page === 1 && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={loading && <Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title || ""}
                  description={element.description || ""}
                  urlToImage={element.urlToImage}
                  url={element.url}
                  mode={mode}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

// 🔹 Default Props
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

// 🔹 Prop Types
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
};

export default News;
