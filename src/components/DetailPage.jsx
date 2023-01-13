import React, { useEffect } from "react"
import DetailBanner from "./DetailBanner"
import DetailContent from "./DetailContent"
import DetailFooter from "./DetailFooter"

export default function DetailPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <main id="main" className="detail-page">
        <DetailBanner data={props.data} />
        <DetailContent data={props.data} />
      </main>
      <DetailFooter data={props.data} />
    </>
  )
}
