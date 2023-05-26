import { isActiveStyle, isNotActiveStyle } from '@/utils/style'
import { BiUser } from 'react-icons/bi'
import {
  MdAddCircleOutline,
  MdLogout,
  MdOutlineFastfood,
  MdOutlineLogout,
  MdOutlineProductionQuantityLimits,
  MdSearch,
} from 'react-icons/md'
import { SiSimpleanalytics } from 'react-icons/si'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '@/assets/img/Logo_Tam.png'
import { buttonClick } from '@/animations'
import Avatar from '@/assets/img/avatar.png'
import { doClearCartAction } from '@/redux/reducers/cartReducer'
import { doLogOutAction } from '@/redux/reducers/userReducer'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { BsBellFill, BsToggles2 } from 'react-icons/bs'
import { NavLink, useNavigate } from 'react-router-dom'
const DBHeader = () => {
  const user = useSelector((state) => state.users.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logout = () => {
    dispatch(doLogOutAction())
    dispatch(doClearCartAction())
    navigate('/', { replace: true })
  }

  const [isMenu, setIsMenu] = useState(false)
  return (
    <div className='  flex items-center justify-between gap-3  '>
      <NavLink to={'/'} className='flex items-center gap-4 px-6'>
        <img src={Logo} className='w-16 object-cover' alt='logo' />
      </NavLink>
      <p className=' hidden lg:flex text-2xl text-headingColor'>
        Chào mừng đến Tám
        {user?.email && (
          <span className='block text-sm lg:text-base text-gray-600'>{`Xin chào ${user.email}...!`}</span>
        )}
      </p>
      <div className='flex  items-center justify-center gap-4'>
        <div className='flex  items-center justify-center gap-2 min-w-[300px] px-4 py-2 bg-lightOverLay backdrop-blur-md rounded-md shadow-md bg-white'>
          <MdSearch className='text-2xl text-gray-600 cursor-pointer' />
          <input
            className='w-full h-full bg-transparent text-headingColor text-md font-medium border-none outline-none rounded-md'
            type='text'
            placeholder='Tìm kiếm ở đây..'
          />
          <BsToggles2 className='text-2xl text-gray-600 cursor-pointer' />
        </div>

        <motion.div
          className='w-10 h-10 cursor-pointer bg-lightOverLay backdrop-blur-md rounded-md shadow-md flex items-center justify-center'
          {...buttonClick}
        >
          <BsBellFill className='text-xl text-gray-600' />
        </motion.div>
        <div className=' flex items-center justify-center gap-2'>
          <div className='w-10 h-10 hidden md:flex rounded-md  shadow-md cursor-pointer overflow-hidden'>
            <motion.img
              {...buttonClick}
              src={user.picture ? user.picture : Avatar}
              className='w-full h-full cursor-pointer rounded-md '
              alt='userprofile'
              referrerPolicy='no-referrer'
              onClick={() => setIsMenu(!isMenu)}
            />

            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className='w-48 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-28 right-6 z-50'
              >
                <ul className='flex flex-col  '>
                  <NavLink
                    to={'home'}
                    className={({ isActive }) =>
                      isActive ? `${isActiveStyle} ` : isNotActiveStyle
                    }
                  >
                    <p
                      className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 hover:rounded-t-lg transition-all duration-100 ease-in-out text-base rounded-t-lg'
                      onClick={() => setIsMenu(false)}
                    >
                      <SiSimpleanalytics /> Số liệu
                    </p>
                  </NavLink>
                  <NavLink
                    to={'order'}
                    className={({ isActive }) =>
                      isActive ? `${isActiveStyle} ` : isNotActiveStyle
                    }
                  >
                    <p
                      className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 hover:rounded-t-lg transition-all duration-100 ease-in-out  text-base'
                      onClick={() => setIsMenu(false)}
                    >
                      <MdOutlineProductionQuantityLimits />
                      Đơn hàng
                    </p>
                  </NavLink>

                  <NavLink
                    to={'items'}
                    className={({ isActive }) =>
                      isActive ? `${isActiveStyle} ` : isNotActiveStyle
                    }
                  >
                    <p
                      className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 hover:rounded-t-lg transition-all duration-100 ease-in-out  text-base'
                      onClick={() => setIsMenu(false)}
                    >
                      <MdOutlineFastfood /> Sản phẩm
                    </p>
                  </NavLink>
                  <NavLink
                    to={'createItem'}
                    className={({ isActive }) =>
                      isActive ? `${isActiveStyle} ` : isNotActiveStyle
                    }
                  >
                    <p
                      className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 hover:rounded-t-lg transition-all duration-100 ease-in-out  text-base'
                      onClick={() => setIsMenu(false)}
                    >
                      <MdAddCircleOutline /> Thêm sản phẩm
                    </p>
                  </NavLink>
                  <NavLink
                    to={'users'}
                    className={({ isActive }) =>
                      isActive ? `${isActiveStyle} ` : isNotActiveStyle
                    }
                  >
                    <p
                      className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 hover:rounded-t-lg transition-all duration-100 ease-in-out  text-base'
                      onClick={() => setIsMenu(false)}
                    >
                      <BiUser /> Người dùng
                    </p>
                  </NavLink>
                </ul>

                <p
                  className='m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-300 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base'
                  onClick={logout}
                >
                  Đăng Xuất <MdOutlineLogout />
                </p>
              </motion.div>
            )}
          </div>
          <motion.div
            className='w-10 h-10 hidden lg:flex cursor-pointer bg-lightOverLay backdrop-blur-md rounded-md shadow-md flex items-center justify-center'
            {...buttonClick}
            onClick={logout}
          >
            <MdLogout className=' text-xl text-gray-600' />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default DBHeader
