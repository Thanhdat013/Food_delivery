import DbLeftSection from './DbLeftSection'
import DbRightSection from './DbRightSection'

const Dashboard = () => {
  return (
    <div className='w-screen h-screen flex items-center'>
      <DbLeftSection />
      <DbRightSection />
    </div>
  )
}

export default Dashboard
