import StateDesignApp from './lesson11-state/StateDesignApp';
// import ButtonCompApp from './lesson10-buttons/ButtonCompApp';
// import { Provider } from './lesson8-context/context/books';
// import AnimalApp from './lesson4-state/AnimalApp';
// import PicsApp from './lesson5-api/PicsApp';
// import FormsApp from './lesson6_7-forms_api/FormsApp';
// import FormsAppContext from './lesson8-context/FormsAppContex';

function App() {
  return (
    <div className='App container w-1/2 mt-8'>
      <h1 className='text-2xl text-center mb-8 font-bold text-blue-500'>
        React Version 18 Lessons
      </h1>
      {/* <AnimalApp /> */}
      {/* <PicsApp /> */}
      {/* <FormsApp /> */}
      {/* <Provider>
        <FormsAppContext />
      </Provider> */}
      {/* <ButtonCompApp /> */}
      <StateDesignApp />
    </div>
  );
}

export default App;
