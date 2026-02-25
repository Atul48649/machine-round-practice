import './App.css';
import CounterApp from './Components/CounterApp';
import FetchDataFromApiAndRender from './Components/FetchDataFromApiAndRender';
import SearchOrFilterList from './Components/SearchOrFilterList';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      {/* <CounterApp /> */}
      {/* <TodoList /> */}
      {/* <FetchDataFromApiAndRender /> */}
      <SearchOrFilterList />
    </div>
  );
}

export default App;
