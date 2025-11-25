

// import React, { useEffect, useState } from "react"
// import "./courses.css"
// import { useHistory } from "react-router-dom"

// const NeetCardd = () => {
//   const [neetCourses, setNeetCourses] = useState([])
//   const history = useHistory()

//   useEffect(() => {
//     // Fetch only NEET courses from backend
//     fetch("http://127.0.0.1:8000/courses/?category=NEET")
//       .then((res) => res.json())
//       .then((data) => setNeetCourses(data))
//       .catch((err) => console.error("Error fetching courses:", err))
//   }, [])

//   const handleEnrollClick = () => {
//     history.push("/contact")
//   }

//   return (
//     <section className="coursesCard">
//       <h2 className="selected-course">
//         📚 OUR NEET PROGRAMS
//       </h2>
//       <div className="container grid2">
//         {neetCourses.map((course, index) => (
//           <div className="items" key={course.course_id}>
//             <div className="content flex">
//               <div className="left">
//                 <div className="img">
//                   <img src={course.image} alt="good" />
//                 </div>
//               </div>
//               <div className="text">
//                 <h1>{course.title}</h1>
//                 <p>{course.description}</p>
//                 <div className="rate">
//                   <i className="fa fa-star"></i>
//                   <i className="fa fa-star"></i>
//                   <i className="fa fa-star"></i>
//                   <i className="fa fa-star"></i>
//                   <i className="fa fa-star"></i>
//                   <label>(5.0)</label>
//                 </div>
//                 <div className="details">
//                   <div className="box">
//                     <div className="para">
//                       <h4>Teacher: {course.teacher}</h4>
//                     </div>
//                     <span> ( {course.duration} ) hrs</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="price">
//               <h3>Category: {course.category.name}</h3>
//             </div>

//             <button className="outline-btn" onClick={handleEnrollClick}>
//               ENROLL NOW!
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default NeetCardd




import React, { useEffect, useState } from "react"
import "./courses.css"
import { useHistory } from "react-router-dom"
import { API_URL } from "../../api";   // path depends on folder depth

const NeetCardd = () => {
  const [neetCourses, setNeetCourses] = useState([])
  const history = useHistory()

  useEffect(() => {
    // Fetch only NEET courses from backend
    fetch(`${API_URL}/courses/?category=NEET`)
      .then((res) => res.json())
      .then((data) => setNeetCourses(data))
      .catch((err) => console.error("Error fetching courses:", err))
  }, [])

  const handleEnrollClick = () => {
    history.push("/contact")
  }

  return (
    <section className="coursesCard">
      <h2 className="selected-course">
        📚 OUR NEET PROGRAMS
      </h2>
      <div className="container grid2">
        {neetCourses.map((course, index) => (
          <div className="items" key={course.course_id}>
            <div className="content flex">
              <div className="left">
                <div className="img">
                  <img src={course.image} alt="good" />
                </div>
              </div>
              <div className="text">
                <h1>{course.title}</h1>
                <p>{course.description}</p>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <label>(5.0)</label>
                </div>
                <div className="details">
                  <div className="box">
                    <div className="para">
                      <h4>Teacher: {course.teacher}</h4>
                    </div>
                    <span> ( {course.duration} ) hrs</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="price">
              <h3>Category: {course.category.name}</h3>
            </div>

            <button className="outline-btn" onClick={handleEnrollClick}>
              ENROLL NOW!
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NeetCardd
