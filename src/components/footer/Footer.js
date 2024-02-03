import React from 'react'
import Image from 'next/image'

const Footer = () => {

    return (
        <footer className="bg-transparent rounded-lg shadow  dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 text-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                    © 2024 <a href="https://flowbite.com/" className="hover:underline">csbhagwant</a>. All Rights Reserved.
                </span>
                {/* <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul> */}
            </div>
        </footer>
    )
}

export default Footer