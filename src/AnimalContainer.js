import React from 'react';
import Animal from './Animal'
import './AnimalContainer.css'

const AnimalContainer = ({animals}) => {
  const displayAnimals = animals.map(animal => {
    return (
      <Animal 
        img={animal.img}
        name={animal.name}
        species={animal.species}
        description={animal.description}
      />
    )
  })

  return (
    <div className='animal-container'>
      {displayAnimals}
    </div>
  )
}

export default AnimalContainer;