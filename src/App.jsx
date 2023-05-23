import { useEffect } from 'react'
import {
  Outlet,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from 'react-router-dom'
import { CreateContainer, Header, Login, MainContainer } from './container'
import { useStateValue } from './context/StateProvider'
import { getAllFoodItems } from './utils/firebaseFunctions'
import { actionType } from './context/reducer'

const App = () => {
  const [{}, dispatch] = useStateValue()

  // get All items

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      })
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='w-screen h-auto flex flex-col bg-primary'>
      <div>
        <Header />

        <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
          <Routes>
            <Route path='/*' element={<MainContainer />} />
            <Route path='/login' element={<Login />} />
            <Route path='/createItem' element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </div>
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
