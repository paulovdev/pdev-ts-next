// components/ThemeChange.tsx

"use client";

import { useTheme } from "../../context/ThemeContext";
import { IoSunnySharp, IoMoon } from "react-icons/io5";

export default function ThemeChange() {
    const { theme, changeTheme } = useTheme();

    const handleToggle = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        changeTheme(newTheme);
    };

    return (
        <div onClick={handleToggle} className="toggle-switch">
            {theme === "dark" ? <IoMoon /> : <IoSunnySharp />}
        </div>
    );
};
