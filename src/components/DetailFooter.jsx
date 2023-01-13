import React from "react"

export default function DetailFooter(props) {
  return (
    <footer className="detail-footer">
      <div className="footer-content-container width-small">
        <div className="footer-text-container">
          <h3 className="footer-title">{props.data.position}</h3>
          <p>{props.data.company}</p>
        </div>
        <a
          href={props.data.apply}
          target="_blank"
          className="btn btn-primary btn-footer"
        >
          Apply Now
        </a>
      </div>
    </footer>
  )
}
