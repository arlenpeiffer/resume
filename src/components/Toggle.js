import React from "react"
import useDarkMode from "../hooks/useDarkMode"
import styles from "./Toggle.styles"

const Toggle = () => {
  const { isDarkMode, toggleTheme } = useDarkMode()

  const label = isDarkMode ? "Light Mode" : "Dark Mode"

  return (
    <button css={styles} onClick={toggleTheme}>
      <span>⟶ </span>
      {label}
    </button>
  )
}

export default Toggle
