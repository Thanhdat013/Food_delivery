import AboutBg from '@/assets/img/about.png'
import AboutSub from '@/assets/img/about-1.png'
import AboutSub1 from '@/assets/img/about-2.png'
import AboutSub2 from '@/assets/img/about-3.png'
import AboutHelp from '@/assets/img/about-help.png'

const Service = () => {
  return (
    <section className='w-full h-auto flex flex-col mb-4'>
      <div className='grid grid-cols-1 lg:grid-cols-2  gap-2 w-full '>
        <div className='py-2  flex flex-col items-start justify-center gap-6'>
          <p className='text-[2.5rem] lg:text-[4.5rem] capitalize font-bold tracking-wide text-headingColor'>
            Không chỉ là món ăn, mà còn là
            <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>
              &nbsp;Trải Nghiệm!
            </span>
          </p>
          <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
            Với phương châm luôn đặt chất lượng và sự trải nghiệm với từng món
            ăn mà thực khách ăn lên hàng đầu. Chúng tôi luôn luôn ý thức được
            trách nhiệm của mình và luôn nỗ lực cố gắng để để làm hài lòng mọi
            thực khách khi sử dụng dịch vụ của chúng tôi
          </p>
        </div>
        <div className='py-2 flex-1 flex items-center relative'>
          <img
            src={AboutBg}
            className='mx-auto h-510 w-full lg:w-auto lg:h-685'
            alt='about'
          />
          <img
            src={AboutSub}
            className=' hidden lg:flex ml-auto h-[147px] w-[147px] absolute left-[35%] bottom-[10% ] 2xl:bottom-0'
            alt='item-1'
          />
          <img
            src={AboutSub1}
            className='ml-auto h-[147px] w-[147px] absolute right-0 2xl:right-[10%] bottom-[15%] hidden lg:flex'
            alt='item-2'
          />
          <img
            src={AboutSub2}
            className='ml-auto h-[147px] w-[147px] absolute  left-[-5%] bottom-[25%] 2xl:left-[10%] 2xl:bottom-[50%] hidden lg:flex'
            alt='item-3'
          />
        </div>
      </div>

      <div className='flex w-full items-center justify-between gap-16'>
        <div className='w-[40%] h-[1px] rounded-md bg-gray-400'></div>
        <img
          src={AboutHelp}
          className=' h-12 w-12 rounded-full '
          alt='about-help'
        />
        <div className='w-[40%] h-[1px] rounded-md bg-gray-400'></div>
      </div>

      <div className='flex items-center lg:flex-row justify-around gap-4 mt-6 flex-col'>
        <div
          className='min-h-[190px] flex items-center flex-col justify-start px-4 py-4 gap-3 lg:w-[25%]  w-[70%] h-auto rounded-lg shadow-md backdrop-blur-md
        '
        >
          <p className='flex items-center justify-center text-2xl w-[20%] text-headingColor py-2 px-24 rounded-full bg-red-200 backdrop-blur-sm shadow-md cursor-pointer'>
            Hỗ&nbsp;trợ
          </p>
          <p className='text-base text-headingColor items-center hover:underline cursor-pointer'>
            Trung tâm hỗ trợ
          </p>
          <p className='text-base text-headingColor items-center hover:underline cursor-pointer'>
            Các câu hỏi thường gặp
          </p>
          <p className='text-base text-headingColor items-center hover:underline cursor-pointer'>
            Phản hồi của khách hàng
          </p>
        </div>

        <div
          className='min-h-[190px] flex items-center flex-col justify-start px-4 py-4 gap-3 lg:w-[25%]  w-[70%] h-auto rounded-lg shadow-md backdrop-blur-md
        '
        >
          <p className='flex items-center justify-center text-2xl w-[20%] text-headingColor py-2 px-24 rounded-full bg-gray-100 backdrop-blur-sm shadow-md cursor-pointer'>
            Liên&nbsp;hệ
          </p>
          <p className='w-full text-base text-headingColor '>
            Số điện thoại: +84 325 552 221
          </p>
          <p className='w-full text-base text-headingColor '>
            Địa chỉ: Số 8 xóm Hạ Hồi, phường Trần Hưng Đạo, quận Hoàn Kiếm,
            thành phố Hà Nội
          </p>
        </div>
      </div>
    </section>
  )
}

export default Service
