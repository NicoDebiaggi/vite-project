import { CarMaker } from '@/models'

export const adaptCarMakers = (carMakers: CarMaker[]): CarMaker[] => {
  return carMakers.map(carMaker => {
    return {
      id: carMaker.id,
      name: carMaker.name,
      CarModels: carMaker.CarModels.map(carModel => {
        return {
          id: carModel.id,
          name: carModel.name,
          makerId: carModel.makerId,
          createdAt: carModel.createdAt,
          updatedAt: carModel.updatedAt
        }
      })
    }
  })
}
