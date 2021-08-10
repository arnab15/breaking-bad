
import './App.css';
import Navbar from './Components/Navbar';
import {Switch,Route, Redirect} from "react-router-dom"
import CharactersPage from './Pages/CharactersPage';
import CharacterDetailsPage from './Pages/CharacterDetailsPage';
function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
      <Route exact path="/characters" component={CharactersPage}/>
      <Route exact path="/characters/:id" component={CharacterDetailsPage}/>
      <Redirect from="/" to="/characters?page=1"/>
    </Switch>
    </div>
    
  );
}

export default App;
