import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

export type Articles = {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};
export type Category =
  | 'all'
  | 'business'
  | 'entertainment'
  | 'general'
  | 'health'
  | 'science'
  | 'sports'
  | 'technology';

export const categories: Array<Category> = [
  'all',
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology',
];
export const getNews = async () => {
  const {data} = await axios.get(
    `${baseUrl}top-headlines?country=us&apiKey=${apiKey}`
  );
  const articles = await data.articles;
  return articles;
};

export const searchNewsWithWord = async (word: string) => {
  const {data} = await axios.get(
    `${baseUrl}everything?q=${word}&apiKey=${apiKey}`
  );
  const articles = await data.articles;
  return articles;
};

export const searchNewsWithCategory = async (category: Category) => {
  let res;
  if (category === 'all') {
    res = await axios.get(
      `${baseUrl}top-headlines?country=us&apiKey=${apiKey}`
    );
  } else {
    res = await axios.get(
      `${baseUrl}top-headlines?category=${category}&apiKey=${apiKey}`
    );
  }
  const articles = await res.data.articles;
  return articles;
};

// デモ用のメソッド あとで消す
export const compareFetchApi = async () => {
  const resFromAxios = await axios.get(
    `${baseUrl}everything?q=covid-19&apiKey=${apiKey}`
  );
  const resFromFetch = await fetch(
    `${baseUrl}everything?q=covid-19&apiKey=${apiKey}`
  );
  console.log('axios', resFromAxios.data);
  console.log('fetch', await resFromFetch.json());
};
