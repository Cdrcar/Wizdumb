
import './App.css';
import {AccountSettings, Course, DiscussionPage, Homepage, Navbar, LoggedinHomepage, Login, Modules, SearchPage, Footer} from './components'


function App() {
  return (
    <BrowserRouter>
      <div>
      <div>
        <Navbar />
        <Homepage />

      </div>
      <LoggedinHomepage />
      <Login />
      <SearchPage />
      <Course />
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
