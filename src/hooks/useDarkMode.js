import { useEffect, useState } from "react"

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const theme = isDarkMode ? "dark" : "light"

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return {
    isDarkMode,
    toggleTheme: () => setIsDarkMode(!isDarkMode),
  }
}

export default useDarkMode
