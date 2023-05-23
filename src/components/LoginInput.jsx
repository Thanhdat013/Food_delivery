const LoginInput = ({
  placeholder,
  icon,
  inputState,
  inputStateFunction,
  type,
  isSignUp,
}) => {
  return (
    <div
      className={`flex items-center justify-center gap-4 bg-cardOverlays backdrop-blur-md w-full px-4 py-2  `}
    >
      {icon}
      <input
        type={type}
        placeholder={placeholder}
        className='w-full h-full bg-transparent text-headingColor text-md font-medium border-none outline-none  '
        value={inputState}
        onChange={(e) => inputStateFunction(e.target.value)}
      />
    </div>
  )
}

export default LoginInput
