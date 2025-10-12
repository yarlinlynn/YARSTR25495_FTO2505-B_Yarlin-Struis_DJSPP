import { BsSun, BsMoon } from 'react-icons/bs';
import { useTheme } from "../Shared/ThemeContext.jsx";

/**
 * A button component that allows users to switch between light and dark themes.
 *
*/

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? <BsMoon /> : <BsSun />}
    </button>
  );
}

export default ThemeToggle