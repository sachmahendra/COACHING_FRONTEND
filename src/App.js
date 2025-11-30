import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import NeetHome from "./components/allcourses/NeetHome"
import olympiadHome from "./components/allcourses/OlympiadHome"
import CbseHome from "./components/allcourses/CbseHome"
import FoundationHome from "./components/allcourses/FoundationHome"
import Download from "./components/downloads/Download"
import Register from "./components/register/Register"
import Login from "./components/register/Login"
import Dashboard from "./components/register/Dashboard"



function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <div className="site-top-spacer" /> */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/courses/neet' component={NeetHome} />
          <Route exact path='/courses/olympiad' component={olympiadHome} />
          <Route exact path='/courses/CBSE' component={CbseHome} />
          <Route exact path='/courses/foundation' component={FoundationHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/download' component={Download} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/student-dashboard' component={Dashboard} />

        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
