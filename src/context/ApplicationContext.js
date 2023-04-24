import { useState, createContext, useContext } from "react";
import { lightTheme, darkTheme } from "../components/Themes";
import Links from "../static/Links";

const StateContext = createContext();

export const ContextProvider = ({children}) => {
    const currentUrlHash = () => {
        if(window.location.hash){
            const link = Links.filter( link => link.href === window.location.hash)
            return link.length ? Links.indexOf(link[0]) : 0
        }
        else{
            return 0
        }
    }
    const [theme, setTheme] = useState('system')
    const [activeLink, setActiveLink] = useState(currentUrlHash())

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