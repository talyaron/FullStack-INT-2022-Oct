import { createContext, useContext, useState, FC } from 'react';

interface IColorToggle {
    currColor: string
    toggleColor: () => void
}

const ThemeContext = createContext<IColorToggle>({} as IColorToggle);

export const useColorUpdate = (): IColorToggle => useContext(ThemeContext);

export const ColorTogglerProvider: FC<{ children: React.ReactNode; }> = ({ children }) => {
    const [currColor, setCurrColor] = useState('blue');

    const toggleColor = () => {
        setCurrColor(currColor === 'blue' ? 'red' : 'blue')
    }

    const value: IColorToggle = {
        toggleColor,currColor
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};