import { useState, useEffect } from "react"
import Header from "./components/Header"
import SearchPage from "./components/SearchPage"
import DetailPage from "./components/DetailPage"

function App() {
  const [data, setData] = useState([])
  const [limit, setLimit] = useState(12)
  const [displayGrid, setdisplayGrid] = useState(true)
  const [detail, setDetail] = useState({})

  useEffect(() => {
    fetch("src/data.json", { mode: "no-cors" })
      .then(res => res.json())
      .then(jsonArray => {
        const filteredArray = jsonArray.slice(0, limit)
        setData([...filteredArray])
      })
  }, [limit])

  function requestMoreData() {
    setLimit(prevLimit => prevLimit + 6)
  }

  function switchViewMode(id) {
    if (id) {
      setdisplayGrid(prevDisplayGrid => !prevDisplayGrid)
      setDetail(data.find(entry => entry.id === id) || null)
    } else {
      setdisplayGrid(true)
    }
  }

  return (
    <>
      <Header switchViewMode={switchViewMode} />
      {displayGrid ? (
        <SearchPage
          data={data}
          requestMoreData={requestMoreData}
          switchViewMode={switchViewMode}
        />
      ) : (
        <DetailPage data={detail} />
      )}
    </>
  )
}

export default App
