import { QuoteForm } from '@/components'
import { useAppSelector } from '@/hooks'

export const HomePage = () => {
  const quote = useAppSelector((state) => state.quoteSlice.weeklyPrice)
  return (
    <div className='p-4 flex justify-center items-center flex-col'>
      <div className='flex justify-between mb-16 gap-6 flex-wrap'>
        <h1 className='text-4xl font-bold mb-4'>Welcome to Quashed!</h1>
        <p className='text-lg text-gray-600'>
          We are your trusted insurance quote calculator. Get instant quotes for
          all your insurance needs.
        </p>
      </div>
      <QuoteForm />
      {quote && (
        <div className='mt-8'>
          <h2 className='text-2xl font-bold'>Your Quote</h2>
          <p className='text-lg'>Weekly Price: {quote}</p>
        </div>
      )}
    </div>
  )
}
