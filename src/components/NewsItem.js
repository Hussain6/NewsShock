import React from 'react';
const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
    <div className='my-3'>
      <div className='card'>
        <img src={imageUrl} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{description}</p>
          <p className='card-text'>
            By {author ? author : 'Unknown'} on {new Date(date).toGMTString()}
          </p>
          <a href={newsUrl} target='_' className='btn btn-sm btn-dark'>
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
