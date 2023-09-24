import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
 
import  Navbar from './Navbar';
import Home from './Home';
import Create from './Create';

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar/>
     <div className='content'>
      
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/create">
          <Create/>
        </Route>
      
     </div>

      </div>
      </Router>
  );
}

export default App;
