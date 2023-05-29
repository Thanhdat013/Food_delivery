import { CChart } from '@coreui/react-chartjs'
import { useSelector } from 'react-redux'

const DBHome = () => {
  const foodItems = useSelector((state) => state.foodItems.foodItems)
  const chicken = foodItems?.filter((c) => c.category === 'chicken')
  const pizza = foodItems?.filter((c) => c.category === 'pizza')
  const rice = foodItems?.filter((c) => c.category === 'rice')
  const fish = foodItems?.filter((c) => c.category === 'fish')
  const fruits = foodItems?.filter((c) => c.category === 'fruits')
  const icecreams = foodItems?.filter((c) => c.category === 'icecreams')
  const drinks = foodItems?.filter((c) => c.category === 'drinks')
  return (
    <div className='flex items-center justify-center flex-col pt-16 w-full'>
      <div className='grid w-full grid-cols-1 lg:grid-cols-2 gap-4 h-full'>
        <div className='w-full h-full flex flex-col gap-4 items-center justify-center'>
          <div className='w-340 md:w-508'>
            <CChart
              type='bar'
              data={{
                labels: [
                  'Gà',
                  'Pizza',
                  'Cơm',
                  'Hải sản',
                  'Trái cây',
                  'Tráng miệng',
                  'Đồ uống',
                ],
                datasets: [
                  {
                    label: 'Số lượng theo danh mục',
                    backgroundColor: '#F9D949',
                    data: [
                      chicken.length,
                      pizza.length,
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
          <p className='py-4 text-xl text-headingColor flex items-center text-center'>
            Danh mục sản phẩm
          </p>
        </div>
        <div className='w-full h-full flex flex-col items-center justify-center'>
          <div className='w-275 md:w-460'>
            <CChart
              type='pie'
              data={{
                labels: ['Tại bàn', 'Đã giao', 'Đã hủy'],
                datasets: [
                  {
                    backgroundColor: ['#F9D949', '#19A7CE', '#F15A59'],
                    data: [540, 920, 80],
                  },
                ],
              }}
            />
          </div>
          <p className='py-4 text-xl text-headingColor flex items-center text-center'>
            Số lượng đơn hàng
          </p>
        </div>
      </div>
    </div>
  )
}

export default DBHome
