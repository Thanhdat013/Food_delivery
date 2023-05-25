import Logo from '@/assets/img/logo.png'
import { isActiveStyle, isNotActiveStyle } from '@/utils/style'
import { NavLink } from 'react-router-dom'

const DBLeftSection = () => {
  return (
    <div className='h-full  py-6 flex flex-col item bg-lightOverLay shadow-md min-w-225 backdrop-blur-md w-275 gap-3 '>
      <NavLink to={'/'} className='flex items-center gap-4 px-6'>
        <img src={Logo} className='w-8 object-cover' alt='logo' />
        <p className='text-headingColor text-xl font-bold'> City</p>
      </NavLink>
      <hr />
      <ul className=' flex items-start flex-col gap-10 px-6 mt-6'>
        <NavLink
          to={'home'}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyle} px-2 py-2 border-l-4 border-red-500`
              : isNotActiveStyle
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to={'order'}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyle} px-2 py-2 border-l-4 border-red-500`
              : isNotActiveStyle
          }
        >
          Order
        </NavLink>
        <NavLink
          to={'items'}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyle} px-2 py-2 border-l-4 border-red-500`
              : isNotActiveStyle
          }
        >
          Items
        </NavLink>
        <NavLink
          to={'createItem'}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyle} px-2 py-2 border-l-4 border-red-500`
              : isNotActiveStyle
          }
        >
          Add New Item
        </NavLink>
        <NavLink
          to={'users'}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyle} px-2 py-2 border-l-4 border-red-500`
              : isNotActiveStyle
          }
        >
          Users
        </NavLink>
      </ul>
      <div className='w-full items-center justify-center flex  h-225 mt-auto px-4'>
        <div className='w-full h-full rounded-md bg-red-400 flex flex-col gap-2 items-center justify-center px-2'>
          <div className='w-12 h-12 border rounded-full bg-white flex items-center justify-center cursor-pointer'>
            <p className='text-2xl font-bold text-red-400'>?</p>
          </div>
          <p className='text-xl text-primary font-semibold'>Help center</p>
          <p className='text-base text-center text-primary font-semibold'>
            Having trouble in city. Please contact us for more questions
          </p>
          <p className='px-4 py-2 bg-white text-red-400 rounded-full cursor-pointer'>
            Get in touch
          </p>
        </div>
      </div>
    </div>
  )
}

export default DBLeftSection
