import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Home from './pags/Home'
import users from './pags/Users'

function Routes(){

  return(
    <Router>
      <Route path="/" Component={Home} />
      <Route path="/users" Component={users} />
    </Router>
  )
}