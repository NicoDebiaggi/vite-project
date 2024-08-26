export type CarModel = {
  id: number
  name: string
  makerId: number
  createdAt: Date
  updatedAt: Date
}

export type CarMaker = {
  id: number
  name: string
  CarModels: CarModel[]
}