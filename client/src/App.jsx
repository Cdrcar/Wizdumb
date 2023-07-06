
import './index.css';
import { BrowserRouter } from "react-router-dom";
import {AccountSettings, Course, DiscussionPage, Homepage, Navbar, LoggedinHomepage, Login, Modules, SearchPage, Footer} from './components'
import courses from './constants/index.js';

function App() {
  return (
    <BrowserRouter >
      <div className='relative z-0 bg-cover bg-no-repeat bg-center'>
      <div>
        <Navbar />
        <Login />
        <Homepage />

      </div>
      <div>
        
        <h3 id="courses" className=" font-black flex flex-wrap mx-6 text-cyan-700 md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Courses</h3>
        <div className='grid grid-cols-3 gap-0'>
          {courses.map((course) => (
            <Course
              key={course.name}
              name={course.name}
              description={course.description}
              icon={course.icon}
              modules={course.modules}
            />
          ))}
          </div>
      <LoggedinHomepage />
      
      <SearchPage />
      <Modules />
      <DiscussionPage />
      <AccountSettings />
      </div>
       <div>
       <Footer className='bg-lime-500'/>
      </div>

      </div>
    
      
    </BrowserRouter>
  );
}

export default App;
