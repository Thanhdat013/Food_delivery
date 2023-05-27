import { staggerFadeInOut } from '@/animations'
import Delivery from '@/assets/img/delivery.png'
import HeroTealBg from '@/assets/img/heroTealBg.png'
import { heroData } from '@/utils/data'
import { motion } from 'framer-motion'

const HomeContainer = () => {
  return (
    <section
      className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full '
      id='home'
    >
      <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
        <div className='flex items-center gap-2 justify-center   bg-gradient-to-br from-teal-200 to-blue-300 px-4 py-1 rounded-full'>
          <p className='text-base text-teal-500 font-semibold capitalize'>
            miễn phí giao hàng
          </p>
          <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
            <img
              src={Delivery}
              className='w-full h-full object-contain'
              alt='delivery'
            />
          </div>
        </div>

        <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor'>
          Yêu Là Phải Nói, Đói Là&nbsp;
          <span className=' text-teal-400 text-[3rem] lg:text-[5rem]'>
            Phải Ăn
          </span>
        </p>

        <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
          <span className='text-teal-500'>Tám </span> là nhà hàng đầu tư chỉn
          chu về chất lượng và dịch vụ. Nó được trang trí bằng những đồ vật quen
          thuộc với cuộc sống đời thường của người việt như ngói, tre,sen,… Mỗi
          góc phòng đều trang trí tỉ mỉ và mang lại không gian như nhà. Bạn có
          thể thưởng thức hơn 200 món ăn tại đây.
        </p>

        <button
          type='button'
          className='bg-gradient-to-br from-teal-300 to-blue-400 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'
        >
          Đặt món ngay
        </button>
      </div>
      <div className='py-2 flex-1 flex items-center relative'>
        <img
          src={HeroTealBg}
          className='ml-auto h-420 w-[80%] lg:w-auto lg:h-650'
          alt='hero-bg'
        />

        <div className='xl:w-[80%]  w-full lg:h-full h-[85%] absolute top-0 left-0 flex items-center justify-center lg:px-4  py-4 gap-4 flex-wrap'>
          {heroData &&
            heroData.map((item, index) => (
              <motion.div
                {...staggerFadeInOut(index)}
                key={item.id}
                className=' 2xl:w-225  lg:w-190 w-150 lg:h-auto h-[160px] p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'
              >
                <img
                  src={item.imageSrc}
                  className='w-20 lg:w-40 -mt-10 lg:-mt-20 '
                  alt='I1'
                />
                <p className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>
                  {item.name}
                </p>

                <p className='text-[12px] lg:text-sm text-lighttextGray font-semibold text-center my-1 lg:my-3'>
                  {item.decp}
                </p>

                <p className='text-sm font-semibold text-headingColor'>
                  {String(item.price).replace(/(.)(?=(\d{3})+$)/g, '$1,')}{' '}
                  &nbsp;
                  <span className='text-xs text-red-600'>VNĐ</span>
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default HomeContainer
