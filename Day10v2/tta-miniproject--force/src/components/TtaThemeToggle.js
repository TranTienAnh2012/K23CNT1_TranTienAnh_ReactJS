import React from 'react';
import { useTheme } from '../Contexts/TtaThemeContexts';

const TtaThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? 'Chuyển sang chế độ tối' : 'Chuyển sang chế độ sáng'}
    </button>
  );
};

export default TtaThemeToggle;
