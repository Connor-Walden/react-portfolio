import { Route, HashRouter as Router, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Work from './pages/Work';

function App() {
  return (
    <div className="App bg-dark">
      <Router homepage="https://connor-walden.github.io/react-portfolio/">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/work" component={Work} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
