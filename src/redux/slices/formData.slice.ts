import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { FormData, FormErrors } from '@/models'

interface FormDataState {
  formData: FormData
  formErrors: FormErrors
}

const formDataInitialState: FormDataState = {
  formData: {
    firstName: '',
    lastName: '',
    driverAge: null,
    drivingExperience: null,
    carMaker: null,
    carModel: null
  },
  formErrors: {
    firstName: undefined,
    lastName: undefined,
    driverAge: undefined,
    drivingExperience: undefined,
    carMaker: undefined,
    carModel: undefined
  }
}

export const formDataSlice = createSlice({
  name: 'formDataSlice',
  initialState: formDataInitialState,
  reducers: {
    setFormData: (state, action: PayloadAction<FormData>) => {
      state.formData = action.payload
    },
    setFormErrors: (state, action: PayloadAction<FormErrors>) => {
      state.formErrors = action.payload
    }
  }
})

export const { setFormData, setFormErrors } = formDataSlice.actions
export default formDataSlice.reducer
