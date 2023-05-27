import LoginBgc from '@/assets/img/Login_bgc_2.png'
import Logo from '@/assets/img/Logo_Tam.png'
import { LoginInput } from '@/components'
import { useState } from 'react'
import {
  AiOutlineMail,
  AiFillLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from 'react-icons/ai'
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
  const [showHidePassword, setShowHidePassword] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider()
  const loginWithGoogle = async () => {
    await signInWithPopup(firebaseAuth, provider)
      .then((userCred) => {
        navigate('/', { replace: true })
        toast.success('Bạn đã đăng nhập thành công')
        const result = userCred.user
        localStorage.setItem('access_token', result.accessToken)
        const user = parseJwt(result.accessToken)
        dispatch(doLoginAction(user))
      })
      .catch(() => {
        toast.error('Đã có lỗi xảy ra, vui lòng thử lại')
      })
  }
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
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

  const signUpWithEmailPassword = async () => {
    const isValidEmail = validateEmail(userEmail)
    if (!isValidEmail) {
      toast.error('Vui lòng nhập email')
      return
    }
    if (!userPassword) {
      toast.error('Vui lòng nhập mật khẩu của bạn')
      return
    }
    if (!userConfirmPassword) {
      toast.error('Vui lòng xác nhận mật khẩu của bạn')
      return
    }
    if (userPassword !== userConfirmPassword) {
      toast.error('Mật khẩu không trùng nhau, vui lòng thử lại')
      return
    } else {
      if (userPassword === userConfirmPassword) {
        await createUserWithEmailAndPassword(
          firebaseAuth,
          userEmail,
          userPassword
        )
          .then((userCred) => {
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
          .catch(() => {
            toast.error('Đã có lỗi xảy ra, vui lòng thử lại')
          })
      }
    }
  }

  const signInWithEmailPassword = async () => {
    const isValidEmail = validateEmail(userEmail)
    if (!isValidEmail) {
      toast.error('Vui lòng nhập email của bạn')
      return
    }
    if (!userPassword) {
      toast.error('Vui lòng nhập mật khẩu của bạn')
      return
    }
    if (isValidEmail !== '' || userPassword !== '') {
      await signInWithEmailAndPassword(firebaseAuth, userEmail, userPassword)
        .then((userCred) => {
          console.log(userCred)
          toast.success('Bạn đã đăng nhập thành công')
          setUserEmail('')
          setUserPassword('')
          navigate('/', { replace: true })
          const result = userCred.user
          localStorage.setItem('access_token', result.accessToken)
          const user = parseJwt(result.accessToken)
          dispatch(doLoginAction(user))
        })
        .catch(() => {
          toast.error('Email hoặc mật khẩu không chính xác, vui lòng thử lại')
        })
    }
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (isSignUp) {
        signUpWithEmailPassword()
      } else {
        signInWithEmailPassword()
      }
    }
  }

  return (
    <div className='w-screen h-screen relative overflow-hidden'>
      <img
        src={LoginBgc}
        alt='Login bgc'
        className=' w-full h-full object-cover absolute top-0 left-0'
      />

      {/* content box */}
      <div className='flex flex-col items-center bg-lightOverLay w-full md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12 gap-6'>
        <div
          className='flex items-center justify-center gap-4 w-full cursor-pointer'
          onClick={() => navigate('/', { relative: true })}
        >
          <img src={Logo} className='w-16' alt='logo' />
          {/* <p className='text-xl font-semibold text-headingColor'>City</p> */}
        </div>
        {/* welcome text */}
        <p className='text-3xl font-semibold text-headingColor'>
          Chào mừng bạn quay lại
        </p>
        <p className='text-xl text-center -mt-6 '>
          {isSignUp ? 'Đăng ký' : 'Đăng nhập'} với các cách sau
        </p>

        {/* input section */}
        <div className='w-full  flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4'>
          <LoginInput
            placeholder='Nhập email'
            icon={<AiOutlineMail className='text-xl text-textColor' />}
            inputState={userEmail}
            inputStateFunction={setUserEmail}
            type='email'
            isSignUp={isSignUp}
            handleKeyDown={handleKeyDown}
          />
          <LoginInput
            placeholder='Nhập mật khẩu'
            icon={<AiFillLock className='text-xl text-textColor' />}
            inputState={userPassword}
            inputStateFunction={setUserPassword}
            type={showHidePassword ? 'text' : 'password'}
            isSignUp={isSignUp}
            handleKeyDown={handleKeyDown}
            showHidePassword={showHidePassword}
            setShowHidePassword={setShowHidePassword}
            iconPassword={
              showHidePassword ? (
                <AiOutlineEye className='text-xl text-textColor' />
              ) : (
                <AiOutlineEyeInvisible className='text-xl text-textColor' />
              )
            }
          />

          {isSignUp && (
            <LoginInput
              placeholder='Xác nhận mật khẩu'
              icon={<AiFillLock className='text-xl text-textColor' />}
              inputState={userConfirmPassword}
              inputStateFunction={setUserConfirmPassword}
              type={showHidePassword ? 'text' : 'password'}
              isSignUp={isSignUp}
              handleKeyDown={handleKeyDown}
              showHidePassword={showHidePassword}
              setShowHidePassword={setShowHidePassword}
              iconPassword={
                showHidePassword ? (
                  <AiOutlineEye className='text-xl text-textColor' />
                ) : (
                  <AiOutlineEyeInvisible className='text-xl text-textColor' />
                )
              }
            />
          )}

          {!isSignUp ? (
            <p>
              Bạn chưa có tài khoản?&nbsp;
              <motion.button
                {...buttonClick}
                className='text-red-500 underline bg-transparent'
                onClick={() => setIsSignUp(true)}
              >
                {' '}
                Đăng ký
              </motion.button>
            </p>
          ) : (
            <p>
              Bạn đã có tài khoản?&nbsp;
              <motion.button
                {...buttonClick}
                className='text-red-500 underline bg-transparent'
                onClick={() => setIsSignUp(false)}
              >
                {' '}
                Đăng nhập
              </motion.button>
            </p>
          )}

          {/* button section */}
          {isSignUp ? (
            <motion.button
              {...buttonClick}
              className='w-full rounded-2xl  bg-red-500 px-4 py-2 text-white capitalize text-xl hover:bg-red-400 transition-all duration-100'
              onClick={signUpWithEmailPassword}
            >
              Đăng ký
            </motion.button>
          ) : (
            <motion.button
              {...buttonClick}
              className='w-full rounded-2xl  bg-red-500 px-4 py-2 text-white capitalize text-lg hover:bg-red-400 transition-all duration-100'
              onClick={signInWithEmailPassword}
            >
              Đăng nhập
            </motion.button>
          )}

          <div className='flex items-center justify-between gap-16'>
            <div className='w-24 h-[1px] rounded-md bg-white'></div>
            <p className='text-white'>hoặc</p>
            <div className='w-24 h-[1px] rounded-md bg-white'></div>
          </div>

          <motion.button
            {...buttonClick}
            className='w-full flex items-center justify-center md:px-20 py-2 bg-lightOverLay rounded-2xl'
            onClick={loginWithGoogle}
          >
            <FcGoogle className='text-3xl' />
            <p className='capitalize ml-2 text-base text-headingColor'>
              Đăng nhập với Google
            </p>
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default Login
