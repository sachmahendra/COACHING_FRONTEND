// import React from "react"
// import "./courses.css"
// import { online } from "../../dummydata"
// import Heading from "../common/heading/Heading"

// const OnlineCourses = () => {
//   return (
//     <>
//       <section className='online'>
//         <div className='container'>
//           <Heading subtitle='COURSES' title='Browse Our Online Courses' />
//           <div className='content grid3'>
//             {online.map((val) => (
//               <div className='box'>
//                 <div className='img'>
//                   <img src={val.cover} />
//                   <img src={val.hoverCover} alt='' className='show' />
//                 </div>
//                 <h1>{val.courseName}</h1>
//                 <span>{val.course}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default OnlineCourses



import React, { useEffect, useState } from "react";
import axios from "axios";
import "./courses.css";
import Heading from "../common/heading/Heading";
import { API_URL } from "../../api";   // path depends on folder depth

const OnlineCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // axios.get("http://127.0.0.1:8000/courses/")  // ✅ Django API
    fetch(`${API_URL}/courses/`)
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {
        console.error("Error fetching courses:", err);
      });
  }, []);

  return (
    <section className="online">
      <div className="container">
        <Heading subtitle="COURSES" title="Browse Our Online Courses" />
        <div className="content grid3">
          {courses.map((course) => (
            <div className="box" key={course.course_id}>   {/* ✅ unique key */}
              <div className="img">
                {course.image ? (
                  <img src={`http://127.0.0.1:8000${course.image}`} alt={course.title} />
                ) : (
                  <img src="/default.jpg" alt="default" />  // fallback image
                )}
              </div>
              <h1>{course.title}</h1>
              <span>{course.category?.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineCourses;
