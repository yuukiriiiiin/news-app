import React, {useState} from 'react';

export const Navigation = ({
  fetchArticlesFilteredByKeyWord,
  fetchArticlesFilteredByCategory,
}) => {
  const [isSearch, setIsSearch] = useState(false);
  const toggleDisplayInputArea = () => setIsSearch(!isSearch);

  const categories = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ];
  return (
    <nav>
      <ul className="flex py-10">
        <button
          onClick={toggleDisplayInputArea}
          className="block px-6 focus:outline-none"
        >
          探す
        </button>
        {isSearch ? (
          <input
            className="border border-solid border-gray-600 outline-none mx-6"
            type="text"
            name="hoge"
            onChange={fetchArticlesFilteredByKeyWord}
          />
        ) : (
          <>
            {categories.map(category => {
              return (
                <li className="px-6">
                  <button
                    onClick={fetchArticlesFilteredByCategory}
                    value={category}
                  >
                    {category.toUpperCase()}
                  </button>
                </li>
              );
            })}
          </>
        )}
      </ul>
    </nav>
  );
};
