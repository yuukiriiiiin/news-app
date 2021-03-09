import react, {useState} from 'react';
import {CardList} from '../components/organisms/CardList';
import fetch from 'node-fetch';

const app = ({articles}) => {
  const [news, setNews] = useState(articles);
  const handleFetchArticlesFilteredByKeyWord = async e => {
    const articles = await fetchArticlesFilteredByKeyWord(e.target.value);
    setNews(articles);
  };
  const handleFetchArticlesFilteredByCategory = async e => {
    const articles = await fetchArticlesFilteredByCategory(e.target.value);
    setNews(articles);
  };
  return (
    <CardList
      articles={news}
      fetchArticlesFilteredByKeyWord={handleFetchArticlesFilteredByKeyWord}
      fetchArticlesFilteredByCategory={handleFetchArticlesFilteredByCategory}
    />
  );
};

export async function getStaticProps() {
  const articles = await fetchAllArticles();
  return {
    props: {
      articles,
    },
  };
}

const fetchAllArticles = async () => {
  const reqUrl =
    'https://newsapi.org/v2/top-headlines?country=jp&apiKey=5bca862df05e40a0881c20d316c5ae73';

  const res = await fetch(reqUrl);
  const posts = await res.json();
  const articles = posts.articles;
  return articles;
};

const fetchArticlesFilteredByKeyWord = async key => {
  const reqUrl = `https://newsapi.org/v2/top-headlines?country=jp&q=${key}&apiKey=5bca862df05e40a0881c20d316c5ae73`;

  const res = await fetch(reqUrl);
  const posts = await res.json();
  const articles = posts.articles;
  return articles;
};

const fetchArticlesFilteredByCategory = async category => {
  const reqUrl = `https://newsapi.org/v2/top-headlines?country=jp&category=${category}&apiKey=5bca862df05e40a0881c20d316c5ae73`;

  const res = await fetch(reqUrl);
  const posts = await res.json();
  const articles = posts.articles;
  return articles;
};

export default app;
