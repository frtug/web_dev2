import { useState } from 'react'
import {Provider} from 'react-redux'
import './App.css'
import CounterApp from './components/CounterApp'
import {store } from './app/store'
import { useTheme } from './hooks/themeHook';
import { Moon, Sun } from 'lucide-react'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
    >
      {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

function App() {

  return (
    <Provider store={store}>
      <ThemeToggle/>
      <CounterApp/>
    </Provider>
  )
}

export default App
