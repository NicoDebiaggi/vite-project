import { Quote } from '@/models'

export const adaptQuote = (quote: Quote): Quote => {
  return {
    weeklyPrice: quote.weeklyPrice
  }
}
