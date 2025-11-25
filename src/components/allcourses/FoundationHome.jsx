import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import FoundationCard from "./FoundationCard"

const NeetHome = () => {
  return (
    <>
      <Back title='Explore Courses' />
      <FoundationCard />
      {/* <OnlineCourses /> */}
    </>
  )
}

export default NeetHome
