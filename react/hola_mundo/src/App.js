import logo from './logo.svg';
import './App.css';
//import Greetingf from './components/pure/greetingF.jsx';
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Greetingf name="pedro"/>*/}
        <TaskListComponent/>
      </header>
    </div>
  );
}

export default App;
