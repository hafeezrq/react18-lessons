// import Table from '../components/Table';
import SortableTable from '../components/SortableTable';

function TablePage() {
  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-700', score: 3 },
    { name: 'Banana', color: 'bg-yellow-300', score: 1 },
    { name: 'Lime', color: 'bg-green-500', score: 4 },
  ];

  const config = [
    {
      label: 'Name',
      render: fruit => fruit.name,
      sortValue: fruit => fruit.name,
    },
    {
      label: 'Color',
      render: fruit => (
        <div
          className={`p-3 m-2 border border-black opacity-50 ${fruit.color}`}
        />
      ),
    },
    {
      label: 'Score',
      render: fruit => fruit.score,
      // header: () => <th className='bg-red-500'>Score</th>,
      sortValue: fruit => fruit.score,
    },
  ];
  return (
    <div>
      <SortableTable data={data} config={config} />
    </div>
  );
}

export default TablePage;