import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>       
        <Link to = "/">Movie List</Link> 
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details" exact>
          
        </Route>
        
        <Route path="/movie" exact>

        </Route>
       
      </Router>
    </div>
  );
}


export default App;
