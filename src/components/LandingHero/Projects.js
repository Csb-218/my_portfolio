import React from 'react'
import Desktop from '../mockUps/Desktop'
import { useRouter } from 'next/router'

const Projects = () => {

     const router = useRouter()

  return (
    <div className='bg-transparent backdrop-blur-sm '>

      {/* header */}
      <p className='text-4xl font-serif text-center lg:py-14'>Projects</p>

      {/* content section */}
      <div className=" p-5 grid lg:grid-cols-2 grid-cols-1 gap-x-4 lg:gap-y-32 gap-y-20 justify-center place-content-center">

        {/* project model */}
        <Desktop image={'/FireTube.png'} />
        {/* project description */}
        <div className='grid grid-cols-1 lg:gap-y-8 gap-y-4 place-content-center lg:p-14'>

          <p className=' font-mono font-bold text-xl'>
            FireTube
          </p>
          <p >
            FireTube is a simple clone of YouTube.
            I created it&apos;s entire frontend from scratch.
            It works as good as YouTube.
          </p>

          <button 
            onClick={()=>router.push('/project/Fire Tube')}
            type="button" 
            className="text-white lg:w-1/4 w-1/2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-mono font-bold  rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Case Study
          </button>

        </div>

        {/* project model */}
        <Desktop image={'/OpenFactory.png'} />
        {/* project description */}
        <div className='grid grid-cols-1 lg:gap-y-8 gap-y-4 place-content-center lg:p-14'>

          <p className=' font-mono font-bold text-xl'>
            The Open Factory
          </p>
          <p>
            The Open Factory is a prototype model for a startup.
            It is a real time data-tracking web application.
            This, I created with React CRA template.
          </p>

          <button 
            onClick={()=>router.push('/project/The Open Factory')}
            type="button" 
            className="text-white lg:w-1/4 w-1/2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-mono font-bold  rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Case Study
          </button>


        </div>

        {/* project model */}
        <Desktop image={'/TweetX.png'} />
        {/* project description */}
        <div className='grid grid-cols-1 lg:gap-y-8 gap-y-4 place-content-center lg:p-14'>

          <p className=' font-mono font-bold text-xl'>
            TweetX
          </p>
          <p>
            TweetX is a replica model of an ideal social platform.
            As the name suggests it is inspired from Twitter.
            The app is built on MERN stack with a little twist.
          </p>

          <button 
            onClick={()=>router.push('/project/TweetX')}
            type="button" 
            className="text-white lg:w-1/4 w-1/2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-mono font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Case Study
          </button>
          
        </div>
      </div>

    </div>
  )
}

export default Projects