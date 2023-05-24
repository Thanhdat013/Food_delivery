import LoginBgc from '@/assets/img/Login_bgc_2.png'
import Logo from '@/assets/img/logo.png'
import { LoginInput } from '@/components'
import { useState } from 'react'
import { AiOutlineMail, AiFillLock } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { motion } from 'framer-motion'
import { buttonClick } from '@/animations'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'

import { app } from '@/firebase.config'

import { useNavigate } from 'react-router-dom'
import { doLoginAction } from '@/redux/reducers/userReducer'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

const Login = () => {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userConfirmPassword, setUserConfirmPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const dispatch = useDispatch()
  // login with google

  const navigate = useNavigate()
  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider()

  // const [{ user }, dispatch] = useStateValue()
  const loginWithGoogle = async () => {
    await signInWithPopup(firebaseAuth, provider).then((userCred) => {
      navigate('/', { replace: true })
      toast.success('You are login successful')
      const result = userCred.user
      localStorage.setItem('access_token', result.accessToken)
      const user = parseJwt(result.accessToken)
      dispatch(doLoginAction(user))
    })
  }
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  const signUpWithEmailPassword = async () => {
    const isValidEmail = validateEmail(userEmail)
    if (!isValidEmail) {
      toast.error('Please enter a email')
      return
    }
    if (!userPassword) {
      toast.error('Please enter a password')
      return
    }
    if (!userConfirmPassword) {
      toast.error('Please confirm your password')
      return
    }
    if (userPassword !== userConfirmPassword) {
      toast.error('The password is not the same, please try again')
      return
    } else {
      if (userPassword === userConfirmPassword) {
        await createUserWithEmailAndPassword(
          firebaseAuth,
          userEmail,
          userPassword
        ).then((userCred) => {
          setUserEmail('')
          setUserPassword('')
          setUserConfirmPassword('')
          navigate('/', { replace: true })
          toast.success('You are login successful')
          const result = userCred.user
          localStorage.setItem('access_token', result.accessToken)
          const user = parseJwt(result.accessToken)
          dispatch(doLoginAction(user))
        })
      }
    }
  }

  const signInWithEmailPassword = async () => {
    const isValidEmail = validateEmail(userEmail)
    if (!isValidEmail) {
      toast.error('Please enter a email')
      return
    }
    if (!userPassword) {
      toast.error('Please enter a password')
      return
    }
    if (isValidEmail !== '' || userPassword !== '') {
      await signInWithEmailAndPassword(
        firebaseAuth,
        userEmail,
        userPassword
      ).then((userCred) => {
        toast.success('You are login successful')
        setUserEmail('')
        setUserPassword('')
        const result = userCred.user
        localStorage.setItem('access_token', result.accessToken)
        const user = parseJwt(result.accessToken)
        dispatch(doLoginAction(user))
      })
    } else {
      toast.error('An email or password is incorrect, please try again')
    }
  }
  // get user with access token from server
  function parseJwt(token) {
    if (!token) {
      return
    }
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace('-', '+').replace('_', '/')
    return JSON.parse(window.atob(base64))
  }

  return (
    <div className='w-screen h-screen relative overflow-hidden'>
      <img
        src={LoginBgc}
        alt='Login bgc'
        className=' w-full h-full object-cover absolute top-0 left-0'
      />

      {/* content box */}
      <div className='flex flex-col items-center bg-lightOverLay w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12 gap-6'>
        <div
          className='flex items-center justify-center gap-4 w-full cursor-pointer'
          onClick={() => navigate('/', { relative: true })}
        >
          <img src={Logo} className='w-8' alt='logo' />
          <p className='text-xl font-semibold text-headingColor'>City</p>
        </div>
        {/* welcome text */}
        <p className='text-3xl font-semibold text-headingColor'>Welcome Back</p>
        <p className='text-xl text-center -mt-6 '>
          {isSignUp ? 'Sign up' : 'Sign in'} with following
        </p>

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
            icon={<AiFillLock className='text-xl text-textColor' />}
            inputState={userPassword}
            inputStateFunction={setUserPassword}
            type='password'
            isSignUp={isSignUp}
          />

          {isSignUp && (
            <LoginInput
              placeholder='Confirm password'
              icon={<AiFillLock className='text-xl text-textColor' />}
              inputState={userConfirmPassword}
              inputStateFunction={setUserConfirmPassword}
              type='password'
              isSignUp={isSignUp}
            />
          )}

          {!isSignUp ? (
            <p>
              Doesn`t have and account?&nbsp;
              <motion.button
                {...buttonClick}
                className='text-red-500 underline bg-transparent'
                onClick={() => setIsSignUp(true)}
              >
                {' '}
                Sign up
              </motion.button>
            </p>
          ) : (
            <p>
              Already have and account?&nbsp;
              <motion.button
                {...buttonClick}
                className='text-red-500 underline bg-transparent'
                onClick={() => setIsSignUp(false)}
              >
                {' '}
                Sign in
              </motion.button>
            </p>
          )}

          {/* button section */}
          {isSignUp ? (
            <motion.button
              {...buttonClick}
              className='w-full rounded-md  bg-red-500 px-4 py-2 text-white capitalize text-xl hover:bg-red-400 transition-all duration-100'
              onClick={signUpWithEmailPassword}
            >
              Sign Up
            </motion.button>
          ) : (
            <motion.button
              {...buttonClick}
              className='w-full rounded-md  bg-red-500 px-4 py-2 text-white capitalize text-xl hover:bg-red-400 transition-all duration-100'
              onClick={signInWithEmailPassword}
            >
              Sign in
            </motion.button>
          )}

          <div className='flex items-center justify-between gap-16'>
            <div className='w-24 h-[1px] rounded-md bg-white'></div>
            <p className='text-white'>or</p>
            <div className='w-24 h-[1px] rounded-md bg-white'></div>
          </div>

          <motion.button
            {...buttonClick}
            className='w-full flex items-center justify-center px-20 py-2 bg-lightOverLay rounded-3xl'
            onClick={loginWithGoogle}
          >
            <FcGoogle className='text-3xl' />
            <p className='capitalize ml-2 text-base text-headingColor'>
              SignIn with Google
            </p>
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default Login
