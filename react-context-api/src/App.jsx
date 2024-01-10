import { useEffect, useState } from 'react'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './context/theme'
import LoginForm from './components/LoginForm'
import ShowLoginFormData from './components/ShowLoginFormData'
import { LoginFormContext } from './context/LoginFormContext'


export default function App() {
  const [themeMode, setThemeMode] = useState('light');
  const lightMode = () => { setThemeMode('light') };
  const darkMode = () => { setThemeMode('dark') };

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode);
  })
  const [loginFormContext, setLoginFormContext] = useState(null);

  return (
    <div className='text-gray-700 dark:text-gray-50'>
      <ThemeProvider value={{themeMode, lightMode, darkMode}}>
        <ThemeBtn />
      </ThemeProvider>
      <p className='text-xl text-center py-8'>Welcome to React Context API demo</p>
      <LoginFormContext.Provider value={{loginFormContext, setLoginFormContext}}>
        <div className='flex flex-col justify-center items-center mt-8 space-y-6'>
          <LoginForm />
          <ShowLoginFormData />
        </div>
      </LoginFormContext.Provider>
    </div>
  )
}
