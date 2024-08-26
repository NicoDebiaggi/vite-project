export interface FormData {
  firstName: string
  lastName: string
  driverAge: number | null
  drivingExperience: number | null
  carMaker: number | null
  carModel: number | null
}

export interface FormErrors {
  firstName: string | undefined
  lastName: string | undefined
  driverAge: string | undefined
  drivingExperience: string | undefined
  carMaker: string | undefined
  carModel: string | undefined
}

export interface Quote {
  weeklyPrice: number
}