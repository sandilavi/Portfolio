import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import IntroPage from './page_components/IntroPage'
import AboutPage from './page_components/AboutPage'
import BlogsPage from './page_components/BlogsPage'
import ProjectsPage from './page_components/ProjectsPage'
import ContactPage from './page_components/ContactPage'

function App() {
  return (
    <div id="body">

      <Router>
        <Routes>
          <Route path={"/"} element={<IntroPage/>}></Route>
          <Route path={"/about"} element={<AboutPage/>}></Route>
          <Route path={"/blogs"} element={<BlogsPage/>}></Route>
          <Route path={"/projects"} element={<ProjectsPage/>}></Route>
          <Route path={"/contacts"} element={<ContactPage/>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
