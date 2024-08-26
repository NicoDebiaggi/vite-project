import { useState } from 'react'
import { useAppSelector, useGetCarMakers, useGetQuote } from '@/hooks'
import {
  FormField,
  Form,
  Input,
  Button,
  FormGroup,
  FormSelect,
  DropdownProps
} from 'semantic-ui-react'
import { FormData, FormErrors } from '@/models'

// move the form data and errors into redux
export const QuoteForm = () => {
  const carMakers = useAppSelector(state => state.carMakersSlice.carMakers)
  useGetCarMakers()
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    age: null,
    drivingExperience: null,
    carMaker: null,
    carModel: null
  })
  const [formErrors, setFormErrors] = useState<FormErrors>({
    firstName: undefined,
    lastName: undefined,
    age: undefined,
    drivingExperience: undefined,
    carMaker: undefined,
    carModel: undefined
  })
  const fetchQuote = useGetQuote(formData)

  const handleSend = () => {
    // validate if all fields are filled
    const errors = {
      firstName: formData.firstName === '' ? 'First name is required' : undefined,
      lastName: formData.lastName === '' ? 'Last name is required' : undefined,
      age: formData.age === null ? 'Age is required' : undefined,
      drivingExperience: formData.drivingExperience === null ? 'Driving Experience is required' : undefined,
      carMaker: formData.carMaker === null ? 'Car Maker is required' : undefined,
      carModel: formData.carModel === null ? 'Car Model is required' : undefined
    }
    setFormErrors(errors)
    if (Object.values(errors).some(error => error)) {
      return
    } else {
      fetchQuote()
    }
  }

  return (
    <Form className='w-1/2 min-w-60'>
      <FormField
        id='form-input-control-first-name'
        control={Input}
        label='First name'
        placeholder='First name'
        error={formErrors.firstName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
      />
      <FormField
        id='form-input-control-last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
        error={formErrors.lastName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormData({ ...formData, lastName: e.target.value })
        }
      />
      <FormField
        id='form-input-control-age'
        control={Input}
        type='number'
        label='Age'
        placeholder='Age'
        min={18}
        max={100}
        error={formErrors.age}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormData({ ...formData, age: Number(e.target) })
        }
      />
      <FormField
        id='form-input-control-driving-experience'
        control={Input}
        type='number'
        label='Driving Experience (years)'
        placeholder='Driving Experience'
        min={0}
        max={50}
        error={formErrors.drivingExperience}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormData({ ...formData, drivingExperience: Number(e.target) })
        }
      />
      <FormGroup widths='equal'>
        <FormSelect
          fluid
          label='Car Maker'
          options={carMakers.map(carMaker => ({
            key: carMaker.id,
            text: carMaker.name,
            value: carMaker.id
          }))}
          placeholder='Car Maker'
          error={formErrors.carMaker}
          onChange={(_e: unknown, data: DropdownProps) =>
            setFormData({ ...formData, carMaker: data.value as number })
          }
        />
        <FormSelect
          fluid
          label='Car Model'
          disabled={formData.carMaker === null}
          options={
            carMakers
              .find(carMaker => carMaker.id === formData.carMaker)
              ?.CarModels.map(carModel => ({
                key: carModel.id,
                text: carModel.name,
                value: carModel.id
              })) as { key: number; text: string; value: number }[]
          }
          placeholder='Car Model'
          error={formErrors.carModel}
          onChange={(_e: unknown, data: DropdownProps) =>
            setFormData({ ...formData, carModel: data.value as number })
          }
        />
      </FormGroup>
      <FormField
        id='form-button-control-public'
        control={Button}
        content='Send'
        label='Calculate Quote'
        onClick={handleSend}
      />
    </Form>
  )
}
