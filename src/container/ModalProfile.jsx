import Avatar from '@/assets/img/avatar.png'
import { Box, Modal } from '@material-ui/core'
import { useSelector } from 'react-redux'
const ModalProfile = ({ handleCloseProfile, showProfile }) => {
  const user = useSelector((state) => state.users.user)
  return (
    <div>
      <Modal
        open={showProfile}
        onClose={handleCloseProfile}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box className='absolute top-[20%] left-[50%] w-460 bg-white shadow-lg p-4 rounded-xl -translate-x-[50%]'>
          <div className='flex flex-col items-start px-2 gap-2 text-base text-headingColor'>
            <p className='text-xl'>Thông tin tài khoản</p>
            <div className='flex flex-col w-full gap-5'>
              <div className='w-full flex-col flex items-start text-start gap-2'>
                {user?.name && (
                  <>
                    <p>Tên người dùng</p>
                    <input
                      type='text'
                      className='w-full px-2 py-2 border bg-primary rounded-md'
                      disabled
                      value={user?.name}
                    />
                  </>
                )}
              </div>
              <div className='w-full flex-col flex items-start text-start gap-2'>
                <p>Email</p>
                <input
                  type='text'
                  className='w-full px-2 py-2 border bg-primary rounded-md'
                  disabled
                  value={user.email}
                />
              </div>
              <div className='w-full flex-col flex items-start text-start gap-2'>
                <p>Xác Thực Tài khoản </p>
                <input
                  type='text'
                  className='w-full px-2 py-2 border bg-primary rounded-md'
                  disabled
                  value={
                    user.email_verified === true
                      ? 'Đã xác thực'
                      : 'Chưa xác thực'
                  }
                />
              </div>
              <div className='w-full  flex items-center justify-center'>
                <img
                  className='w-16 h-16 rounded-full'
                  src={user.picture ? user.picture : Avatar}
                  alt='Avatar'
                />
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default ModalProfile
