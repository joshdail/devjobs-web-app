import React, { useState, useEffect } from "react"
import magnifierUrl from "../assets/desktop/icon-search.svg"
import locationUrl from "../assets/desktop/icon-location.svg"

export default function SearchBar(props) {
  const [query, setQuery] = useState({
    job: "",
    location: "",
    fullTimeOnly: false
  })

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
    e.target.blur()
    props.submitQuery(query)
  }

  return (
    <div className="search-bar width-default">
      <div className="search-input-container search-job">
        <img className="img-search img-magnifier" src={magnifierUrl} />
        <input
          type="text"
          className="input input-job"
          placeholder={props.placeholderText}
          name="job"
          id="job"
          value={query.job}
          onChange={handleChange}
        />
        <span></span>
      </div>
      <div className="search-input-container search-location">
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
          {props.labelText}
        </label>
        <button
          className="btn btn-primary btn-search"
          onClick={e => handleSubmit(e)}
        >
          Search
        </button>
      </div>
    </div>
  )
}
