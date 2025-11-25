import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import OlympiadCard from "./OlympiadCard"

const olympiadHome = () => {
  return (
    <>
      <Back title='Explore Courses' />
      <OlympiadCard />
      {/* <OnlineCourses /> */}
    </>
  )
}

export default olympiadHome
