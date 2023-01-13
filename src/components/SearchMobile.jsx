import React, { useState, useEffect } from "react"
import filterUrl from "../assets/mobile/icon-filter.svg"
import magnifierUrl from "../assets/desktop/icon-search.svg"
import locationUrl from "../assets/desktop/icon-location.svg"

export default function SearchMobile(props) {
  const [query, setQuery] = useState({
    job: "",
    location: "",
    fullTimeOnly: false
  })

  const [modalActive, setModalActive] = useState(false)

  function toggleModal(e) {
    e.preventDefault()
    e.target.blur()
    setModalActive(prevModalActive => !prevModalActive)
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setQuery(prevQuery => {
      return {
        ...prevQuery,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    toggleModal(e)
    props.submitQuery(query)
  }
  return (
    <div className="search-mobile width-default">
      <input
        type="text"
        className="input input-job input-job-mobile"
        placeholder="Filter by title..."
        name="job"
        id="job"
        value={query.job}
        onChange={handleChange}
      />
      <span></span>
      <img className="img-filter-icon" src={filterUrl} alt="filter icon" />
      <button
        type="button"
        class="btn btn-square"
        aria-label="Open search options"
        onClick={e => toggleModal(e)}
      >
        <img
          className="img-mobile-btn"
          src={magnifierUrl}
          alt="magnifying glass"
        />
      </button>
      <div className={modalActive ? "modal-wrapper" : "modal-wrapper hidden"}>
        <div className={"modal"}>
          <div className="search-modal-container">
            <img className="img-search img-location" src={locationUrl} />
            <input
              type="text"
              className="input input-location"
              placeholder="Filter by location..."
              name="location"
              id="location"
              value={query.location}
              onChange={handleChange}
            />
            <span></span>
          </div>
          <div className="search-controls-container">
            <input
              type="checkbox"
              className="checkbox-default"
              name="fullTimeOnly"
              id="fullTimeOnly"
              checked={query.fullTimeOnly}
              onChange={handleChange}
              tabindex="-1"
            />
            <label className="label-checkbox" for="fullTimeOnly" tabindex="0">
              <span></span>
              Full Time Only
            </label>
            <button
              className="btn btn-primary btn-modal"
              onClick={e => handleSubmit(e)}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
