import react from 'react';
import {CardList} from '../components/organisms/CardList';
import fetch from 'node-fetch';

const app = ({articles}) => {
  return <CardList articles={articles} />;
};

export async function getStaticProps() {
  const reqUrl =
    'http://newsapi.org/v2/everything?q=tesla&from=2021-02-03&sortBy=publishedAt&apiKey=5bca862df05e40a0881c20d316c5ae73';

  const res = await fetch(reqUrl);
  const posts = await res.json();
  const articles = posts.articles;
  return {
    props: {
      articles,
    },
  };
}

export default app;
