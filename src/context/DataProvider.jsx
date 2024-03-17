import { createContext, useState } from "react";

export const DataContext = createContext(null);


const DataProvider = ({children}) =>{
    const [activeLink, setActiveLink] = useState('');

    return (
        <DataContext.Provider value = {{
            activeLink,
            setActiveLink
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;