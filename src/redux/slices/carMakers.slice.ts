import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CarMaker } from '@/models'

interface CarMakersState {
  carMakers: CarMaker[]
}

const carMakersInitialState: CarMakersState = {
  carMakers: []
}

export const carMakersSlice = createSlice({
  name: 'carMakersSlice',
  initialState: carMakersInitialState,
  reducers: {
    setCarMakers: (state, action: PayloadAction<CarMaker[]>) => {
      state.carMakers = action.payload
    }
  }
})

export const { setCarMakers } = carMakersSlice.actions
export default carMakersSlice.reducer
