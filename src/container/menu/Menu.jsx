import { categories } from '@/utils/data'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { IoFastFood } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import RowContainer from '../home/RowContainer'
import CartContainer from '../CartContainer'

const Menu = () => {
  const [filter, setFilter] = useState('chicken')
  const foodItems = useSelector((state) => state.foodItems.foodItems)
  const cartShow = useSelector((state) => state.cartItems.cartShow)

  return (
    <section className=' w-full my-12' id='menu'>
      <div className='w-full flex flex-col items-center justify-center'>
        <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-teal-100 to-teal-400 transition-all ease-in-out duration-100 mr-auto'>
          Các món ăn của chúng tôi
        </p>

        <div className='w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none'>
          {categories &&
            categories.map((category) => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                key={category.id}
                className={`group ${
                  filter === category.category ? 'bg-teal-300' : 'bg-card'
                } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-teal-300 `}
                onClick={() => {
                  setFilter(category.category)
                  console.log(category.category)
                }}
              >
                <div
                  className={`w-10 h-10 rounded-full shadow-lg ${
                    filter === category.category ? 'bg-white' : 'bg-teal-300'
                  } group-hover:bg-white flex items-center justify-center`}
                >
                  <IoFastFood
                    className={`${
                      filter === category.category
                        ? 'text-textColor'
                        : 'text-white'
                    } group-hover:text-textColor text-lg`}
                  />
                </div>
                <p
                  className={`text-sm ${
                    filter === category.category
                      ? 'text-white'
                      : 'text-textColor'
                  } group-hover:text-white`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>

        <div className='w-full'>
          <RowContainer
            flag={false}
            data={foodItems?.filter((n) => n.category == filter)}
          />
        </div>
      </div>
      {cartShow && <CartContainer />}
    </section>
  )
}

export default Menu
