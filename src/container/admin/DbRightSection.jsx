import DBHeader from './DBHeader'

const DBRightSection = () => {
  return (
    <div className='flex flex-col py-12 flex-1  h-full'>
      <DBHeader />
      <div className='flex flex-col flex-1 overflow-y-scroll scrollbar-none'></div>
    </div>
  )
}

export default DBRightSection
