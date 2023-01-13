import React from "react"

export default function DetailBanner(props) {
  return (
    <section className="detail-banner width-small">
      <div
        className="banner-logo"
        style={{ backgroundColor: props.data.logoBackground }}
      >
        <img
          className="banner-logo-img"
          src={`/${props.data.logo}`}
          alt={`${props.data.company} company logo`}
        />
      </div>
      <div className="banner-items-container">
        <div className="banner-text-container">
          <h2 className="banner-title">{props.data.company}</h2>
          <p>{`${props.data.company.replace(" ", "").toLowerCase()}.com`}</p>
        </div>
        <a
          href={props.data.website}
          target="_blank"
          className="btn btn-secondary"
        >
          Company Site
        </a>
      </div>
    </section>
  )
}
