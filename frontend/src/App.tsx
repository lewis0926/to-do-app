import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Home from "./pages/Home.tsx";
import Create from "./pages/Create.tsx";
import Update from "./pages/Update.tsx";

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
        <Route path="/update/:id">
          <Update />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
