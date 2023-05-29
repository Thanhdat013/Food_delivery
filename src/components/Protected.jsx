import { useSelector } from 'react-redux'
import { ErrorPage } from '../container'

const Protected = ({ children }) => {
  const user = useSelector((state) => state.users.user)

  if (user?.email === 'ktd11@gmail.com') {
    return children
  } else {
    return <ErrorPage />
  }
}

export default Protected
