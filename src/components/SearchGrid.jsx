import React, { useState, useEffect } from "react"
import Card from "./Card"

export default function SearchGrid(props) {
  function filterData() {
    const filteredData = []
    const fullTimeOnly = props?.params?.fullTimeOnly || null
    const job = props?.params?.job?.toLowerCase() || null
    const location = props?.params?.location?.toLowerCase() || null
    for (const entry of props.data) {
      console.log()
      if (fullTimeOnly && entry.contract !== "Full Time") {
        continue
      }
      if (
        location &&
        entry.location.toLowerCase().includes(location) === false
      ) {
        continue
      }
      if (
        job &&
        entry.company.toLowerCase().includes(job) === false &&
        entry.position.toLowerCase().includes(job) === false &&
        entry.requirements.content.toLowerCase().includes(job) === false &&
        entry.requirements.items.join().toLowerCase().includes(job) === false &&
        entry.role.content.toLowerCase().includes(job) === false &&
        entry.role.items.join().toLowerCase().includes(job) === false
      ) {
        continue
      }
      filteredData.push(entry)
    }
    return filteredData
  }

  function generateCards() {
    const cardsArray = []
    const filteredData = props.params !== null ? filterData() : props.data
    for (const entry of filteredData) {
      cardsArray.push(
        <Card
          key={entry.id}
          data={entry}
          switchViewMode={props.switchViewMode}
        />
      )
    }
    return cardsArray
  }

  return <div className="search-grid width-default">{generateCards()}</div>
}
