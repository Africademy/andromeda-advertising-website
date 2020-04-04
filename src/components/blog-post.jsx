import React from "react";

const BlogPost = ({title, content, image, author, dateOfPost, handleModal}) => {
  return (
    <article onClick={e => handleModal(e)} className="blog__posts__post">
      <section className="blog__posts__post__image">
        <img src={image} alt='blogpost' />
      </section>
      <section className="blog__posts__post__details">
        <h1 className='blog__posts__post__details__title'>{title}</h1>
        <p className='blog__posts__post__details__content'>{content}</p>
          <section className='blog__posts__post__details__footer'>
              <p className='blog__posts__post__details__footer__author'>{author}</p>
          </section>
      </section>
    </article>
  );
};

export default BlogPost;
