import './input.css';

import Button from './Button';

function RoutingApp() {
  return (
    <div>
      <div>
        <Button primary outline>
          Click Me
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button danger rounded>
          Cancel
        </Button>
      </div>
      <div>
        <Button warning>Hide details</Button>
      </div>
      <div>
        <Button success rounded>
          Complete
        </Button>
      </div>
    </div>
  );
}

export default RoutingApp;
