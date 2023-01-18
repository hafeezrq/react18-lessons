import Rout from './lesson13-navigation/Rout';

import ButtonCompApp from './lesson10-buttons/ButtonCompApp';
import StateDesignApp from './lesson11-state/StateDesignApp';
import PropsStateApp from './lesson12-props_state/PropsStateApp';
import Sidebar from './lesson13-navigation/Sidebar';
import AnimalPage from './lesson4-state/pages/AnimalPage';
import PicsPage from './lesson5-api/PicsPage';
import FormsAPIPage from './lesson6_7-forms_api/FormsAPIPage';
import FormWithContextPage from './lesson8-context/FormWithContexPage';
import { Provider } from './lesson8-context/context/books';
// import { Provider } from './lesson8-context/context/books';

function App() {
  return (
    <div className=' container mx-auto grid grid-cols-6 gap-4 mt-4'>
      <h1 className='text-2xl text-center mb-8 font-bold text-blue-500 col-span-6'>
        React Version 18 Lessons
      </h1>
      <Sidebar />
      <div className='col-span-5'>
        <Rout path={'/stateExample1'}>
          <AnimalPage />
        </Rout>
        <Rout path={'/picsPage'}>
          <PicsPage />
        </Rout>
        <Rout path={'/form-api'}>
          <FormsAPIPage />
        </Rout>
        <Rout path={'/context'}>
          <Provider>
            <FormWithContextPage />
          </Provider>
        </Rout>
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
