// import './App.css';
import Counter from './Counter/Counter';
import CounterArrow from './Counter/CounterArrow';
import CounterHook from './Counter/CounterHook';
import ListEmployee from './Form/ListEmployee';
import ParentEmployee from './Form/ParentEmployee';
import EmployeeList from './List/EmployeeList';
import Parent from './ParentChild/Parent';
import EmployeeRedux from './Redux/ReduxList/EmployeeRedux';

function App() {
  return (
    <div className="App">
      <EmployeeRedux />
    </div>
  );
}

export default App;
