import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Work from './pages/Work';


function App() {
  return (
    <div className="App bg-dark">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/work" component={Work}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
