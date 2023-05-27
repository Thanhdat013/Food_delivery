import { motion } from 'framer-motion'
import { fadeInOut } from '@/animations'

const LoginInput = ({
  placeholder,
  icon,
  inputState,
  inputStateFunction,
  type,
  showHidePassword,
  setShowHidePassword,
  iconPassword,
  handleKeyDown,
}) => {
  return (
    <motion.div
      {...fadeInOut}
      className={`flex items-center justify-center gap-4 bg-cardOverlay backdrop-blur-md w-full px-4 py-2 rounded-md  `}
    >
      {icon}
      <input
        type={type}
        placeholder={placeholder}
        className='w-full h-full bg-transparent text-headingColor text-md font-medium border-none outline-none rounded-md placeholder:text-gray-500 '
        value={inputState}
        onChange={(e) => inputStateFunction(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div
        className='cursor-pointer '
        onClick={() => setShowHidePassword(!showHidePassword)}
      >
        {iconPassword}
      </div>
    </motion.div>
  )
}

export default LoginInput
