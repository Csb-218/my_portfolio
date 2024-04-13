import React from 'react'
import Desktop from '../mockUps/Desktop'
import { useRouter } from 'next/router'

const Projects = ({ projects }) => {

  const router = useRouter()



  return (
    <>
    <div className='bg-transparent backdrop-blur-sm '>

      {/* header */}
      {
        router?.route === '/' && <p className='text-4xl font-serif text-center lg:py-14'>Projects</p>
      }
      

      {/* content section */}
      <div className=" p-5 lg:flex lg:flex-col lg:gap-y-2">

        {
          projects?.map((project, index) => {
            return (
              <>
              <div 
              key={index}
              className='grid lg:grid-cols-2 grid-cols-1 lg:text-start text-center justify-center  '
              >
                {/* project model */}
                <Desktop image={`${project?.image}`} />
                {/* project description */}
                <div className='grid grid-cols-1 lg:gap-y-8 gap-y-4 content-center  lg:p-14 my-4 '>

                  <p className=' font-mono font-bold text-xl'>
                    {project?.projectName}
                  </p>
                  <p >
                   {project?.description}
                  </p>

                  <button
                    onClick={() => router.push(`/projects/${project?.projectName}`)}
                    type="button"
                    className="text-white lg:w-1/4  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-mono font-bold  rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Case Study
                  </button>

                </div>
              </div>
              </>
            )
          })
        }

      </div>

    </div>
    </>
    
  )
}

export default Projects