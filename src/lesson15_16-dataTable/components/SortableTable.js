import { GoArrowSmallUp, GoArrowSmallDown } from 'react-icons/go';
import useSort from '../../hooks/use-sort';
import Table from './Table';

function SortableTable(props) {
  const { config, data } = props;

  const { sortOrder, sortBy, sortedData, setColumnSort } = useSort(
    config,
    data
  );

  const updatedConfig = config.map(col => {
    if (!col.sortValue) {
      return col;
    }
    return {
      ...col,
      header: () => (
        <th
          className='cursor-pointer hover: bg-grey-100'
          onClick={() => setColumnSort(col.label)}>
          <div className='flex items-center'>
            {getIcons(col.label, sortOrder, sortBy)}
            {col.label}
          </div>
        </th>
      ),
    };
  });

  return (
    <div>
      {sortBy} - {sortOrder}
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
}

function getIcons(label, sortOrder, sortBy) {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }
  if (sortOrder === null) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  } else if (sortOrder === 'asc') {
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    );
  } else if (sortOrder === 'desc') {
    return (
      <div>
        <GoArrowSmallDown />
      </div>
    );
  }
}

export default SortableTable;
