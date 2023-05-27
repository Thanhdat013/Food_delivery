import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CartContainer from '../CartContainer'
import HomeContainer from './HomeContainer'
import HomeSlider from './HomeSlider'

const MainContainer = () => {
  const foodItems = useSelector((state) => state.foodItems.foodItems)
  const cartShow = useSelector((state) => state.cartItems.cartShow)

  useEffect(() => {}, [cartShow])

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center mt-6 '>
      <HomeContainer />

      <section className='w-full my-6'>
        <div className='w-full flex items-center justify-between'>
          <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-teal-100 to-teal-400 transition-all ease-in-out duration-100'>
            Trái cây tươi
          </p>
        </div>
        <HomeSlider data={foodItems?.filter((n) => n.category === 'fruits')} />
      </section>

      {cartShow && <CartContainer />}
    </div>
  )
}

export default MainContainer
