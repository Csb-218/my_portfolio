import {useContext,createContext,useState,useEffect} from 'react'
import { useRouter } from 'next/router'

const NavContext = createContext()

export const NavProvider = ({children}) => {

    const router = useRouter()

    const [section,setSection] = useState('home')
    
    const [page,setPage] = useState('/')
 
    const [scroll,setScroll] = useState(0)

    useEffect(()=>{


       section === 'home' && setScroll(0)
 
       section === 'about' && setScroll(550) 

       section === 'projects' && setScroll(1350) 

       section === 'contact' && setScroll(2500)

       console.log(section , scroll)
    },[section])
  

    return <NavContext.Provider value={{section,setSection,setPage,scroll}}>{children}</NavContext.Provider>
}

export const useNav = () =>{
    return useContext(NavContext)
}

