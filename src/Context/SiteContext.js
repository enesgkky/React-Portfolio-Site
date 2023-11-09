import { createContext, useState } from "react";
const Context = createContext();

const Provider = ({ children }) => {

    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('en');

    const data = {
        theme,language,
        setTheme,setLanguage
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export { Provider, Context}