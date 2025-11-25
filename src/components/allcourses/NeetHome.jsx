import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import NeetCardd from "./NeetCard"

const NeetHome = () => {
  return (
    <>
      <Back title='Explore Courses' />
      <NeetCardd />
      {/* <OnlineCourses /> */}
    </>
  )
}

export default NeetHome
