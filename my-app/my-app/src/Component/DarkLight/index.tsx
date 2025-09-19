import { useState, useEffect } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Moon, Sun } from 'lucide-react';

function DarkLight() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  useEffect(() => {
    // const storedTheme = localStorage.getItem('theme') || 'light';
    // setTheme(storedTheme);
    // document.documentElement.classList.toggle(
    //   storedTheme === 'dark' ? 'light' : 'dark'
    // );
  }, []);

  return (
    <div className='mt-10 flex flex-col gap-4 transition-all ease-in-out items-center justify-center text-black dark:text-white'>
      <button
        onClick={toggleTheme}
        className='rounded-full p-2 shadow-md shadow-purple-400 cursor-pointer text-gray-600 hover:text-purple-400 transition-all ease-in-out bg-black dark:bg-white dark:shadow-amber-400 dark:hover:text-amber-400'
      >
        {' '}
        {theme === 'light' ? <Moon /> : <Sun />}
      </button>
      <div className='dark:text-white text-black'>
        {theme === 'light'
          ? '☀️ Bright Mode Activated'
          : '🌙 Welcome to the dark side'}
      </div>
    </div>
  );
}

export default DarkLight;
