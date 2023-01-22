import Table from './Table';

function SortableTable(props) {
  const { config } = props;

  const handleClick = label => {
    console.log(label);
  };
  const updatedConfig = config.map(col => {
    if (!col.sortValue) {
      return col;
    }
    return {
      ...col,
      header: () => (
        <th onClick={() => handleClick(col.label)}>{col.label} sortable</th>
      ),
    };
  });

  return <Table {...props} config={updatedConfig} />;
}

export default SortableTable;
