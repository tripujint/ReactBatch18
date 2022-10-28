// import './App.css';
import Counter from './Counter/Counter';
import CounterArrow from './Counter/CounterArrow';
import CounterHook from './Counter/CounterHook';
import ListEmployee from './Form/ListEmployee';
import ParentEmployee from './Form/ParentEmployee';
import EmployeeList from './List/EmployeeList';
import Parent from './ParentChild/Parent';
import EmployeeRedux from './Redux/ReduxList/EmployeeRedux';
import EmployeeReduxToolkit from './Redux/ReduxList/EmployeeReduxToolkit';
import Routes from './Routes';
import CountryView from './ViewApi/country/CountryView';
import DepartmentView from './ViewApi/department/DepartmentView';
import EmployeeView from './ViewApi/employee/EmployeeView';
import JobView from './ViewApi/job/JobView';
import JobHistoryView from './ViewApi/job_history/JobHistoryView';
import LocationView from './ViewApi/location/LocationView';
import RegionView from './ViewApi/RegionView';

function App() {
  return (
    <div>
      <EmployeeView />
    </div>
  );
}

export default App;
