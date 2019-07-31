export const getAnimals = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/rescue-animals')
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error.message)
  }
}

export const getDonations = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/donations')
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
  }
}