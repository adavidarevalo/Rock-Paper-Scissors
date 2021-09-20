import './App.scss';
import Main from './components/Main'
import Complex from './components/Complex'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route exact path='/' component={Main}/>
      <Route exact path='/Complex' component={Complex}/>
    </Router>
  );
}

export default App;
