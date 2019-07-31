import React from 'react';
import Animal from '../../Components/Animal/Animal'
import './AnimalContainer.css'

const AnimalContainer = ({animals}) => {
  const displayAnimals = animals.map(animal => {
    return (
      <Animal 
        img={animal.img}
        name={animal.name}
        species={animal.species}
        description={animal.description}
        key={animal.id}
      />
    )
  })

  return (
    <div>
      <h2 className='rec-donations'>Recent Donations</h2>
      <div className='animal-container'>
        {displayAnimals}
      </div>
    </div>
  )
}

export default AnimalContainer;