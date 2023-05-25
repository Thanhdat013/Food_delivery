import { buttonClick } from '@/animations'
import { motion } from 'framer-motion'
import { SiShopee, SiGrab } from 'react-icons/si'
import { BsFacebook, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center w-screen bg-footerBgc py-4 px-4  gap-4'>
      <div></div>
      <div className='w-full flex items-center justify-center gap-12'>
        <motion.div
          {...buttonClick}
          className='flex items-center w-8 h-8 rounded-full bg-transparent shadow-md backdrop-blur-sm '
        >
          <BsFacebook className='w-full h-full cursor-pointer text-blue-500 ' />
        </motion.div>
        <motion.div
          {...buttonClick}
          className='flex items-center w-8 h-8 rounded-full bg-transparent shadow-md backdrop-blur-sm '
        >
          <BsInstagram className='w-8 h-8 cursor-pointer text-orange-500 ' />
        </motion.div>
        <motion.div
          {...buttonClick}
          className='flex items-center w-8 h-8 rounded-full bg-transparent shadow-md backdrop-blur-sm '
        >
          <SiShopee className='w-full h-full cursor-pointer text-red-400 ' />
        </motion.div>
        <motion.div
          {...buttonClick}
          className='flex items-center w-8 h-8 rounded-full bg-transparent shadow-md backdrop-blur-sm '
        >
          <SiGrab className='w-full h-full cursor-pointer text-green-500 ' />
        </motion.div>
      </div>
      <div className='w-full flex justify-center items-center text-headingColor text-base'>
        Copyright © 2023. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
