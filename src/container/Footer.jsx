import { buttonClick } from '@/animations'
import { motion } from 'framer-motion'
import { SiShopee, SiGrab } from 'react-icons/si'
import { BsFacebook, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center w-screen bg-footerBgc py-4 px-4  gap-6'>
      <div></div>
      <div className='w-full flex items-center justify-center gap-12'>
        <motion.div
          {...buttonClick}
          className='flex items-center w-8 h-8 rounded-full bg-transparent shadow-md backdrop-blur-sm '
        >
          <BsFacebook className='w-full h-full cursor-pointer text-blue-500 hover:text-blue-600' />
        </motion.div>
        <motion.div
          {...buttonClick}
          className='flex items-center w-8 h-8 rounded-full bg-transparent shadow-md backdrop-blur-sm '
        >
          <BsInstagram className='w-8 h-8 cursor-pointer text-orange-500 hover:text-orange-600 ' />
        </motion.div>
        <motion.div
          {...buttonClick}
          className='flex items-center w-8 h-8 rounded-full bg-transparent shadow-md backdrop-blur-sm '
        >
          <SiShopee className='w-full h-full cursor-pointer text-red-400  hover:text-red-500' />
        </motion.div>
        <motion.div
          {...buttonClick}
          className='flex items-center w-8 h-8 rounded-full bg-transparent shadow-md backdrop-blur-sm '
        >
          <SiGrab className='w-full h-full cursor-pointer text-green-500 hover:text-green-600' />
        </motion.div>
      </div>
      <div className='w-full flex justify-center items-center capitalize text-headingColor text-base'>
        Bản quyền © 2023. Đã được đăng ký bản quyền.
      </div>
    </footer>
  )
}

export default Footer
