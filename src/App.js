import './App.css';
import CounterApp from './Components/CounterApp';
import FetchDataFromApiAndRender from './Components/FetchDataFromApiAndRender';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      {/* <CounterApp /> */}
      {/* <TodoList /> */}
      <FetchDataFromApiAndRender />
    </div>
  );
}

export default App;
