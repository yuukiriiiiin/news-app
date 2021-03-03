import React from 'react';

export const Card = () => {
  return (
    <section className="w-72 shadow-md">
      <a href="" className="block w-full h-full hover:opacity-80">
        <div>
          <img src="/77292743.jpeg" alt="" />
        </div>
        <div className="flex flex-col px-2 py-4">
          <h1>
            タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
          </h1>
          <time className="mt-4 text-gray-400">2021/2/2</time>
          <cite className="text-gray-400 not-italic">著者</cite>
        </div>
      </a>
    </section>
  );
};
