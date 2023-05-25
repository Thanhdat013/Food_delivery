import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { useSelector } from 'react-redux'
import CartContainer from '../CartContainer'
import HomeContainer from './HomeContainer'
import MenuContainer from './MenuContainer'
import RowContainer from './RowContainer'

const MainContainer = () => {
  const foodItems = useSelector((state) => state.foodItems.foodItems)
  const cartShow = useSelector((state) => state.cartItems.cartShow)
  const [scrollValue, setScrollValue] = useState(0)

  useEffect(() => {}, [scrollValue, cartShow])

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center mt-6 '>
      <HomeContainer />

      <section className='w-full my-6'>
        <div className='w-full flex items-center justify-between'>
          <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100'>
            Our fresh & healthy fruits
          </p>

          <div className='hidden md:flex gap-3 items-center'>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center'
              onClick={() => setScrollValue((prev) => prev - 200)}
            >
              <MdChevronLeft className='text-lg text-white' />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center'
              onClick={() => setScrollValue((prev) => prev + 200)}
            >
              <MdChevronRight className='text-lg text-white' />
            </motion.div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter((n) => n.category === 'fruits')}
        />
      </section>

      <MenuContainer />

      {cartShow && <CartContainer />}
    </div>
  )
}

export default MainContainer
