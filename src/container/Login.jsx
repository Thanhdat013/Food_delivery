import LoginBgc from '@/assets/img/Login_bgc_2.png'
import Logo from '@/assets/img/logo.png'
import { LoginInput } from '@/components'
import { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'

import { motion } from 'framer-motion'

const Login = () => {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userConfirmPassword, setUserConfirmPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)

  return (
    <div className='w-screen h-screen relative overflow-hidden'>
      <img
        src={LoginBgc}
        alt='Login bgc'
        className='w-full h-full object-cover absolute top-0 left-0'
      />

      {/* content box */}
      <div className='flex flex-col items-center bg-cardOverlay w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12 gap-6'>
        <div className='flex items-center justify-start gap-4 w-full'>
          <img src={Logo} className='w-8' alt='logo' />
        </div>
        {/* welcome text */}
        <p className='text-3xl font-semibold text-headingColor'>Welcome Back</p>
        <p className='text-xl text-center -mt-6 '>Sign with following</p>
        {/* input section */}
        <div className='w-full  flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4'>
          <LoginInput
            placeholder='Enter email'
            icon={<AiOutlineMail className='text-xl text-textColor' />}
            inputState={userEmail}
            inputStateFunction={setUserEmail}
            type='email'
            isSignUp={isSignUp}
          />
          <LoginInput
            placeholder='Enter password'
            icon={<AiOutlineMail className='text-xl text-textColor' />}
            inputState={userPassword}
            inputStateFunction={setUserPassword}
            type='password'
            isSignUp={isSignUp}
          />

          {isSignUp && (
            <LoginInput
              placeholder='Confirm password'
              icon={<AiOutlineMail className='text-xl text-textColor' />}
              inputState={userConfirmPassword}
              inputStateFunction={setUserConfirmPassword}
              type='password'
              isSignUp={isSignUp}
            />
          )}
        </div>

        {!isSignUp ? (
          <p>
            Doesn`t have and account?
            <motion.button whileTap={{ scale: 0.8 }}>Sign up</motion.button>
          </p>
        ) : (
          <p>Already have and account?</p>
        )}
      </div>
    </div>
  )
}

export default Login
