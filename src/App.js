import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import '../node_modules/bootstrap'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import Header from './components/Header';
// import PrimarySearchAppBar from './components/Header';
// import Navbar from './components/Navbar';

// Defualt route should be at bottom

function App() {
  return (
    <div className="app">

      <Router>
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>This is a checkout page</h1>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
