import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import CbseCard from "./CbseCard"

const CbseHome = () => {
  return (
    <>
      <Back title='Explore Courses' />
      <CbseCard />
      {/* <OnlineCourses /> */}
    </>
  )
}

export default CbseHome
