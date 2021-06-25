import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './layout/Header';
import HomePage from './page/HomePage';

function App() {
  return (
    <Router>
      <div className="site-container">
        <Header />
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
