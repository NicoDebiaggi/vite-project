import Axios from 'axios'

export const getCarMakers = async (filterStr?: string) => {
  try {
    if (filterStr) {
      const response = await Axios.get(
        `http://localhost:3000/carMakers?filter=${filterStr}`
      )
      return response.data
    } else {
      const response = await Axios.get('http://localhost:3000/carMakers')
      return response.data
    }
  } catch (error) {
    console.error('Error retrieving car maker data:', error)
    throw error
  }
}
