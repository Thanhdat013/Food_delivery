import {
  DBHeader,
  DBHome,
  DBItems,
  DBNewItem,
  DBOrder,
  DBUsers,
} from '@/container/admin'
import { doLoginAction } from '@/redux/reducers/userReducer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Footer, Header, Login, MainContainer } from './container'
import About from './container/about/About'
import { doGetFoodItemsAction } from './redux/reducers/foodReducer'
import { getAllFoodItems } from './utils/firebaseFunctions'

const App = () => {
  function parseJwt(token) {
    if (!token) {
      return
    }
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace('-', '+').replace('_', '/')
    return JSON.parse(window.atob(base64))
  }
  const dispatch = useDispatch()

  // get All items

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch(doGetFoodItemsAction(data))
    })
  }

  const fecthUser = async () => {
    const accessToken = localStorage?.getItem('access_token')
    if (accessToken) {
      const user = parseJwt(accessToken)
      dispatch(doLoginAction(user))
    }
  }
  useEffect(() => {
    fecthUser()
    fetchData()
  }, [])

  const Layout = () => {
    return (
      <div className='w-screen h-auto flex flex-col bg-primary'>
        <Header />
        <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
          <Outlet />
        </main>
        <Footer />
      </div>
    )
  }

  const LayoutAdmin = () => {
    return (
      <div className='w-screen h-screen flex  bg-primary'>
        <div className='h-full '>{/* <DBLeftSection /> */}</div>

        <div className='flex flex-col py-12 px-12 flex-1  h-full'>
          <DBHeader />
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <MainContainer /> },
        {
          path: 'about',
          element: <About />,
        },
      ],
    },

    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/dashboard',
      element: <LayoutAdmin />,
      children: [
        { index: true, path: 'home', element: <DBHome /> },
        {
          path: 'order',
          element: <DBOrder />,
        },
        {
          path: 'items',
          element: <DBItems />,
        },
        {
          path: 'users',
          element: <DBUsers />,
        },
        {
          path: 'createItem',
          element: <DBNewItem />,
        },
      ],
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  )
}

export default App

//  const Layout = () => {
//     return (
//       <div className='w-screen h-auto flex flex-col bg-primary'>
//         <Header />
//         <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
//           <Outlet />
//         </main>
//       </div>
//     )
//   }
//   const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Layout />,
//       children: [
//         { index: true, element: <MainContainer /> },
//         {
//           path: '/createItem',
//           element: <CreateContainer />,
//         },
//       ],
//     },

//     {
//       path: '/login',
//       element: <Login />,
//     },
//   ])

//   return (
//     <>
//       <AnimatePresence>
//         <RouterProvider router={router} />
//         {/* <div className='w-screen h-auto flex flex-col bg-primary'>
//           <Header />

//           <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
//             <Routes>
//               <Route path='/*' element={<MainContainer />} />
//               <Route path='/login' element={<Login />} />
//               <Route path='/createItem' element={<CreateContainer />} />
//             </Routes>
//           </main>
//         </div> */}
//       </AnimatePresence>
//     </>
//   )
// }
