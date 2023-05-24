import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import {
  doAddQtyCartAction,
  doRemoveQtyCartAction,
} from '@/redux/reducers/cartReducer'

const CartItem = ({ item, setFlag, flag }) => {
  const dispatch = useDispatch()

  const updateQty = (type, data) => {
    if (type === 'add') {
      setFlag(flag + 1)
      dispatch(doAddQtyCartAction(data))
    } else {
      setFlag(flag + 1)
      dispatch(doRemoveQtyCartAction(data))
    }
  }

  useEffect(() => {}, [flag])

  return (
    <div className='w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2'>
      <img
        src={item?.imageURL}
        className='w-20 h-20 max-w-[60px] rounded-full object-contain'
        alt=''
      />

      {/* name section */}
      <div className='flex flex-col gap-2'>
        <p className='text-base text-gray-50'>{item?.title}</p>
        <p className='text-sm block text-gray-300 font-semibold'>
          {String(parseFloat(item?.price) * item.qty).replace(
            /(.)(?=(\d{3})+$)/g,
            '$1,'
          )}{' '}
          &nbsp; VNĐ
        </p>
      </div>

      {/* button section */}
      <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
        <motion.div whileTap={{ scale: 0.75 }}>
          <BiMinus
            className='text-gray-50 '
            onClick={() => updateQty('remove', item)}
          />
        </motion.div>

        <p className='w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center'>
          {item.qty}
        </p>

        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty('add', item)}
        >
          <BiPlus className='text-gray-50 ' />
        </motion.div>
      </div>
    </div>
  )
}

export default CartItem
