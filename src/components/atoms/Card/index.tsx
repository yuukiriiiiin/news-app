import React from 'react';

// export type Props = {
//   author: string;
//   title: string;
//   publishedAt: string;
//   urlToImage: string;
//   url: string;
//   description: string;
// };

export const Card = ({
  author,
  title,
  publishedAt,
  urlToImage,
  url,
  description,
}) => {
  const formattedPublishedAt = publishedAt.slice(0, 10).replace(/-/g, '/');
  const formattedTitle = title.length < 90 ? title : `${title.slice(0, 90)}...`;
  return (
    <section className="shadow-md">
      <a href={url} className="block w-full h-full hover:opacity-80">
        <div className="w-full h-48">
          <img
            className="w-full h-full object-cover"
            src={urlToImage}
            alt={description}
          />
        </div>
        <div className="flex flex-col px-2 py-4 h-48">
          <h1>{formattedTitle}</h1>
          <div className="mt-auto">
            <time className="text-gray-400">{formattedPublishedAt}</time>
            <cite className="block text-gray-400 not-italic">{author}</cite>
          </div>
        </div>
      </a>
    </section>
  );
};
