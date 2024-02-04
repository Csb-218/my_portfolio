import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useNav } from '@/context/NavContext'

const Navbar = () => {

    const { setSection, section, setPage, page } = useNav()
    const [show,setShow] = useState(false)

    const router = useRouter()

    return (
        <>
            <nav className=" backdrop-blur-md bg-transparent  fixed w-full z-50 top-0 start-0  dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src="/me.png" className="rounded-full h-10 w-10 object-cover" alt="my Logo" width={100} height={100} />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CS Bhagwant</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button 
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={()=>{
                                setSection('contact')  
                                router?.pathname !=='/' && router.push('/')
                                  
                              }}
                        >
                            Contact
                        </button>
                        <button 
                          onClick={()=>setShow(!show)}
                         type="button"
                          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between  w-full md:flex md:w-auto md:order-1 ${show?"flex":"hidden"}`} >
                        <ul className="flex flex-col w-full p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <button
                                    className="block py-2 px-3 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700  dark:border-gray-700"
                                    onClick={() => {
                                        setSection('home')
                                        router?.pathname !== '/' && router.push('/')
                                    }}
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button
                                    className="block py-2 px-3  rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700  dark:border-gray-700"
                                    onClick={() => {
                                        setSection('about')
                                        router?.pathname !== '/' && router.push('/')

                                    }}
                                >
                                    About
                                </button>
                            </li>
                            {/* <li>
                                <a href="#" className="block py-2 px-3  rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700  dark:border-gray-700">Services</a>
                            </li> */}
                            <li>
                                <button
                                    className="block py-2 px-3 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700  dark:border-gray-700"
                                    onClick={() => {

                                        setSection('projects')
                                        router?.pathname !== '/' && router.push('/')
                                        // window.scrollTo(0,1350)
                                    }}
                                >
                                    Projects
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



        </>
    )
}

export default Navbar