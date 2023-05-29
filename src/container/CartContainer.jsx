import { useEffect, useState } from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { RiRefreshFill } from 'react-icons/ri'

import EmptyCart from '@/assets/img/emptyCart.svg'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { buttonClick } from '@/animations'
import {
  doClearCartAction,
  doShowCartAction,
} from '@/redux/reducers/cartReducer'
import CartItem from './CartItem'

const CartContainer = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cartItems.cartItems)
  const isAuthenticated = useSelector((state) => state.users.isAuthenticated)

  const [flag, setFlag] = useState(1)
  const [tot, setTot] = useState(0)
  const [priceDelivery, setPriceDelivery] = useState(15000)
  const showCart = () => {
    dispatch(doShowCartAction())
  }

  useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.qty * item.price
    }, 0)
    if (totalPrice > 150000) setPriceDelivery(0)
    setTot(totalPrice)
  }, [tot, flag, cartItems, priceDelivery])
  const clickPayMent = () => {
    dispatch(doClearCartAction())
  }
  const clearCart = () => {
    dispatch(doClearCartAction())
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className='fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101] '
    >
      <div className='w-full flex items-center justify-between p-4 cursor-pointer'>
        <motion.div whileTap={{ scale: 0.75 }} onClick={showCart}>
          <MdOutlineKeyboardBackspace className='text-textColor text-3xl' />
        </motion.div>
        <p className='text-textColor text-lg font-semibold'>Giỏ hàng</p>

        <motion.p
          whileTap={{ scale: 0.75 }}
          className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base'
          onClick={clearCart}
        >
          Xóa <RiRefreshFill />
        </motion.p>
      </div>

      {/* bottom section */}
      {cartItems && cartItems.length > 0 ? (
        <div className='w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col'>
          {/* cart Items section */}
          <div className='w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
            {/* cart Item */}
            {cartItems &&
              cartItems.length > 0 &&
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  setFlag={setFlag}
                  flag={flag}
                />
              ))}
          </div>

          {/* cart total section */}
          <div className='w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2'>
            <div className='w-full flex items-center justify-between'>
              <p className='text-gray-400 text-lg'>Giá tiền</p>
              <p className='text-gray-400 text-lg'>
                {String(parseFloat(tot)).replace(/(.)(?=(\d{3})+$)/g, '$1,')}{' '}
                &nbsp; VNĐ
              </p>
            </div>
            <div className='w-full flex items-center justify-between'>
              <p className='text-gray-400 text-lg'>Vận chuyển</p>
              <p className='text-gray-400 text-lg'>
                {String(parseFloat(priceDelivery)).replace(
                  /(.)(?=(\d{3})+$)/g,
                  '$1,'
                )}{' '}
                &nbsp; VNĐ
              </p>
            </div>

            <div className='w-full border-b border-gray-600 my-2'></div>

            <div className='w-full flex items-center justify-between'>
              <p className='text-gray-200 text-xl font-semibold'>
                Tổng giá tiền
              </p>
              <p className='text-gray-200 text-xl font-semibold'>
                {String(parseFloat(tot) + priceDelivery).replace(
                  /(.)(?=(\d{3})+$)/g,
                  '$1,'
                )}{' '}
                &nbsp; VNĐ
              </p>
            </div>

            {isAuthenticated ? (
              <motion.button
                {...buttonClick}
                type='button'
                className='w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg'
                onClick={clickPayMent}
              >
                Thanh toán
              </motion.button>
            ) : (
              <motion.button
                {...buttonClick}
                type='button'
                className='w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg'
              >
                Đăng nhập để thanh toán
              </motion.button>
            )}
          </div>
        </div>
      ) : (
        <div className='w-full h-full flex flex-col items-center justify-center gap-6 px-4'>
          <img src={EmptyCart} className='w-300' alt='' />
          <p className='text-xl text-textColor text-center font-semibold'>
            Thêm một vài sản phẩm vào giỏ hàng của bạn
          </p>
        </div>
      )}
    </motion.div>
  )
}

export default CartContainer
