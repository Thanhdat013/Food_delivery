import { useNavigate } from 'react-router-dom'
import { AiOutlineFileExcel } from 'react-icons/ai'
const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <div className='w-screen h-screen relative bg-primary'>
      <div className='flex items-center flex-col justify-center w-full h-[70%] py-6 px-6'>
        <div className='flex flex-row items-center'>
          <p className='text-[130px] md:text-[200px] text-gray-600  bg-transparent '>
            404
          </p>
          <AiOutlineFileExcel className='text-[100px] md:text-[150px] text-gray-600 ' />
        </div>
        <p className='text-2xl text-black backdrop-blur-lg bg-transparent flex flex-col items-center gap-4'>
          Page not found
          <span className='text-2xl text-black backdrop-blur-lg'>
            {` Sorry. The page you are looking for does't exist or an other error occurred!`}{' '}
            &nbsp;
          </span>
          <span
            className='text-headingColor hover:text-red-500 cursor-pointer '
            onClick={() => navigate('/')}
          >
            CLick here to back home
          </span>
        </p>
      </div>
    </div>
  )
}

export default ErrorPage
