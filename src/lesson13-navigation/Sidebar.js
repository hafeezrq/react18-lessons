import Link from './Link';

function Sidebar() {
  const links = [
    { label: 'Dropdown', path: '/' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Buttons', path: '/buttons' },
    { label: 'State', path: '/stateExample1' },
    { label: 'API', path: '/picsPage' },
    { label: 'Forms-API', path: '/form-api' },
    { label: 'Context', path: '/context' },
    { label: 'Modal', path: '/modal' },
    { label: 'Data Table', path: '/table' },
    { label: 'Custom Hooks', path: '/counter' },
    { label: 'Reducer', path: '/counter2' },
    { label: 'Redux Toolkit', path: '/rtk-demo' },
    { label: 'Redux Toolkit 2', path: '/rtk-demo2' },
    { label: 'AsyncThunksAPI', path: '/async-thunks-demo' },
  ];

  const renderedLinks = links.map(link => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className='mb-3'
        activeClassName='font-bold border-l-4 border-blue-500 pl-2'>
        {link.label}
      </Link>
    );
  });
  return (
    <div className='sticky top-0 overflow-y-scroll flex flex-col items-start'>
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
