import {Route} from "wouter";


//COMPONENTS
import Navigation from "./components/Navigation/Navigation";

//PAGES
import SearchPage from "./pages/ExploreHeroesPage/ExploreHeroesPage";
import MyTeamPage from "./pages/MyTeamPage/MyTeamPage";
import LoginPage from "./pages/LoginPage/LoginPage";

//CONTEXT
import {UserContextWrapper} from "./context/UserContext";

function App() {



  return (
    <UserContextWrapper>
      <div className="App">
        <Navigation/>
        <Route path="/explore" component={SearchPage}/>
        <Route path="/team" component={MyTeamPage}/>    
        <Route path="/login" component={LoginPage}/>    
      </div>
    </UserContextWrapper>
  );
}

export default App;
