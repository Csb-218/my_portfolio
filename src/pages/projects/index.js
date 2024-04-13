import TabsLgBasic from "@/components/tabs/TabsLgBasic"
import React, { useState, useRef, useEffect } from "react"

const Projects = ({projects}) => {

  const [tabSelected, setTabSelected] = useState({
    currentTab: 1,
    noTabs: 3,
  })

  const wrapperRef = useRef(null)

  const handleKeyDown = e => {
    if (e.keyCode === 39) {
      if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
        if (
          tabSelected.currentTab >= 1 &&
          tabSelected.currentTab < tabSelected.noTabs
        ) {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.currentTab + 1,
          })
        } else {
          setTabSelected({
            ...tabSelected,
            currentTab: 1,
          })
        }
      }
    }

    if (e.keyCode === 37) {
      if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
        if (
          tabSelected.currentTab > 1 &&
          tabSelected.currentTab <= tabSelected.noTabs
        ) {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.currentTab - 1,
          })
        } else {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.noTabs,
          })
        }
      }
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })

  return (
    <div className={`border-0 h-screen fixed w-screen top-0 overflow-scroll bg-center bg-no-repeat bg-cover  bg-blend-multiply bg-[url('/backgrounds/bg3.jpg')] `}>

      <div className='backdrop-blur-sm w-full h-full relative border-transparent overflow-scroll border-2'>

       {/* introduction hero */}
        <div className='w-1/2 mt-40 lg:mx-96 space-y-14'>
          <p className='font-mono text-5xl text-center'>Projects</p>
          <div className='text-center'>
            Every project is a unique journey, guided by our commitment to understanding our clients needs and exceeding their expectations. With a blend of cutting-edge technology, strategic thinking, and artistic flair, we transform ideas into tangible results that drive success.
          </div>
        </div>

        {/* tabs */}

        <TabsLgBasic projects={projects}/>

      </div>
    </div>
  )
}

export default Projects


export async function getStaticProps() {

  const { projects } = await import("../../../data/projects.json")


  return {
      props: {
          projects: projects
      }
  }

}