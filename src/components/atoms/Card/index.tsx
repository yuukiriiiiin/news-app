import React from 'react';
import {Articles} from '../../../libs/axios';

type Props = {
  article: Articles;
};
export const Card: React.VFC<Props> = ({article}) => {
  return (
    <section className="w-72 shadow-md">
      <a href={article.url} className="block w-full h-full hover:opacity-80">
        <div>
          <img src={article.urlToImage} alt="" />
        </div>
        <div className="flex flex-col px-2 py-4">
          <h1>{article.title}</h1>
          <time className="mt-4 text-gray-400">{article.publishedAt}</time>
          <cite className="text-gray-400 not-italic">
            {article.author || 'Anonymous'}
          </cite>
        </div>
      </a>
    </section>
  );
};
