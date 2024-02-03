import {useEffect} from 'react'
import { useRouter } from 'next/router'
import Desktop from '@/components/mockUps/Desktop'
import Footer from '@/components/footer/Footer'
import { useNav } from '@/context/NavContext'

export async function getStaticProps(context) {

    const { projects } = await import("../../../data/data.json")
    const { p_name } = context?.params
    const project = projects?.find(project => project?.projectName === p_name)


    return {
        props: {
            project: project
        }
    }

}

export async function getStaticPaths() {

    const { projects } = await import("../../../data/data.json")

    const allPaths = projects?.map(project => {
        return {
            params: {
                p_name: project?.projectName
            }
        }
    })
    return {
        paths: allPaths,
        fallback: false
    }
}

export default function Project({ project }) {

    const {setPage} = useNav()
    
    useEffect(()=>{
        console.log(project)
        setPage('projects')
    },[])


    return (
        <div className={` h-screen fixed w-screen top-0 overflow-scroll bg-center bg-no-repeat bg-cover bg-blend-multiply bg-[url('/bg2.jpg')] `} >

            <div className='grid grid-cols-1 gap-y-20 py-60 justify-items-center  backdrop-blur-sm'>
                <div className="grid grid-cols-1 gap-y-6 place-content-center lg:w-1/2 text-center">

                    <p className="text-4xl font-serif ">
                        {project?.projectName}
                    </p>

                    <p className=" font-mono ">
                        This page contains the case study of {project?.projectName} Open-Source Project which includes the Project Overview, Tools Used and Live Links to the official product.
                    </p>
                </div>

                <div className=" grid grid-cols-1 lg:text-start text-center  gap-y-10 place-content-center lg:w-1/2 ">

                    <Desktop image={project?.image} />

                    <p className="font-serif text-4xl">Project Overview</p>

                    <p>
                        {project?.description}
                    </p>

                    <div >
                        <p className="lg:font-thin">Key Features</p>
                        {
                            project?.keyFeatures?.map((keyFeature, index) => {
                                return (
                                    <button
                                        key={index}
                                        type="button"
                                        disabled
                                        className=" rounded-3xl text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                    >
                                        {keyFeature}
                                    </button>
                                )
                            })
                        }
                    </div>

                </div>

                {/* Tools used */}
                <div className="lg:w-1/2 lg:text-start text-center">
                    <p className="lg:font-thin">Tools Used</p>

                    {
                        project?.tools?.map((tool, index) => {
                            return (
                                <button
                                    key={index}
                                    type="button"
                                    disabled
                                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                >
                                    {tool}
                                </button>
                            )
                        })
                    }

                </div>


                <div className=" lg:w-1/2 lg:text-start text-center">
                    <p>Links</p>

                    <div className='flex gap-x-3 '>
                        <a
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            href={ project?.links?.github?.client || project?.links?.github }
                        >
                            Code
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                        <a
                            href={project?.links?.live_url}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Visit
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>

                </div>
            </div>

         <Footer/>
        </div>
    )
}

