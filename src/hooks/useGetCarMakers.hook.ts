import { getCarMakers } from '@/services'
import { adaptCarMakers } from '@/adapters'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './useRedux.hook'
import { setCarMakers } from '@/redux/slices'

export const useGetCarMakers = () => {
  const carMakers = useAppSelector((state) => state.carMakersSlice.carMakers)
  const dispatch = useAppDispatch() 

  const fetchCarMakers = async (filterStr?: string) => {
    try {
      const response = await getCarMakers(filterStr)
      const adaptedCarMakers = adaptCarMakers(response)
      if (adaptedCarMakers !== carMakers) {
        dispatch(setCarMakers(adaptedCarMakers))
      }
    } catch (error) {
      console.error('Error fetching car makers:', error)
    }
  }
  useEffect(() => {
    fetchCarMakers()
  }, [])

  return {
    refresh: fetchCarMakers
  }
}
