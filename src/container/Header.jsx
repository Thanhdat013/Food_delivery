import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  MdLogout,
  MdOutlineDashboardCustomize,
  MdShoppingBasket,
} from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { buttonClick } from '@/animations'
import Avatar from '@/assets/img/avatar.png'
import Logo from '@/assets/img/logo.png'
import {
  doClearCartAction,
  doShowCartAction,
} from '@/redux/reducers/cartReducer'
import { doLogOutAction } from '@/redux/reducers/userReducer'
import { isActiveStyle, isNotActiveStyle } from '@/utils/style'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const cartItems = useSelector((state) => state.cartItems.cartItems)
  const [isMenu, setIsMenu] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector((state) => state.users.user)
  const isAuthenticated = useSelector((state) => state.users.isAuthenticated)

  const logout = () => {
    dispatch(doLogOutAction())
    dispatch(doClearCartAction())
    setIsMenu(false)
  }

  const showCart = () => {
    dispatch(doShowCartAction())
  }

  return (
    <header className='fixed z-50 w-screen py-3 px-4 md:p-6 md:px-16 bg-primary'>
      {/* desktop & tablet */}
      <div className='hidden lg:flex w-full h-full items-center justify-between'>
        <NavLink to={'/'} className='flex items-center gap-2'>
          <img src={Logo} className='w-20 object-cover' alt='logo' />
          <p className='text-headingColor text-xl font-bold'> Tám</p>
        </NavLink>

        <nav className='flex items-center gap-8'>
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className='flex items-center gap-16 '
          >
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
            >
              Trang chủ
            </NavLink>
            <NavLink
              to={'/about'}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
            >
              Về chúng tôi
            </NavLink>
            <NavLink
              to={'/service'}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
            >
              Dịch vụ
            </NavLink>
          </motion.ul>
          {isAuthenticated && (
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
          )}

          <div className='relative'>
            {!isAuthenticated ? (
              <motion.button
                className='text-lg text-md text-gray-200 bg-red-400 px-2 py-2 rounded-lg shadow-md cursor-pointer hover:bg-red-500 hover:shadow-lg '
                {...buttonClick}
                onClick={() => navigate('/login', { replace: true })}
              >
                Đăng nhập
              </motion.button>
            ) : (
              <motion.img
                whileTap={{ scale: 0.6 }}
                src={user.picture ? user.picture : Avatar}
                className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
                alt='userprofile'
                referrerPolicy='no-referrer'
                onClick={() => setIsMenu(!isMenu)}
              />
            )}
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className='w-44 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0'
              >
                {user && user.email === 'ktd1302@gmail.com' && (
                  <>
                    <Link to={'/dashboard/home'}>
                      <p
                        className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 hover:rounded-t-lg transition-all duration-100 ease-in-out text-textColor text-base'
                        onClick={() => setIsMenu(false)}
                      >
                        <MdOutlineDashboardCustomize /> Trang quản trị
                      </p>
                    </Link>
                    <p
                      className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100  transition-all duration-100 ease-in-out text-textColor text-base'
                      onClick={() => setIsMenu(false)}
                    >
                      <CgProfile /> Hồ sơ
                    </p>
                  </>
                )}

                <p
                  className='m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base'
                  onClick={logout}
                >
                  <MdLogout />
                  Đăng xuất
                </p>
              </motion.div>
            )}
          </div>
        </nav>
      </div>

      {/* mobile */}
      <div className='flex items-center justify-between lg:hidden w-full h-full '>
        {isAuthenticated && (
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
        )}

        <Link to={'/'} className='flex items-center gap-2'>
          <img src={Logo} className='w-8 object-cover' alt='logo' />
          <p className='text-headingColor text-xl font-bold'> City</p>
        </Link>

        <div className='relative'>
          <motion.button
            className='text-md text-gray-200 bg-red-400 px-2 py-2 rounded-lg shadow-md '
            {...buttonClick}
            onClick={() => navigate('/login', { replace: true })}
          >
            Đăng nhập
          </motion.button>

          <motion.img />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className='w-44 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0'
            >
              <ul className='flex flex-col '>
                <NavLink
                  to={'/'}
                  className={({ isActive }) =>
                    isActive ? isActiveStyle : isNotActiveStyle
                  }
                  onClick={() => setIsMenu(false)}
                >
                  Trang chủ
                </NavLink>
                <NavLink
                  to={'/about'}
                  className={({ isActive }) =>
                    isActive ? isActiveStyle : isNotActiveStyle
                  }
                  onClick={() => setIsMenu(false)}
                >
                  Về chúng tôi
                </NavLink>
                <NavLink
                  to={'/service'}
                  className={({ isActive }) =>
                    isActive ? isActiveStyle : isNotActiveStyle
                  }
                  onClick={() => setIsMenu(false)}
                >
                  Dịch vụ
                </NavLink>
              </ul>
              {user && user.email === 'ktd1302@gmail.com' && (
                <>
                  <Link to={'/dashboard'}>
                    <p
                      className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 hover:rounded-t-lg transition-all duration-100 ease-in-out text-textColor text-base'
                      onClick={() => setIsMenu(false)}
                    >
                      <MdOutlineDashboardCustomize /> Trang quản trị
                    </p>
                  </Link>
                </>
              )}
              <p
                className='m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base'
                onClick={logout}
              >
                Đăng xuất <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
