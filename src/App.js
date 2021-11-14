import {Route} from "wouter";
import './Globals.sass'

//COMPONENTS
import Navigation from "./components/Navigation/Navigation";

//PAGES
import SearchPage from "./pages/ExploreHeroesPage/ExploreHeroesPage";
import MyTeamPage from "./pages/MyTeamPage/MyTeamPage";
import LoginPage from "./pages/LoginPage/LoginPage";

//COMPONENTS
import HeroDetailsPage from "./pages/HeroDetailsPage/HeroDetailsPage";
import ListOfHeroes from "./components/ListOfHeroes/ListOfHeroes";

//CONTEXT
import {UserContextWrapper} from "./context/UserContext";

function App() {



  return (
    <UserContextWrapper>
      <div className="App">
        <Navigation/>
        <Route path="/" component={SearchPage}/>
        <Route path="/team" component={MyTeamPage}/>    
        <Route path="/login" component={LoginPage}/>  

        <Route path="/search/:keyword" component={ListOfHeroes}/>
        <Route path="/hero/:id" component={HeroDetailsPage}/>
    
      </div>
    </UserContextWrapper>
  );
}

export default App;
