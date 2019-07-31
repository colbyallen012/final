import React from 'react';
import Donation from '../../Components/Donation/Donation'
import './DonationContainer.css'

const DonationContainer = ({donations}) => {
  const displayDonations = donations.map(donation => {
    return (
      <Donation 
        name={donation.name}
        donation={donation.donation}
        key={donation.id}
      />
    )
  })

  return (
    <div>
      <h2 className='rec-donations'>Recent Donations</h2>
    <div className='donation-container'>
      {displayDonations}
    </div>
    </div>
  )
}

export default DonationContainer;