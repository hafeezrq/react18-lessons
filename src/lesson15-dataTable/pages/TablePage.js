import Table from '../components/Table';

function TablePage() {
  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-700', score: 3 },
    { name: 'Banana', color: 'bg-yellow-300', score: 1 },
    { name: 'Lime', color: 'bg-green-500', score: 4 },
  ];

  const config = [
    {
      lable: 'Fruit',
      render: fruit => fruit.name,
    },
    {
      lable: 'Color',
      render: fruit => fruit.color,
    },
    { lable: 'Score', render: fruit => fruit.score },
  ];
  return (
    <div>
      <Table data={data} config={config} />
    </div>
  );
}

export default TablePage;