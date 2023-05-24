import { motion } from 'framer-motion'
import { useState } from 'react'
import { MdAdd, MdLogout, MdShoppingBasket } from 'react-icons/md'

import Avatar from '@/assets/img/avatar.png'
import Logo from '@/assets/img/logo.png'
import { doLogOutAction } from '@/redux/reducers/userReducer'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { buttonClick } from '@/animations'
import { doShowCartAction } from '@/redux/reducers/cartReducer'

const Header = () => {
  const navigate = useNavigate()
  const cartItems = useSelector((state) => state.cartItems.cartItems)
  const [isMenu, setIsMenu] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector((state) => state.users.user)
  const isAuthenticated = useSelector((state) => state.users.isAuthenticated)

  const logout = () => {
    dispatch(doLogOutAction())
    setIsMenu(false)
  }

  const showCart = () => {
    dispatch(doShowCartAction())
  }

  return (
    <header className='fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary'>
      {/* desktop & tablet */}
      <div className='hidden md:flex w-full h-full items-center justify-between'>
        <Link to={'/'} className='flex items-center gap-2'>
          <img src={Logo} className='w-8 object-cover' alt='logo' />
          <p className='text-headingColor text-xl font-bold'> City</p>
        </Link>

        <div className='flex items-center gap-8'>
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className='flex items-center gap-8 '
          >
            <li className='text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
              Home
            </li>
            <li className='text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
              Menu
            </li>
            <li className='text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
              About Us
            </li>
            <li className='text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
              Service
            </li>
          </motion.ul>

          <div
            className='relative flex items-center justify-center'
            onClick={showCart}
          >
            <MdShoppingBasket className='text-textColor text-2xl  cursor-pointer' />
            {cartItems && cartItems.length > 0 && (
              <div className=' absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                <p className='text-xs text-white font-semibold'>
                  {cartItems.length}
                </p>
              </div>
            )}
          </div>

          <div className='relative'>
            {!isAuthenticated ? (
              <motion.button
                className='text-lg text-red-400 hover:text-red-500 hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer '
                {...buttonClick}
                onClick={() => navigate('/login')}
              >
                Sign in
              </motion.button>
            ) : (
              <motion.img
                whileTap={{ scale: 0.6 }}
                src={user ? user.picture : Avatar}
                className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
                alt='userprofile'
                onClick={() => setIsMenu(!isMenu)}
              />
            )}
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0'
              >
                {user && user.email === 'ktd1302@gmail.com' && (
                  <Link to={'/createItem'}>
                    <p
                      className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 hover:rounded-t-lg transition-all duration-100 ease-in-out text-textColor text-base'
                      onClick={() => setIsMenu(false)}
                    >
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}

                <p
                  className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 hover:rounded-b-lg  transition-all duration-100 ease-in-out text-textColor text-base'
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className='flex items-center justify-between md:hidden w-full h-full '>
        <div
          className='relative flex items-center justify-center'
          onClick={showCart}
        >
          <MdShoppingBasket className='text-textColor text-2xl  cursor-pointer' />
          {cartItems && cartItems.length > 0 && (
            <div className=' absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
              <p className='text-xs text-white font-semibold'>
                {cartItems.length}
              </p>
            </div>
          )}
        </div>

        <Link to={'/'} className='flex items-center gap-2'>
          <img src={Logo} className='w-8 object-cover' alt='logo' />
          <p className='text-headingColor text-xl font-bold'> City</p>
        </Link>

        <div className='relative'>
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
            alt='userprofile'
            onClick={() => navigate('/login')}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0'
            >
              <ul className='flex flex-col '>
                <li
                  className='text-base text-textColor hover:text-headingColor duration-100 hover:rounded-t-lg  transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'
                  onClick={() => setIsMenu(false)}
                >
                  Home
                </li>
                <li
                  className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'
                  onClick={() => setIsMenu(false)}
                >
                  Menu
                </li>
                <li
                  className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'
                  onClick={() => setIsMenu(false)}
                >
                  About Us
                </li>
                <li
                  className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'
                  onClick={() => setIsMenu(false)}
                >
                  Service
                </li>
              </ul>
              {user && user.email === 'ktd1302@gmail.com' && (
                <Link to={'/createItem'}>
                  <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>
                    New Item <MdAdd />
                  </p>
                </Link>
              )}
              <p
                className='m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base'
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
