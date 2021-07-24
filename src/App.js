import React from 'react';
import PropTypes from 'prop-types';

function Man({name, image, rating}) {
  return (
    <div>
      <h2>I like {name} </h2>
      <h4>{rating} / 5.0</h4>
      <img src={image} alt={name} />
    </div>
    
  );
}

Man.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};


const styleILike = [
  {
    id:1,
    name: "BaekHyun",
    image: "http://file2.instiz.net/data/cached_img/upload/2017/07/11/10/f56732a0c38c41793e0258286029a60f.png"
    ,rating: 5
  },
  {
    id:2,
    name: "JungHoon",
    image: "http://img.tf.co.kr/article/home/2017/07/28/201739191501225002.jpg"
    ,rating: 4.5
  },
  {
    id:3,
    name: "JooHyuk",
    image: "https://image.fmkorea.com/files/attach/new/20170703/486616/688838428/700584212/a1ce235fe3a14504bd0138a8f55236df.jpg"
    ,rating: 4.0
  }
];


function App() {
  return (
   <div>
     {styleILike.map(man => (
       <Man key={man.id} 
            name={man.name} 
            image={man.image}
            rating={man.rating} />
     ))}
   </div>
  );
}

export default App;
