import { useSelector } from 'react-redux'
import DataTable from './DataTable'

const DBItems = () => {
  const columns = [
    { title: 'Tên sản phẩm', field: 'title' },
    {
      title: 'Hình ảnh',
      field: 'imageURL',
      render: (rowData) => (
        <img
          style={{
            height: 36,
            display: 'flex',
            justifyContent: 'center',
          }}
          src={rowData.imageURL}
        />
      ),
    },

    { title: 'Giá tiền', field: 'price' },
    { title: 'Thể loại', field: 'category' },
  ]
  const actions = [
    {
      icon: 'edit',
      tooltip: 'Chỉnh sửa',
      onClick: (event, rowData) =>
        alert('Bạn có muốn chỉnh sửa' + rowData.name),
    },
    {
      icon: 'delete',

      tooltip: 'Xóa',
      onClick: (event, rowData) => confirm('Bạn có muốn xóa ' + rowData.name),
    },
  ]
  const foodItems = useSelector((state) => state.foodItems.foodItems)
  const title = 'Danh mục sản phẩm'
  const dataTable = foodItems.map((item) => {
    return {
      title: item.title,
      imageURL: item.imageURL,
      price: String(item.price).replace(/(.)(?=(\d{3})+$)/g, '$1,'),
      category: item.category,
    }
  })
  const localization = {
    header: {
      actions: 'Hoạt động',
    },
    pagination: {
      labelDisplayedRows: '',
      labelRowsPerPage: '',
      labelRowsSelect: 'Hàng',
      firstTooltip: 'Trang đầu',
      previousTooltip: 'Trang trước',
      nextTooltip: 'Trang tiếp',
      lastTooltip: 'Trang cuối',
    },
  }
  return (
    <div className='flex items-center justify-self-center mt-6  gap-4 py-6 w-full'>
      <DataTable
        columns={columns}
        data={dataTable}
        actions={actions}
        title={title}
        localization={localization}
      />
    </div>
  )
}
export default DBItems
