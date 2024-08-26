import { adaptQuote } from '@/adapters'
import { getQuote } from '@/services'
import { setQuote } from '@/redux/slices'
import { FormData } from '@/models'
import { useAppDispatch, useAppSelector } from './useRedux.hook'

export const useGetQuote = (formData: FormData) => {
  const quote = useAppSelector((state) => state.quoteSlice.weeklyPrice)
  const dispatch = useAppDispatch() 

  const fetchQuote = async () => {
    try {
      const response = await getQuote(formData)
      const adaptedQuote = adaptQuote(response)
      if (adaptedQuote.weeklyPrice !== quote) {
        dispatch(setQuote(adaptedQuote))
      }
    } catch (error) {
      console.error('Error fetching quote:', error)
    }
  }
  return fetchQuote
}
