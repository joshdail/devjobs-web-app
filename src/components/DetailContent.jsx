import React from "react"

export default function DetailContent(props) {
  function generateListItems(arr) {
    return arr.map(item => <li>{item}</li>)
  }

  return (
    <div className="detail-content width-small">
      <section className="section-hero">
        <div className="hero-title-container">
          <div className="hero-text-container">
            <p>
              {props.data.postedAt}&nbsp;&nbsp;
              <span className="dot">&#8228;</span>
              &nbsp;&nbsp;
              {props.data.contract}
            </p>
            <h1 className="hero-title">{props.data.position}</h1>
            <h5 className="hero-location">{props.data.location}</h5>
          </div>
          <a href={props.data.apply} className="btn btn-primary btn-modal">
            Apply Now
          </a>
        </div>
        <p className="description">{props.data.description}</p>
      </section>
      <section className="section-info">
        <h2 className="section-title">Requirements</h2>
        <p>{props.data.requirements.content}</p>
        <ul>{generateListItems(props.data.requirements.items)}</ul>
      </section>
      <section className="section-info">
        <h2 className="section-title">What You Will Do</h2>
        <p>{props.data.role.content}</p>
        <ol>{generateListItems(props.data.role.items)}</ol>
      </section>
    </div>
  )
}
