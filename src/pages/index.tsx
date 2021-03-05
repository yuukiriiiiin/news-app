import React, {useState} from 'react';
import {Navigation} from '../components/atoms/Navigation';
import {Layout} from '../components/layouts';
import {CardList} from '../components/organisms/CardList';
import {
  Articles,
  Category,
  compareFetchApi,
  getNews,
  searchNewsWithCategory,
  searchNewsWithWord,
} from '../libs/axios';

export async function getServerSideProps() {
  const initialArticles = await getNews();

  return {
    props: {initialArticles},
  };
}

type Props = {
  initialArticles: Array<Articles>;
};
const app: React.VFC<Props> = ({initialArticles}) => {
  const [articles, setArticles] = useState<Array<Articles>>(initialArticles);

  //   compareFetchApi();

  const handleSearchWithWord = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.value === '') return;
    const articles = await searchNewsWithWord(e.target.value);
    setArticles(articles);
  };

  const handleSerachWithCategory = async (category: Category) => {
    const articles = await searchNewsWithCategory(category);
    setArticles(articles);
  };

  return (
    <Layout>
      <Navigation
        handleSearchWithWord={handleSearchWithWord}
        handleSerachWithCategory={handleSerachWithCategory}
      />
      <CardList articles={articles} />
    </Layout>
  );
};

export default app;
