import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Home from "./pages/Home.tsx";
import Create from "./pages/Create.tsx";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
