import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

import Button from '../components/Button';

function ButtonsPage() {
  const handleClick = () => {
    // console.log('Got clicked!!!');
  };
  const handleMouseEnter = () => {
    // console.log('Got MouseEnter!!!');
  };
  const handleMouseLeave = () => {
    // console.log('Got MouseLeave!!!');
  };
  return (
    <div className='flex flex-col pl-8 items-center '>
      <header className='mb-8'>
        <h1 className='text-2xl font-semibold'>
          Demo Features: Creat Button, EventHandling, and Props
        </h1>
        <p>
          This program demonstrates use of button in React app. Buttons are
          configured in this app by passing props and also eventhandler as well.
        </p>
        <p>
          Code for this program is in the directory{' '}
          <span className='italic'>lesson10</span>
        </p>
      </header>
      <Button primary outline onClick={handleClick} className='mb-2'>
        <GoBell />
        Click Me
      </Button>
      <Button
        secondary
        rounded
        onMouseEnter={handleMouseEnter}
        className='mb-2'>
        <GoDatabase />
        Buy Now!
      </Button>
      <Button danger rounded onMouseLeave={handleMouseLeave} className='mb-2'>
        <GoCloudDownload />
        Cancel
      </Button>
      <Button warning className='mb-2'>
        Hide details
      </Button>
      <Button success rounded className='mb-2'>
        Complete
      </Button>
    </div>
  );
}

export default ButtonsPage;
