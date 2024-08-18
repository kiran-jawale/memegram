import React,{useContext, createContext} from "react";

const themeContext = createContext({ isModern: true, toggleTheme: () => {} });

const ThemeProvider = function({children}) {
    const [isModern, setIsModern] = useState(true);
    function toggleTheme() {
        setIsModern(prev => !prev);
    }

    return (
        <themeContext.Provider value={{isModern, toggleTheme}}>
            {children}
        </themeContext.Provider>
    )
}

const useTheme = () => useContext(themeContext);

export {ThemeProvider, useTheme}