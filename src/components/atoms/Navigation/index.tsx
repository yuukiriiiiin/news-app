import React, {useState} from 'react';

export const Navigation = () => {
  const [isSearch, setIsSearch] = useState(false);
  const toggleDisplayInputArea = () => setIsSearch(!isSearch);
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
          />
        ) : (
          <>
            <li className="px-6">
              <a href="">POPULAR</a>
            </li>
            <li className="px-6">
              <a href="">RECENT</a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
