
import './index.css';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import {AccountSettings, Course, DiscussionPage, Homepage, Navbar, LoggedinHomepage, Login, Modules, SearchPage, Footer} from './components'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
import courses from './constants/index.js';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router >
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
    
      
    </Router>
    </ApolloProvider>
  );
}

export default App;
