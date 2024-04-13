import React, { useState, useRef, useEffect } from "react"
import Projects from "../LandingHero/Projects"

export default function TabsLgBasic({projects}) {

  const [tabSelected, setTabSelected] = useState({
    currentTab: 1,
    noTabs: 3,
  })

  const wrapperRef = useRef(null)

  const no_code_projects = projects?.filter(project => project?.category==='no-code')
  const client_projects = projects?.filter(project => project?.category==='client')
  const hobby_projects = projects.filter(project => project?.category==='hobby')


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
    <>
      {/*<!-- Component: Basic lg sized tab full width --> */}
      <section className="w-full  px-20 mt-16 backdrop-blur-sm" ariaMultiselectable="false">
        <ul
          className="flex items-center border-b border-slate-800"
          role="tablist"
          ref={wrapperRef}
        >
          <li className="flex-1" role="presentation ">
            <button
              className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300  hover:stroke-blue-600  focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected.currentTab === 1
                  ? "border-blue-500  text-white hover:border-blue-600  hover:text-blue-600    disabled:border-slate-500"
                  : "justify-self-center border-transparent stroke-slate-700 text-white hover:border-blue-500 hover:text-blue-500 focus:border-blue-600 focus:stroke-blue-600 focus:text-blue-600 disabled:text-slate-500"
              }`}
              id="tab-label-1a"
              role="tab"
              aria-setsize="3"
              aria-posinset="1"
              tabindex={`${tabSelected.currentTab === 1 ? "0" : "-1"}`}
              ariaControls="tab-panel-1a"
              ariaSelected={`${
                tabSelected.currentTab === 1 ? "true" : "false"
              }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 1 })}
            >
              <span>Hobby </span>
            </button>
          </li>
          <li className="flex-1" role="presentation ">
            <button
              className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300  hover:stroke-blue-600  focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected.currentTab === 2
                  ? "border-blue-500  text-white hover:border-blue-600  hover:text-blue-600    disabled:border-slate-500"
                  : "justify-self-center border-transparent stroke-slate-700  text-white hover:border-blue-500 hover:text-blue-500 focus:border-blue-600 focus:stroke-blue-600 focus:text-blue-600 disabled:text-slate-500"
              }`}
              id="tab-label-2a"
              role="tab"
              aria-setsize="3"
              aria-posinset="2"
              tabindex={`${tabSelected.currentTab === 2 ? "0" : "-1"}`}
              ariaControls="tab-panel-2a"
              ariaSelected={`${
                tabSelected.currentTab === 2 ? "true" : "false"
              }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 2 })}
            >
              <span>Freelance</span>
            </button>
          </li>
          <li className="flex-1" role="presentation ">
            <button
              className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300  hover:stroke-blue-600  focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected.currentTab === 3
                  ? "border-blue-500  text-white hover:border-blue-600  hover:text-blue-600    disabled:border-slate-500"
                  : "justify-self-center border-transparent stroke-slate-700  text-white hover:border-blue-500 hover:text-blue-500 focus:border-blue-600 focus:stroke-blue-600 focus:text-blue-600 disabled:text-slate-500"
              }`}
              id="tab-label-3a"
              role="tab"
              aria-setsize="3"
              aria-posinset="3"
              tabindex={`${tabSelected.currentTab === 3 ? "0" : "-1"}`}
              ariaControls="tab-panel-3a"
              ariaSelected={`${
                tabSelected.currentTab === 3 ? "true" : "false"
              }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 3 })}
            >
              <span>No-Code</span>
            </button>
          </li>
        </ul>
        <div className="">
          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === 1 ? "" : "hidden"
            }`}
            id="tab-panel-1a"
            ariaHidden={`${tabSelected.currentTab === 1 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-1a"
            tabindex="-1"
          >
            <Projects projects={hobby_projects} />
          </div>
          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === 2 ? "" : "hidden"
            }`}
            id="tab-panel-2a"
            ariaHidden={`${tabSelected.currentTab === 2 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-2a"
            tabindex="-1"
          >
            <Projects projects={client_projects} />
          </div>
          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === 3 ? "" : "hidden"
            }`}
            id="tab-panel-3a"
            ariaHidden={`${tabSelected.currentTab === 3 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-3a"
            tabindex="-1"
          >
           <Projects projects={no_code_projects} />
          </div>
        </div>
      </section>
      {/*<!-- End Basic lg sized tab full width --> */}
    </>
  )
}