import './output.css';

import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

import Button from '../../lesson10-buttons/Button';

function ButtonPage() {
  const handleClick = () => {
    console.log('Got clicked!!!');
  };
  const handleMouseEnter = () => {
    console.log('Got MouseEnter!!!');
  };
  const handleMouseLeave = () => {
    console.log('Got MouseLeave!!!');
  };
  return (
    <div>
      <div>
        <Button primary outline onClick={handleClick} className='mb-5'>
          <GoBell />
          Click Me
        </Button>
      </div>
      <div>
        <Button
          secondary
          rounded
          onMouseEnter={handleMouseEnter}
          className='mb-5'>
          <GoDatabase />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button danger rounded onMouseLeave={handleMouseLeave} className='mb-5'>
          <GoCloudDownload />
          Cancel
        </Button>
      </div>
      <div>
        <Button warning className='mb-5'>
          Hide details
        </Button>
      </div>
      <div>
        <Button success rounded className='mb-5'>
          Complete
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
