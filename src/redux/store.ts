import { configureStore } from '@reduxjs/toolkit'
import { carMakersReducer, quoteReducer } from './slices'

export const store = configureStore({
  reducer: {
    carMakersSlice: carMakersReducer,
    quoteSlice: quoteReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch