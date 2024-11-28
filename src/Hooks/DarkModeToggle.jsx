import { useDarkMode } from "./useDarkMode";

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useDarkMode();

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode); // Toggle the mode
    };

    return (
        <button
            onClick={handleToggle}
            className="px-4 py-2 font-semibold text-white bg-violet-600 rounded-md dark:bg-violet-400 dark:text-black"
        >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
    );
};

export default DarkModeToggle;
