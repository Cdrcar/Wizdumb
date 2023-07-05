
import './App.css';
import { BrowserRouter } from "react-router-dom";
import {AccountSettings, Course, DiscussionPage, Homepage, Navbar, LoggedinHomepage, Login, Modules, SearchPage, Footer} from './components'


function App() {
  return (
    <BrowserRouter>
      <div>
      <div>
        <Navbar />
        <Login />
        <Homepage />

      </div>
      <Course />
      <LoggedinHomepage />
      
      <SearchPage />
      <Modules />
      <DiscussionPage />
      <AccountSettings />
       <div>
       <Footer />
      </div>

      </div>
      
      
    </BrowserRouter>
  );
}

export default App;
