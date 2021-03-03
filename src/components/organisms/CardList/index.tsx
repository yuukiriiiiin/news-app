import React from 'react';
import {Card} from '../../atoms/Card';
import {Navigation} from '../../atoms/Navigation';

export const CardList = ({articles}) => {
  return (
    <div className="px-56 py-20">
      <Navigation />
      <ul className="grid gap-16 grid-cols-3">
        {articles.map(article => {
          return (
            <li>
              <Card {...article} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
