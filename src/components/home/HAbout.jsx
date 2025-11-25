// import React from "react"
// import OnlineCourses from "../allcourses/OnlineCourses"
// import Heading from "../common/heading/Heading"
// import "../allcourses/courses.css"
// import { coursesCard } from "../../dummydata"

// const HAbout = () => {
//   return (
//     <>
//       <section className='homeAbout'>
//         <div className='container'>
//           <Heading subtitle='our courses' title='explore our all popular courses' />

//           <div className='coursesCard'>
//             {/* copy code form  coursesCard */}
//             <div className='grid2'>
//               {coursesCard.slice(0, 3).map((val) => (
//                 <div className='items'>
//                   <div className='content flex'>
//                     <div className='left'>
//                       <div className='img'>
//                         <img src={val.cover} alt='' />
//                       </div>
//                     </div>
//                     <div className='text'>
//                       <h1>{val.coursesName}</h1>
//                       <div className='rate'>
//                         <i className='fa fa-star'></i>
//                         <i className='fa fa-star'></i>
//                         <i className='fa fa-star'></i>
//                         <i className='fa fa-star'></i>
//                         <i className='fa fa-star'></i>
//                         <label htmlFor=''>(5.0)</label>
//                       </div>
//                       <div className='details'>
//                         {val.courTeacher.map((details) => (
//                           <>
//                             <div className='box'>
//                               <div className='dimg'>
//                                 <img src={details.dcover} alt='' />
//                               </div>
//                               <div className='para'>
//                                 <h4>{details.name}</h4>
//                               </div>
//                             </div>
//                             <span>{details.totalTime}</span>
//                           </>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                   <div className='price'>
//                     <h3>
//                       {val.priceAll} / {val.pricePer}
//                     </h3>
//                   </div>
//                   <button className='outline-btn'>GO TO COURSES !</button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         {/* <OnlineCourses /> */}
//       </section>
//     </>
//   )
// }

// export default HAbout



import React from "react"
import { useHistory } from "react-router-dom" // ✅ useHistory instead of useNavigate
import OnlineCourses from "../allcourses/OnlineCourses"
import Heading from "../common/heading/Heading"
import "../allcourses/courses.css"
import { coursesCard } from "../../dummydata"

const HAbout = () => {
  const history = useHistory() // ✅ initialize history

  const handleCourseNavigation = (courseName) => {
    const name = courseName.toUpperCase()

    if (name.includes("IIT JEE")) {
      history.push("/courses")
    } else if (name.includes("NEET")) {
      history.push("/courses/neet")
    } else if (name.includes("OLYMPIAD")) {
      history.push("/courses/olympiad")
    } else {
      history.push("/courses") // default route
    }
  }

  return (
    <>
      <section className="homeAbout">
        <div className="container">
          <Heading subtitle="our courses" title="explore our all popular courses" />

          <div className="coursesCard">
            <div className="grid2">
              {coursesCard.slice(0, 6).map((val, index) => (
                <div className="items" key={index}>
                  <div className="content flex">
                    <div className="left">
                      <div className="img">
                        <img src={val.cover} alt={val.coursesName} />
                      </div>
                    </div>
                    <div className="text">
                      <h1>{val.coursesName}</h1>
                      <div className="rate">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <label>(5.0)</label>
                      </div>
                      <div className="details">
                        {val.courTeacher.map((details, i) => (
                          <React.Fragment key={i}>
                            <div className="box">
                              <div className="dimg">
                                <img src={details.dcover} alt={details.name} />
                              </div>
                              <div className="para">
                                <h4>{details.name}</h4>
                              </div>
                            </div>
                            <span>{details.totalTime}</span>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="price">
                    <h3>
                      {val.priceAll} / {val.pricePer}
                    </h3>
                  </div>
                  <button
                    className="outline-btn"
                    onClick={() => handleCourseNavigation(val.coursesName)}
                  >
                    GO TO COURSES !
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <OnlineCourses /> */}
      </section>
    </>
  )
}

export default HAbout
