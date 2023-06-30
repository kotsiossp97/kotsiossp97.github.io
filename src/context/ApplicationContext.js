import { useState, createContext, useContext, useEffect } from "react";
import { lightTheme, darkTheme } from "../components/Themes";
import Links from "../static/Links";
import useLocation from "./useLocation";

const StateContext = createContext();

const currentUrlHash = (currentHash) => {
    if(currentHash){
        const link = Links.filter( link => link.href === currentHash)
        return link.length ? Links.indexOf(link[0]) : 0
    }
    else{
        return 0
    }
}

export const ContextProvider = ({children}) => {
    const hash = useLocation();
    
    const [theme, setTheme] = useState('system')
    const [activeLink, setActiveLink] = useState(currentUrlHash(hash))

    useEffect(()=>{
        setActiveLink(currentUrlHash(hash))
    }, [hash])

    const getMuiTheme = ()=>{

        if( theme === "system"){
            return getSystemTheme()
        }
        else{
            return theme==="light"?lightTheme:darkTheme
        }
    }

    const getSystemTheme = () => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // dark mode
            return darkTheme
        }
        else{
            return lightTheme
        }
    }

    return (
        <StateContext.Provider 
            value={{
                theme,
                setTheme,
                getSystemTheme,
                getMuiTheme,
                activeLink,
                setActiveLink,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)