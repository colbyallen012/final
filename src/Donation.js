import React from 'react';
import './Donation.css'

const Donation = ({name, donation}) => {
  return (
    <div className='donation'>
      <h2>{name}</h2>
      <p>Donation Amount: {donation}</p>
    </div>
  )
}

export default Donation;