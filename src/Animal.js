import React from 'react';
import './Animal.css'

const Animal = ({img, name, species, description}) => {
  return (
    <div className='animal'>
      <img className='animal-img'src={img}/>
      <h2>{name}</h2>
      <p>{species}</p>
      <p>{description}</p>
    </div>
  )
}

export default Animal;
