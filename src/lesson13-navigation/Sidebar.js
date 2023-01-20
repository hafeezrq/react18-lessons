import Link from './Link';

function Sidebar() {
  const links = [
    { label: 'Dropdown', path: '/' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Buttons', path: '/buttons' },
    { label: 'State Example1', path: '/stateExample1' },
    { label: 'API Example', path: '/picsPage' },
    { label: 'Forms-API Example', path: '/form-api' },
    { label: 'Context Example', path: '/context' },
    { label: 'Modal', path: '/modal' },
    { label: 'Data Table', path: '/table' },
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
