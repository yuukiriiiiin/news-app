import React from 'react';
import {categories, Category} from '../../../libs/axios';

type Props = {
  handleSearchWithWord: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => Promise<void>;
  handleSerachWithCategory: (category: Category | 'all') => void;
};
export const Navigation: React.VFC<Props> = ({
  handleSearchWithWord,
  handleSerachWithCategory,
}) => {
  return (
    <nav>
      <div>
        <input type="text" onChange={handleSearchWithWord} />
      </div>
      <ul className="flex gap-2">
        {categories.map(category => (
          <li key={category}>
            <button
              className="py-2 px-4"
              type="button"
              onClick={() => handleSerachWithCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
