import Logo from '@/assets/img/Logo_Tam.png'
import { isActiveStyle, isNotActiveStyle } from '@/utils/style'
import { NavLink } from 'react-router-dom'

const DBLeftSection = () => {
  return (
    <div className='h-full hidden lg:flex   py-6 flex flex-col item bg-lightOverLay shadow-md min-w-225 backdrop-blur-md w-275 gap-3 '>
      <NavLink to={'/'} className='flex items-center gap-4 px-6'>
        <img src={Logo} className='w-16 object-cover' alt='logo' />
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
          Số liệu
        </NavLink>
        <NavLink
          to={'order'}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyle} px-2 py-2 border-l-4 border-red-500`
              : isNotActiveStyle
          }
        >
          Đơn hàng
        </NavLink>
        <NavLink
          to={'items'}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyle} px-2 py-2 border-l-4 border-red-500`
              : isNotActiveStyle
          }
        >
          Sản phẩm
        </NavLink>
        <NavLink
          to={'createItem'}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyle} px-2 py-2 border-l-4 border-red-500`
              : isNotActiveStyle
          }
        >
          Thêm mới sản phẩm
        </NavLink>
        <NavLink
          to={'users'}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyle} px-2 py-2 border-l-4 border-red-500`
              : isNotActiveStyle
          }
        >
          Người dùng
        </NavLink>
      </ul>
      <div className='w-full items-center justify-center flex  h-225 mt-auto px-4'>
        <div className='w-full h-full rounded-md bg-gradient-to-br from-teal-200 to-blue-300 flex flex-col gap-2 items-center justify-center px-2'>
          <div className='w-12 h-12 border rounded-full bg-white flex items-center justify-center cursor-pointer'>
            <p className='text-2xl font-bold text-teal-400'>?</p>
          </div>
          <p className='text-xl text-headingColor font-semibold'>Trợ giúp</p>
          <p className='text-base text-center headingColor font-semibold'>
            Gặp khó khăn trong Tám. Vui lòng liên hệ với chúng tôi để biết thêm
            chi tiết.
          </p>
          <p className='px-4 py-2 bg-white text-teal-500 rounded-full cursor-pointer'>
            Liên hệ
          </p>
        </div>
      </div>
    </div>
  )
}

export default DBLeftSection
