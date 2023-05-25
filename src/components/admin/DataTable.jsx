import MaterialTable from 'material-table'
const DataTable = ({ columns, data, title, actions }) => {
  return (
    <>
      <MaterialTable
        title={title}
        columns={columns}
        data={data}
        actions={actions}
      />
    </>
  )
}

export default DataTable
