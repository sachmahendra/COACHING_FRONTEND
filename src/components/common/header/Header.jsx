// import React, { useState } from "react"
// import { Link } from "react-router-dom"
// import Head from "./Head"
// import "./header.css"

// const Header = () => {
//   const [click, setClick] = useState(false)

//   return (
//     <>
//       <Head />
//       <header>
//         <nav className='flexSB'>
//           <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
//             <li>
//               <Link to='/'>Home</Link>
//             </li>
//             <li>
//               <Link to='/courses'>All Courses</Link>
//             </li>
//             <li>
//               <Link to='/about'>About</Link>
//             </li>
//             <li>
//               <Link to='/team'>Downloads</Link>
//             </li>
//             <li>
//               <Link to='/pricing'>Scholarship</Link>
//             </li>
//             <li>
//               <Link to='/journal'>Test Series</Link>
//             </li>
//             <li>
//               <Link to='/contact'>Contact US</Link>
//             </li>
//           </ul>
//           <div className='start'>
//             <div className='button'>GET CERTIFICATE</div>
//           </div>
//           <button className='toggle' onClick={() => setClick(!click)}>
//             {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
//           </button>
//         </nav>
//       </header>
//     </>
//   )
// }

// export default Header





import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  // 🟢 Separate states for each dropdown
  const [coursesDropdown, setCoursesDropdown] = useState(false)
  const [downloadsDropdown, setDownloadsDropdown] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB"}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>

            {/* 🔹 Dropdown for All Courses */}
            <li
              className="dropdown"
              onMouseEnter={() => {
                setCoursesDropdown(true)
                setDownloadsDropdown(false)
              }}
              onMouseLeave={() => setCoursesDropdown(false)}
            >
              <Link to="/courses">All Courses ▾</Link>
              {coursesDropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/courses">IIT JEE</Link>
                  </li>
                  <li>
                    <Link to="/courses/neet">NEET</Link>
                  </li>
                  <li>
                    <Link to="/courses/olympiad">Olympiads</Link>
                  </li>
                  <li>
                    <Link to="/courses/CBSE">Boards 9 to 12 (CBSE, ICSE etc)</Link>
                  </li>
                  <li>
                    <Link to="/courses/foundation">Foundation 9th & 10th</Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            {/* 🔹 Dropdown for Downloads */}
            <li
              className="dropdown"
              onMouseEnter={() => {
                setDownloadsDropdown(true)
                setCoursesDropdown(false)
              }}
              onMouseLeave={() => setDownloadsDropdown(false)}
            >
              <Link to="/team">All Downloads ▾</Link>
              {downloadsDropdown && (
                <ul className="downloadDropdown-menu">
                  <li>
                    <Link to="/team">ALL PYQ</Link>
                  </li>
                  <li>
                    <Link to="/team/others">Others</Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/pricing">Scholarship</Link>
            </li>
            <li>
              <Link to="/journal">Test Series</Link>
            </li>
            <li>
              <Link to="/contact">Contact US</Link>
            </li>
          </ul>

          <div className="start">
            <Link to="/register">Login/Sign up</Link>
          </div>

          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header


