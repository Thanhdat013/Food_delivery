import { useSelector } from 'react-redux'
import DataTable from './DataTable'

const DBItems = () => {
  const columns = [
    { title: 'Name', field: 'title' },
    {
      title: 'Avatar',
      field: 'avatar',
      render: (rowData) => (
        <img style={{ height: 36, borderRadius: '50%' }} src={rowData.avatar} />
      ),
    },

    { title: 'Price', field: 'price' },
    { title: 'Calories', field: 'calories' },
    { title: 'Category', field: 'category' },
  ]
  const actions = [
    {
      icon: 'save',
      tooltip: 'Save Item',
      onClick: (event, rowData) => alert('You saved ' + rowData.name),
    },
    {
      icon: 'delete',
      tooltip: 'Delete Item',
      onClick: (event, rowData) =>
        confirm('You want to delete ' + rowData.name),
    },
  ]
  const foodItems = useSelector((state) => state.foodItems.foodItems)

  const dataTable = foodItems.map((item) => {
    return {
      title: item.title,
      avatar: item.imageURL,
      price: String(item.price).replace(/(.)(?=(\d{3})+$)/g, '$1,'),
      calories: item.calories,
      category: item.category,
    }
  })

  return (
    <div className='flex items-center justify-self-center mt-6  gap-4 py-6 w-full'>
      <DataTable columns={columns} data={dataTable} actions={actions} />
    </div>
  )
}
export default DBItems
