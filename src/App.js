import Link from './lesson13-navigattion/context/Link';
import Rout from './lesson13-navigattion/context/Rout';

import PropsStateApp from './lesson12-props_state/PropsStateApp';
import StateDesignApp from './lesson11-state/StateDesignApp';
// import ButtonCompApp from './lesson10-buttons/ButtonCompApp';
// import { Provider } from './lesson8-context/context/books';
// import AnimalApp from './lesson4-state/AnimalApp';
// import PicsApp from './lesson5-api/PicsApp';
// import FormsApp from './lesson6_7-forms_api/FormsApp';
// import FormsAppContext from './lesson8-context/FormsAppContex';

function App() {
  return (
    <div className=' container w-6/12 mt-8 mx-auto'>
      <h1 className='text-2xl text-center mb-8 font-bold text-blue-500'>
        React Version 18 Lessons
      </h1>
      <div>
        <Link to={'/accordion'}>Accordion</Link>
        <Link to={'/testings'}>Testings</Link>
      </div>
      <div>
        <Rout path={'/accordion'}>
          <StateDesignApp />
        </Rout>
        <Rout path={'/dropdown'}>
          <PropsStateApp />
        </Rout>
      </div>
      {/* <AnimalApp /> */}
      {/* <PicsApp /> */}
      {/* <FormsApp /> */}
      {/* <Provider>
        <FormsAppContext />
      </Provider> */}
      {/* <ButtonCompApp /> */}
    </div>
  );
}

export default App;
