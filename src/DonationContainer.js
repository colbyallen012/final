import React from 'react';
import Donation from './Donation'
import './DonationContainer.css'

const DonationContainer = ({donations}) => {
  const displayDonations = donations.map(donation => {
    return (
      <Donation 
        name={donation.name}
        donation={donation.donation}
      />
    )
  })

  return (
    <div className='donation-container'>
      {displayDonations}
    </div>
  )
}

export default DonationContainer;