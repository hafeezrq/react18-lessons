import Dropdown from './components/Dropdown';

function PropsStateApp() {
  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'green', value: 'green' },
  ];
  return (
    <div>
      <Dropdown options={options} />
    </div>
  );
}

export default PropsStateApp;
