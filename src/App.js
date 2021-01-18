// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChangePasswordComponent from './Components/ChangePasswordComponent';
import AdminSignInComponent from './Components/AdminSignInComponent';

import AdminLoginComponent from './Components/AdminLoginComponent';
import ListTelephoneConnectionComponent from './Components/ListTelephoneConnectionComponent';
import Home from './Components/Home';

// import ForgetPasswordComponent from './Components/ForgetPasswordComponent.js';

function App() {
  return (
    <div>
      <Router>

        <div className="container">
          <Switch>
            {/* <Route path="/" exact component={ForgetPasswordComponent}></Route> */}
            <Route path="/updatePassword/:adminUserName" exact component={ChangePasswordComponent}></Route>
            <Route path="/SignIn" exact component={AdminSignInComponent}></Route>
            {/* <Route path="/try" exact component={tryComponent}></Route> */}
            <Route path="/Login/:adminUserName/:adminPassword" exact component={AdminLoginComponent}></Route>
            <Route path="/list" exact component={ListTelephoneConnectionComponent}></Route>
            <Route path="/" exact component={Home}></Route>
          </Switch>
        </div>

      </Router>
    </div>

  );
}

export default App;
