
import "./comp/App.css"
// import Google from './Google';
import Firebase from "./Firebase";
import SimpleMap from "./SimpleMap";
import Moment from 'react-moment';

// import 'moment-timezone';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="root">

      <div>



<div class="row ">
        <h3>Smart Garbage Monitoring System</h3>
      </div>
          <div class="row">
        
              <div class="col-md-5  ">
                  <h3>City: Indore</h3>
            </div>
            <div class="col-md-5  ">
                    <h4>{new Date().toLocaleString() + ""}</h4>
              </div>
        </div>
      </div>

      
      <Router>

<Switch>
  <Route exact path="/">
    <Firebase />
  </Route>
  <Route path="/map/:id">
    <SimpleMap />
  </Route>

</Switch>

</Router>
     
    </div>
  );
}

export default App;