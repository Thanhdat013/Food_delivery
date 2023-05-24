import { useDispatch, useSelector } from 'react-redux'
import { MdSearch, MdLogout } from 'react-icons/md'
import { BsToggles2, BsBellFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { buttonClick } from '@/animations'
import { doLogOutAction } from '@/redux/reducers/userReducer'
import { doClearCartAction } from '@/redux/reducers/cartReducer'
import Avatar from '@/assets/img/avatar.png'
const DbHeader = () => {
  const user = useSelector((state) => state.users.user)
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(doLogOutAction())
    dispatch(doClearCartAction())
  }
  return (
    <div className='w-full  flex items-center justify-between gap-3 px-4'>
      <p className=' text-2xl text-headingColor'>
        Welcome to City
        {user?.name && (
          <span className='block text-base text-gray-600'>{`Hello ${user.name}...!`}</span>
        )}
      </p>
      <div className='flex items-center justify-center gap-4'>
        <div className='flex items-center justify-center gap-2 px-4 py-2 bg-lightOverLay backdrop-blur-md rounded-md shadow-md'>
          <MdSearch className='text-2xl text-gray-600 cursor-pointer' />
          <input
            className='w-full h-full bg-transparent text-headingColor text-md font-medium border-none outline-none rounded-md'
            type='text'
            placeholder='Search here..'
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
          <div className='w-10 h-10 rounded-full shadow-md cursor-pointer overflow-hidden'>
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user.picture ? user.picture : Avatar}
              className='w-full h-full cursor-pointer rounded-full'
              alt='userprofile'
              referrerPolicy='no-referrer'
            />
          </div>
          <motion.div
            className='w-10 h-10 cursor-pointer bg-lightOverLay backdrop-blur-md rounded-md shadow-md flex items-center justify-center'
            {...buttonClick}
            onClick={logout}
          >
            <MdLogout className='text-xl text-gray-600' />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default DbHeader
