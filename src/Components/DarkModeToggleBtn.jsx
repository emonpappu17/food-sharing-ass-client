import { useDarkMode } from "../Hooks/useDarkMode";

const DarkModeToggleBtn = () => {
    const [isDarkMode, setIsDarkMode] = useDarkMode();
    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
    }
    return (
        <div>
            {/* <input onClick={handleToggle} type="checkbox" value="synthwave" className="toggle theme-controller" /> */}
            <button
                onClick={handleToggle}
                className="px-4 py-2 font-semibold text-white bg-violet-600 rounded-md dark:bg-violet-400 dark:text-black"
            >
                {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    );
};

export default DarkModeToggleBtn;