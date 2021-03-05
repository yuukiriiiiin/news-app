import React from 'react';
import {Articles} from '../../../libs/axios';
import {Card} from '../../atoms/Card';

type Props = {
  articles: Array<Articles>;
};
export const CardList: React.VFC<Props> = ({articles}) => {
  return (
    <section>
      <ul className="flex flex-wrap gap-6">
        {articles.map(article => (
          <li key={article.url}>
            <Card article={article} />
          </li>
        ))}
      </ul>
    </section>
  );
};
