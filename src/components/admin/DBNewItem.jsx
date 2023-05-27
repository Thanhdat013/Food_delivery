import { useState } from 'react'

import { storage } from '@/firebase.config'
import { doGetFoodItemsAction } from '@/redux/reducers/foodReducer'
import { categories } from '@/utils/data'
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from 'firebase/storage'
import {
  MdAttachMoney,
  MdCloudUpload,
  MdDelete,
  MdFastfood,
  MdModeEdit,
} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { getAllFoodItems, saveItem } from '../../utils/firebaseFunctions'

import Loader from '@/container/home/Loader'

const DBNewItem = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState(null)
  const [imageAsset, setImageAsset] = useState(null)

  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState('')
  const dispatch = useDispatch()

  const uploadImage = (e) => {
    setIsLoading(true)
    const imageFile = e.target.files[0]
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`)
    const uploadTask = uploadBytesResumable(storageRef, imageFile)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      },
      (error) => {
        console.log(error)
        toast.error('Error while uploading : Try AGain 🙇')
        setTimeout(() => {
          setIsLoading(false)
        }, 3000)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL)
          setIsLoading(false)
          toast.success('Image uploaded successfully 😊')
        })
      }
    )
  }
  // delete image from firebase
  const deleteImage = () => {
    setIsLoading(true)
    const deleteRef = ref(storage, imageAsset)
    deleteObject(deleteRef).then(() => {
      setImageAsset(null)
      setIsLoading(false)
      toast.success('Image deleted successfully 😊')
    })
  }

  // save data when cuccess
  const saveDetails = () => {
    setIsLoading(true)
    try {
      if (!title || !description || !imageAsset || !price || !category) {
        toast.error('Required fields can`t be empty')
        setTimeout(() => {
          setIsLoading(false)
        }, 3000)
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageURL: imageAsset,
          category: category,
          description: description,
          qty: 1,
          price: price,
        }

        saveItem(data)
        setIsLoading(false)
        toast.success('Data Uploaded successfully 😊')
        clearData()
      }
    } catch (error) {
      console.log(error)
      toast.error('Error while uploading : Try AGain 🙇')
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
    }

    fetchData()
  }

  const clearData = () => {
    setTitle('')
    setImageAsset(null)
    setDescription('')
    setPrice('')
    setCategory('')
  }

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch(doGetFoodItemsAction(data))
    })
  }

  return (
    <div className='w-full h-full flex items-center justify-center flex-col mt-16'>
      <div className='w-[70%] xl:w-[50%]  border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4'>
        <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
          <MdFastfood className='text-xl text-gray-700' />
          <input
            type='text'
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Nhập tên sản phẩm...'
            className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'
          />
        </div>

        <div className='w-full flex items-center justify-around gap-3 flex-wrap'>
          {categories &&
            categories.map((item) => (
              <p
                onClick={() => setCategory(item.category)}
                key={item.id}
                className={`px-4 py-3 rounded-md text-xl text-textColor font-semibold cursor-pointer hover:shadow-md border border-gray-200 backdrop-blur-md ${
                  item.category === category
                    ? 'bg-red-400 text-white'
                    : 'bg-transparent'
                }`}
              >
                {item.name}
              </p>
            ))}
        </div>

        <div className='group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-340 cursor-pointer rounded-lg bg-white'>
          {isLoading ? (
            <div className='w-full h-full flex flex-col items-center justify-evenly px-24 '>
              <Loader />
              {Math.round(progress > 0) && (
                <div className='w-full flex flex-col items-center justify-center gap-2'>
                  <div className='flex justify-between w-full'>
                    <span className='text-base font-medium text-textColor'>
                      Tiến triển
                    </span>
                    <span className='text-sm font-medium text-textColor'>
                      {Math.round(progress) > 0 && (
                        <>{`${Math.round(progress)}%`}</>
                      )}
                    </span>
                  </div>
                  <div className='w-full bg-gray-200 rounded-full h-2 '>
                    <div
                      className='bg-red-600 h-2 rounded-full transition-all duration-600 ease-in-out'
                      style={{
                        width: `${Math.round(progress)}%`,
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              {!imageAsset ? (
                <>
                  <label className='w-full h-full flex flex-col items-center justify-center cursor-pointer'>
                    <div className='w-full h-full flex flex-col items-center justify-center gap-2'>
                      <MdCloudUpload className='text-gray-500 text-3xl hover:text-gray-700' />
                      <p className='text-gray-500 hover:text-gray-700'>
                        Bấm vào đây để tải ảnh lên
                      </p>
                    </div>
                    <input
                      type='file'
                      name='uploadimage'
                      accept='image/*'
                      onChange={uploadImage}
                      className='w-0 h-0'
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className='relative h-full'>
                    <img
                      src={imageAsset}
                      alt='uploaded image'
                      className='w-full h-full object-cover'
                    />
                    <button
                      type='button'
                      className='absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md  duration-500 transition-all ease-in-out'
                      onClick={deleteImage}
                    >
                      <MdDelete className='text-white' />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>

        <div className='w-full flex flex-col md:flex-row items-center gap-3'>
          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
            <MdModeEdit className='text-gray-700 text-2xl' />
            <input
              type='text'
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Miêu tả'
              className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'
            />
          </div>
        </div>
        <div className='w-full flex flex-col md:flex-row items-center gap-3'>
          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
            <MdAttachMoney className='text-gray-700 text-2xl' />
            <input
              type='number'
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder='Giá tiền'
              className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'
            />
          </div>
        </div>

        <div className='flex items-center w-full'>
          <button
            type='button'
            className='ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold'
            onClick={saveDetails}
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  )
}

export default DBNewItem
