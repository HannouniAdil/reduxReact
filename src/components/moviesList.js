import React from 'react';

const MoviesList = (props) => {
  console.log(props);
  const renderMovies = (movies) => (
    movies ?
    movies.map((item, key) => (
      <div key={key}>
        { item.name }
      </div>
    )):null
  ) 


  return (
    <div>
      {renderMovies(props.data.movies)}
    </div>
  );
};

export default MoviesList;