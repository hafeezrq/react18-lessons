import Rout from './lesson13-navigation/Rout';

import ButtonCompApp from './lesson10-buttons/ButtonCompApp';
import StateDesignApp from './lesson11-state/StateDesignApp';
import PropsStateApp from './lesson12-props_state/PropsStateApp';
import Sidebar from './lesson13-navigation/Sidebar';
// import { Provider } from './lesson8-context/context/books';
// import AnimalApp from './lesson4-state/AnimalApp';
// import PicsApp from './lesson5-api/PicsApp';
// import FormsApp from './lesson6_7-forms_api/FormsApp';
// import FormsAppContext from './lesson8-context/FormsAppContex';

function App() {
  return (
    <div className=' container mx-auto grid grid-cols-6 gap-4 mt-4'>
      <h1 className='text-2xl text-center mb-8 font-bold text-blue-500 col-span-6'>
        React Version 18 Lessons
      </h1>
      <Sidebar />
      <div className='col-span-5'>
        <Rout path={'/accordion'}>
          <StateDesignApp />
        </Rout>
        <Rout path={'/'}>
          <PropsStateApp />
        </Rout>
        <Rout path={'/buttons'}>
          <ButtonCompApp />
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
