import { useSelector, useDispatch } from 'react-redux'

const DBHome = () => {
  const dispatch = useDispatch()
  const foodItems = useSelector((state) => state.foodItems.foodItems)
  return <div>DBHome</div>
}

export default DBHome
