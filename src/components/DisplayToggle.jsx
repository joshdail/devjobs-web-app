import React, { useState, useEffect } from "react"

export default function DisplayToggle() {
  const body = document.querySelector("body")
  useEffect(() => {
    const defaultMode = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light"
    body.dataset.display =
      sessionStorage.getItem("devjobs_display_mode") || defaultMode
  }, [])

  const [displayMode, setDisplayMode] = useState(body.dataset.display)

  function handleClick(e) {
    e.preventDefault()
    e.target.blur()
    setDisplayMode(prevDisplayMode => {
      const newDisplayMode = prevDisplayMode === "dark" ? "light" : "dark"
      body.dataset.display = newDisplayMode
      sessionStorage.setItem("devjobs_display_mode", newDisplayMode)
      return newDisplayMode
    })
  }

  return (
    <div className="display-toggle">
      <img src="src/assets/desktop/icon-sun.svg" alt="light mode" />
      <button
        type="button"
        className="btn-display-switch"
        onClick={e => {
          handleClick(e)
        }}
        aria-label={
          displayMode === "dark"
            ? "Switch to light mode"
            : "Switch to dark mode"
        }
      />
      <img src="src/assets/desktop/icon-moon.svg" alt="dark mode" />
    </div>
  )
}
