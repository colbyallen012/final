export const getAnimals = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/rescue-animals')
    if (!response.ok) {
      throw new Error('Error retrieving animals. Sorry!')
    }
    const result = await response.json()
    return result
  } catch (error) {
    throw new Error(error.message)
  }
}

export const getDonations = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/donations')
    if (!response.ok) {
      throw new Error('Error retrieving donations. Sorry!')
    }
    const result = await response.json()
    return result
  } catch (error) {
    throw new Error(error.message)
  }
}

export const addNewDonation = async (donation) => {
  const url = 'http://localhost:3001/api/v1/donations/';
  const options = {
      method: 'POST',
      body: JSON.stringify(donation),
      headers: {
        'Content-Type': 'application/json'
      }    
    }
    try {
      const response = await fetch(url, options)
      if (!response.ok) {
        throw new Error('Unable to add donation. Sorry!');
      }
      const donation = await response.json()
      return donation
    } catch (error) {
      throw new Error(error.message)
    }
  }