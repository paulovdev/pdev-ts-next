// context/ThemeContext.tsx

"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
    theme: string;
    changeTheme: (selectedTheme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const getInitialTheme = () => {
        const selectedTheme = localStorage.getItem("theme");
        if (selectedTheme) {
            return selectedTheme;
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };

    const [theme, setTheme] = useState<string>(getInitialTheme);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const changeTheme = (selectedTheme: string) => {
        setTheme(selectedTheme);
        localStorage.setItem("theme", selectedTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
