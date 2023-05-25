import { useSelector } from 'react-redux'
import DataTable from './DataTable'

const DBItems = () => {
  const columns = [
    { title: 'Name', field: 'title' },
    {
      title: 'Image',
      field: 'imageURL',
      render: (rowData) => (
        <img
          style={{
            height: 36,
            // borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
          }}
          src={rowData.imageURL}
        />
      ),
    },

    { title: 'Price', field: 'price' },
    { title: 'Calories', field: 'calories' },
    { title: 'Category', field: 'category' },
  ]
  const actions = [
    {
      icon: 'edit',
      tooltip: 'Edit Item',
      onClick: (event, rowData) => alert('You want to edit ' + rowData.name),
    },
    {
      icon: 'delete',
      tooltip: 'Delete Item',
      onClick: (event, rowData) =>
        confirm('You want to delete ' + rowData.name),
    },
  ]
  const foodItems = useSelector((state) => state.foodItems.foodItems)
  const title = 'List of items'
  const dataTable = foodItems.map((item) => {
    return {
      title: item.title,
      imageURL: item.imageURL,
      price: String(item.price).replace(/(.)(?=(\d{3})+$)/g, '$1,'),
      calories: item.calories,
      category: item.category,
    }
  })

  return (
    <div className='flex items-center justify-self-center mt-6  gap-4 py-6 w-full'>
      <DataTable
        columns={columns}
        data={dataTable}
        actions={actions}
        title={title}
      />
    </div>
  )
}
export default DBItems
