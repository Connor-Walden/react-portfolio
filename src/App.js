import { Route, HashRouter as Router } from 'react-router-dom';

import Home from './pages/Home';
import Work from './pages/Work';

function App() {
  return (
    <div className="App bg-dark">
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/work" component={Work}/>
      </Router>
    </div>
  );
}

export default App;
