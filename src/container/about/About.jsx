import CEO from '@/assets/img/CEO.png'
import Leader from '@/assets/img/Leader.png'
import ServiceBg from '@/assets/img/serviceBg.png'
import Chef from '@/assets/img/chef.png'

import { motion } from 'framer-motion'
import CartContainer from '../CartContainer'
import { useSelector } from 'react-redux'

const About = () => {
  const cartShow = useSelector((state) => state.cartItems.cartShow)
  return (
    <section className='w-full h-auto flex flex-col mb-4'>
      <div className='w-full absolute left-0 lg:h-420 h-[300px]'>
        <img
          src={ServiceBg}
          alt='Service-bg'
          className='w-full h-full absolute left-0 right-0 '
        />
        <div className='absolute flex flex-col gap-6 items-center justify-center  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
          <p className=' text-teal-400 text-3xl font-semibold text-center'>
            Ẩn sâu bên trong nhà hàng Tám là giấc mơ sáng tạo ra một nơi để lan
            tỏa nụ cười khắp thế giới
          </p>
          <p className='text-white font-thin text-base text-center lg:flex hidden'>
            Thương hiệu và biểu tượng của chúng tôi thể hiện mong ước: Luôn luôn
            đem đến những trải nghiệm phong phú để giúp cho mỗi vị khách khi
            bước vào thế giới của chúng tôi sẽ gặt hái được những điều thú vị và
            tích cực. Đó là những trải nghiệm ẩm thực làm cho trái tim phải nhảy
            múa và lây lan những năng lượng tích cực. Và chúng tôi mong sao mỗi
            thực khách khi ra về đều có cảm nhận tích cực dù chỉ là một chút
            thôi.
          </p>
        </div>
      </div>
      <div className='w-full flex flex-col gap-6 lg:mt-[440px] mt-[310px]'>
        <div className='w-full  bg-cardOverlay rounded-lg py-2 px-4  my-8 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
          <div className='w-full flex flex-col md:flex-row items-center justify-between gap-6'>
            <motion.div
              className='w-40 h-40 -mt-8 drop-shadow-2xl'
              whileHover={{ scale: 1.2 }}
            >
              <img
                src={CEO}
                alt='CEO'
                className='w-full h-full object-contain'
              />
            </motion.div>

            <div className='w-full flex flex-col '>
              <div className='flex flex-col gap-1 '>
                <p className='text-textColor font-thin text-base md:text-lg '>
                  {`Ý tưởng của chúng tôi "Hòa Bình" có nghĩa là sống hạnh phúc
                  và sống tích cực trong sự an nhiên.`}
                </p>
                <p className='text-textColor font-thin text-base md:text-lg '>
                  {`    Sứ mệnh của chúng tôi là chúng tôi đứng vững và làm việc hàng
                  ngày để đạt được tầm nhìn này "Mang lại WOW, Chia sẻ hạnh
                  phúc".`}
                </p>
                <p className='text-textColor font-thin text-base md:text-lg '>
                  Bằng cách chia sẻ sự hạnh phúc đó với nhiều người, chúng tôi
                  tin rằng hạnh phúc sẽ lan tỏa và lấp đầy thế giới.
                </p>
              </div>

              <div className='flex justify-center items-center  md:justify-end md:items-end mt-2'>
                <p className='text-lg text-headingColor font-medium capitalize text-center'>
                  Roger Oliver - CEO của Tám
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full  bg-cardOverlay rounded-lg py-2 px-4  my-8 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
          <div className='w-full flex flex-col md:flex-row items-center justify-between gap-6'>
            <motion.div
              className='w-40 h-40 -mt-8 drop-shadow-2xl'
              whileHover={{ scale: 1.2 }}
            >
              <img
                src={Leader}
                alt='Leader'
                className='w-full h-full object-contain'
              />
            </motion.div>

            <div className='w-full flex flex-col ml-6 '>
              <div className='flex flex-col gap-1  '>
                <p className='text-textColor font-thin text-base md:text-lg '>
                  Phục vụ những món ăn ngon cho thực khách thưởng thức là một
                  nghĩa vụ của nhà hàng.
                </p>
                <p className='text-textColor font-thin text-base md:text-lg '>
                  Chúng tôi luôn cố gắng không chỉ là một nhà hàng đơn thuần,
                  chúng tôi mong muốn mỗi vị khách khi bước vào nhà hàng của
                  chúng tôi đều cảm thấy phấn khích hơn, hạnh phúc hơn.
                </p>
                <p className='text-textColor font-thin text-base md:text-lg '>
                  {`   Mọi điều chúng tôi làm, luôn luôn hướng đến "Mang lại WOW,
                  Chia sẻ hạnh phúc".`}
                </p>
              </div>

              <div className='flex justify-center items-center  md:justify-end md:items-end mt-2'>
                <p className='text-lg text-headingColor font-medium capitalize text-center'>
                  Nguyễn Thanh Nga - Cửa hàng trưởng của Tám
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full  bg-cardOverlay rounded-lg py-2 px-4  my-8 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
          <div className='w-full flex flex-col md:flex-row items-center justify-between gap-6'>
            <motion.div
              className='w-40 h-40 -mt-8 drop-shadow-2xl'
              whileHover={{ scale: 1.2 }}
            >
              <img
                src={Chef}
                alt='Chè'
                className='w-full h-full object-contain'
              />
            </motion.div>

            <div className='w-full flex flex-col ml-6 '>
              <div className='flex flex-col gap-1 '>
                <p className='text-textColor font-thin text-base md:text-lg '>
                  {` Chúng tôi luôn luôn đảm bảo các thực phẩm luôn là thực phẩm
                  mới nhất, tươi nhất và là thực phẩm " Sạch "`}
                  .
                </p>
                <p className='text-textColor font-thin text-base md:text-lg '>
                  Mỗi một món ăn đều là một tác phẩm tâm huyết của mỗi một người
                  đầu bếp ở Tám
                </p>
                <p className='text-textColor font-thin text-base md:text-lg '>
                  Chúng tôi luôn luôn lắng nghe mọi ý kiến của thực khách để
                  khiến mỗi món ăn của chúng tôi làm ra thỏa mãn thực giác của
                  mọi người
                </p>
              </div>

              <div className='flex justify-center items-center  md:justify-end md:items-end mt-2'>
                <p className='text-lg text-headingColor font-medium capitalize text-center'>
                  Trần Minh Quân - Bếp trưởng của Tám
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {cartShow && <CartContainer />}
    </section>
  )
}

export default About
