import { fadeInOutDelay } from '@/animations'
import NotFound from '@/assets/img/NotFound.svg'
import { motion } from 'framer-motion'
import { MdShoppingBasket } from 'react-icons/md'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { doAddCartItemsAction } from '../../redux/reducers/cartReducer'

const RowContainer = ({ flag, data }) => {
  const isAuthenticated = useSelector((state) => state.users.isAuthenticated)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const addToCart = (data) => {
    if (!isAuthenticated) {
      navigate('/login', { replace: true })
    } else {
      dispatch(doAddCartItemsAction(data))
    }
  }

  //
  return (
    <motion.div
      className={`w-full flex items-center gap-3 cursor-pointer  md:my-12 my-4 scroll-smooth  
      ${
        flag
          ? 'overflow-x-scroll scrollbar-none'
          : 'overflow-x-hidden flex-wrap justify-center'
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item, index) => (
          <motion.div
            {...fadeInOutDelay}
            key={index}
            className='w-275 h-[200px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-6 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'
          >
            <div className='w-full flex items-center justify-between'>
              <motion.div
                className='w-40 h-40 -mt-8 drop-shadow-2xl'
                whileHover={{ scale: 1.2 }}
              >
                <img
                  src={item?.imageURL}
                  alt=''
                  className='w-full h-full object-contain'
                />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.75 }}
                className='w-8 h-8 rounded-full bg-teal-400 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8'
                onClick={() => addToCart(item)}
              >
                <MdShoppingBasket className='text-white' />
              </motion.div>
            </div>

            <div className='w-full flex flex-col items-end justify-end -mt-10 mb-2'>
              <p className='text-textColor font-semibold text-base md:text-lg mt-5'>
                {item?.title}
              </p>

              <div className='flex mt-1 items-center gap-8'>
                <p className='text-lg text-headingColor font-semibold'>
                  {String(item?.price).replace(/(.)(?=(\d{3})+$)/g, '$1,')}
                  <span className='text-sm text-red-500'>&nbsp;VNĐ </span>
                </p>
              </div>
            </div>
          </motion.div>
        ))
      ) : (
        <div className='w-full flex flex-col items-center justify-center'>
          <img src={NotFound} className='h-340' />
          <p className='text-xl text-headingColor font-semibold my-2'>
            Items Not Available
          </p>
        </div>
      )}
    </motion.div>
  )
}

export default RowContainer
