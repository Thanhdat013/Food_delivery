import About from '@/container/about/About'
import { doLoginAction } from '@/redux/reducers/userReducer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  DBHeader,
  DBHome,
  DBItems,
  DBLeftSection,
  DBNewItem,
} from './components/admin'
import { ErrorPage, Footer, Header, Login, MainContainer } from './container'
import { doGetFoodItemsAction } from './redux/reducers/foodReducer'
import { getAllFoodItems } from './utils/firebaseFunctions'
import Service from './container/service/Service'
import Menu from './container/menu/Menu'
import Protected from './components/Protected'

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
      <div className='w-screen  min-h-screen flex relative bg-primary '>
        <div className='h-auto'>
          <DBLeftSection />
        </div>

        <div className='flex flex-col w-full py-12 px-12 flex-1 max-h-screen h-full overflow-scroll scroll-smooth'>
          <DBHeader />

          <Outlet />
        </div>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <MainContainer /> },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'services',
          element: <Service />,
        },
        {
          path: 'menu',
          element: <Menu />,
        },
      ],
    },

    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/dashboard',
      element: (
        <Protected>
          <LayoutAdmin />
        </Protected>
      ),
      children: [
        { index: true, path: 'home', element: <DBHome /> },

        {
          path: 'items',
          element: <DBItems />,
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
        autoClose={1000}
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
