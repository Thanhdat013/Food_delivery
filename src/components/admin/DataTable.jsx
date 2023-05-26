import MaterialTable from 'material-table'
const DataTable = ({ columns, data, title, actions, localization }) => {
  return (
    <>
      <MaterialTable
        title={title}
        columns={columns}
        data={data}
        actions={actions}
        localization={localization}
      />
    </>
  )
}

export default DataTable
