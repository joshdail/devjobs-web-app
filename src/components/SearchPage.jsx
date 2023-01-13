import React, { useState, useEffect } from "react"
import SearchBar from "./SearchBar"
import SearchGrid from "./SearchGrid"
import SearchMobile from "./SearchMobile"

export default function SearchPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [size, setSize] = useState(window.innerWidth)

  useEffect(() => {
    function updateSize() {
      setSize(window.innerWidth)
    }
    window.addEventListener("resize", updateSize)
    return () => {
      window.removeEventListener("resize", updateSize)
    }
  }, [])

  const [params, setParams] = useState(null)

  function submitQuery(query) {
    setParams({ ...query })
  }

  function handleClick(e) {
    e.preventDefault()
    e.target.blur()
    props.requestMoreData()
  }

  return (
    <main id="main">
      {size >= 720 ? (
        <SearchBar
          submitQuery={submitQuery}
          placeholderText={
            size >= 1200
              ? "Filter by title, companies, expertise..."
              : "Filter by title..."
          }
          labelText={size >= 1200 ? "Full Time Only" : "Full Time"}
        />
      ) : (
        <SearchMobile submitQuery={submitQuery} />
      )}

      <SearchGrid
        data={props.data}
        switchViewMode={props.switchViewMode}
        params={params}
      />
      <div className="load-more-btn-container">
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Load More
        </button>
      </div>
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/joshdail">Josh Dail</a>.
      </div>
    </main>
  )
}
