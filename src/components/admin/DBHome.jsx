import { CChart } from '@coreui/react-chartjs'
import { useSelector } from 'react-redux'

const DBHome = () => {
  const foodItems = useSelector((state) => state.foodItems.foodItems)
  const chicken = foodItems?.filter((c) => c.category === 'chicken')
  const curry = foodItems?.filter((c) => c.category === 'curry')
  const rice = foodItems?.filter((c) => c.category === 'rice')
  const fish = foodItems?.filter((c) => c.category === 'fish')
  const fruits = foodItems?.filter((c) => c.category === 'fruits')
  const icecreams = foodItems?.filter((c) => c.category === 'icecreams')
  const drinks = foodItems?.filter((c) => c.category === 'drinks')
  return (
    <div className='flex items-center justify-center flex-col pt-16 w-full'>
      <div className='grid w-full grid-cols-1 md:grid-cols-2 gap-4 h-full'>
        <div className='w-full h-full flex items-center justify-center'>
          <div className='w-340 md:w-508'>
            <CChart
              type='bar'
              data={{
                labels: [
                  'chicken',
                  'curry',
                  'rice',
                  'fish',
                  'fruits',
                  'icecreams',
                  'drinks',
                ],
                datasets: [
                  {
                    label: 'Category wise Count',
                    backgroundColor: '#F9D949',
                    data: [
                      chicken.length,
                      curry.length,
                      rice.length,
                      fish.length,
                      fruits.length,
                      icecreams.length,
                      drinks.length,
                    ],
                  },
                ],
              }}
              labels='Category'
            />
          </div>
        </div>
        <div className='w-full h-full flex items-center justify-center'>
          <div className='w-275 md:w-460'>
            <CChart
              type='doughnut'
              data={{
                labels: ['Orders', 'Delivered', 'Cancelled'],
                datasets: [
                  {
                    backgroundColor: ['#F9D949', '#19A7CE', '#F15A59'],
                    data: [540, 920, 80],
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DBHome
