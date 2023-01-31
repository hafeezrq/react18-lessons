import { Provider } from 'react-redux';
import { store } from './lesson19-RTK/store';
import Rout from './lesson13-navigation/Rout';
import ButtonsPage from './lesson10-buttons/pages/ButtonsPage';
import StateDesignPage from './lesson11-state/pages/StateDesignPage';
import PropsStatePage from './lesson12-props_state/pages/PropsStatePage';
import Sidebar from './lesson13-navigation/Sidebar';
import AnimalPage from './lesson4-state/pages/AnimalPage';
import PicsPage from './lesson5-api/PicsPage';
import FormsAPIPage from './lesson6_7-forms_api/FormsAPIPage';
import FormWithContextPage from './lesson8-context/FormWithContexPage';
import { BooksProvider } from './lesson8-context/context/books';
import ModalPage from './lesson14-PortalWithReactDOM/pages/ModalPage';
import TablePage from './lesson15_16-dataTable/pages/TablePage';
import CounterPage from './lesson17-CustomHooks/CounterPage';
import CounterPage2 from './lesson18-reducer/pages/CounterPage2';
import RTKDemoPage from './lesson19-RTK/pages/RTKDemoPage';
import RTKDemo2Page from './lesson20-RTK-2/pages/RTKDemo2Page';
import AsyncThunksAPIDemo from './lesson21-Async_Thunks/pages/AsyncThunksAPIDemo';

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
          <BooksProvider>
            <FormWithContextPage />
          </BooksProvider>
        </Rout>
        <Rout path={'/accordion'}>
          <StateDesignPage />
        </Rout>
        <Rout path={'/'}>
          <PropsStatePage />
        </Rout>
        <Rout path={'/buttons'}>
          <ButtonsPage />
        </Rout>
        <Rout path='/modal'>
          <ModalPage />
        </Rout>
        <Rout path='/table'>
          <TablePage />
        </Rout>
        <Rout path='/counter'>
          <CounterPage initialCount={10} />
        </Rout>
        <Rout path='/counter2'>
          <CounterPage2 initialCount={10} />
        </Rout>
        <Rout path='/rtk-demo'>
          <Provider store={store}>
            <RTKDemoPage />
          </Provider>
        </Rout>
        <Rout path='/rtk-demo2'>
          <Provider store={store}>
            <RTKDemo2Page />
          </Provider>
        </Rout>
        <Rout path='/async-thunks-demo'>
          <AsyncThunksAPIDemo />
        </Rout>
      </div>
    </div>
  );
}

export default App;
