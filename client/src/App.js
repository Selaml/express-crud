import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
 
function App() {
  return (
    <Router>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Switch>
            <Route exact path="/">
              <EmployeeList />
           </Route>
            <Route path="/add">
              <AddEmployee />
            </Route>
            <Route path="/edit/:id">
              <EditEmployee />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
    </Router>
  );
}
 
export default App;