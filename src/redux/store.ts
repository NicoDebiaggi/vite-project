import { configureStore } from '@reduxjs/toolkit'
import { carMakersReducer, formDataReducer, quoteReducer } from './slices'

export const store = configureStore({
  reducer: {
    carMakersSlice: carMakersReducer,
    quoteSlice: quoteReducer,
    formDataSlice: formDataReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch