import Axios from 'axios'
import { FormData } from '@/models'

export const getQuote = async (formData: FormData) => {
  try {
    const response = await Axios.post('http://localhost:3000/quote', formData)
    return response.data
  } catch (error) {
    console.error('Error retrieving quote:', error)
    throw error
  }
}