import React, { useState, createContext, useContext, useEffect } from "react";
import Links from "../static/Links";
import useLocation from "./useLocation";
import { darkTheme, lightTheme } from "@/components/Themes";

interface IStateContext {
  theme: string;
  setTheme: (theme: string) => void;
  getSystemTheme: () => typeof lightTheme | typeof darkTheme;
  getMuiTheme: () => typeof lightTheme | typeof darkTheme;
  activeLink: number;
  setActiveLink: (link: number) => void;
}

const StateContext = createContext<IStateContext>({} as IStateContext);

const currentUrlHash = (currentHash?: string) => {
  if (currentHash) {
    const link = Links.filter((link) => link.href === currentHash);
    return link.length ? Links.indexOf(link[0]) : 0;
  } else {
    return 0;
  }
};

export const ContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const hash = useLocation();

  const [theme, setTheme] = useState("system");
  const [activeLink, setActiveLink] = useState(currentUrlHash(hash));

  useEffect(() => {
    setActiveLink(currentUrlHash(hash));
  }, [hash]);

  const getMuiTheme = () => {
    if (theme === "system") {
      return getSystemTheme();
    } else {
      return theme === "light" ? lightTheme : darkTheme;
    }
  };

  const getSystemTheme = () => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      // dark mode
      return darkTheme;
    } else {
      return lightTheme;
    }
  };

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
  );
};

export const useStateContext = () => useContext(StateContext);
