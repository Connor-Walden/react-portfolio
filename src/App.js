import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home';
import Work from './pages/Work';

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <div className="App bg-dark">
      <Router history={history}>
        <Route exact path="/" component={Home}/>
        <Route exact path="/work" component={Work}/>
      </Router>
    </div>
  );
}

export default App;
