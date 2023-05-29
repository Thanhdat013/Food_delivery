import { useSelector } from 'react-redux'
import { ErrorPage } from '../container'

const Protected = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.users.isAuthenticated)
  const user = useSelector((state) => state.users.user)

  if (isAuthenticated) {
    if (
      user.email === 'ktd11@gmail.com' ||
      user.email === 'ktd1302@gmail.com'
    ) {
      return <>{children}</>
    } else {
      return <ErrorPage />
    }
  } else {
    return <ErrorPage />
  }
}

export default Protected
