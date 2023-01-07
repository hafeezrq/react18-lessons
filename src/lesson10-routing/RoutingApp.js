import './input.css';

import Button from './Button';

function RoutingApp() {
  return (
    <div>
      <div>
        <Button success>Click Me</Button>
      </div>
      <div>
        <Button>Buy Now!</Button>
      </div>
      <div>
        <Button>Cancel</Button>
      </div>
      <div>
        <Button>Hide details</Button>
      </div>
    </div>
  );
}

export default RoutingApp;
