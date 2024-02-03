import React from 'react'
import Image from 'next/image'

const AboutMe = () => {
  return (

    <div className='bg-transparent backdrop-blur-sm py-20'>
      {/* header */}
      <div>
        <p className="text-center font-serif text-4xl ">About Me</p>
        <p className="text-center font-mono my-10 lg:px-96">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.</p>
      </div>

      {/* content */}
      <div className='grid lg:grid-cols-2 grid-cols-1 '>

        {/* about content */}
        <div className=''>
          <p className="text-2xl text-center my-5">Get to know me!</p>
          <p className="p-2 lg:mx-20 my-5 font-thin">
            I&apos;m a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
            I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community.
            Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming
            I&apos;m open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don&apos;t hesitate to contact me.
          </p>
        </div>

        {/* skills section */}
        <div className=' grid grid-cols-1 justify-items-center space-y-10'>
          <p className="text-2xl">Skills</p>
          {/* tech stack */}
          <div className="grid grid-cols-4 gap-x-12 gap-y-4 items-center lg:px-0 px-6">
            <span className='text-center flex flex-col items-center '>
              <Image 
              src={`/html.svg`} 
              alt='' 
              width={50} 
              height={50}
               />
               <p className=''>HTML</p>
            </span>
            <span className='text-center flex flex-col items-center '>
              <Image src={`/css.svg`} alt='' width={50} height={50}  />
              <p className=''>CSS</p>
            </span>
            <span className='text-center flex flex-col items-center '>
              <Image src={`/javascript.svg`} alt='' width={50} height={50}  />
              <p>javascript</p>
            </span>
            <span className='text-center flex flex-col items-center '>
              <Image src={`/tailwind-css.svg`} alt='' width={50} height={50} />
              <p>Tailwind</p>
            </span>
            <span className='text-center flex flex-col items-center '>
              <Image src={`/react.svg`} alt='' width={50} height={50} />
              <p>React</p>
            </span>
            <span className='text-center flex flex-col items-center bg-white rounded-full'>
              <Image src={`/next-js-icon.png`} alt='' width={100} height={100} className='shadow-md '/>
              
            </span>
            <span className='text-center flex flex-col items-center '>
              <Image src={`/node-js.svg`} alt='' width={50} height={50}  />
              <p>Node</p>
            </span>
            <span className='text-center flex flex-col items-center '>
              <Image src={`/express-js.png`} alt='' width={100} height={100} />
              
            </span>
            <span className='text-center flex flex-col items-center '>
              <Image src={`/mongodb.svg`} alt='' width={50} height={50} />
              <p>MongoDb</p>
            </span>









          </div>
        </div>

      </div>

    </div>
  )
}

export default AboutMe