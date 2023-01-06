import BookContext from './lesson8-context/context/books';
// import AnimalApp from './lesson4-state/AnimalApp';
// import PicsApp from './lesson5-api/PicsApp';
// import FormsApp from './lesson6_7-forms_api/FormsApp';
import FormsAppContext from './lesson8-context/FormsAppContex';

function App() {
  return (
    <div className='App'>
      <h1>React Version 18 Lessons</h1>
      {/* <AnimalApp /> */}
      {/* <PicsApp /> */}
      {/* <FormsApp /> */}
      <BookContext.Provider value={5}>
        <FormsAppContext />
      </BookContext.Provider>
    </div>
  );
}

export default App;
