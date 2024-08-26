import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Quote } from '@/models'

interface QuoteState {
  weeklyPrice: number | null
}

const quoteInitialState: QuoteState = {
  weeklyPrice: null
}

export const quoteSlite = createSlice({
  name: 'quoteSlice',
  initialState: quoteInitialState,
  reducers: {
    setQuote: (state, action: PayloadAction<Quote>) => {
      state.weeklyPrice = action.payload.weeklyPrice
    }
  }
})

export const { setQuote } = quoteSlite.actions
export default quoteSlite.reducer