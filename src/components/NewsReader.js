import React, { Component } from "react";

export class NewsReader extends Component {
  render() {
    let { title, description, link, newsUrl, author, date, source} = this.props;
    return (
      <div className="container mt-5">
        <div className="card" style={{ width: "18rem" }}>
          <img src={link} className="card-img-top" alt="img" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <span className="badge bg-primary text-light">{source}</span>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small class="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}{" "}
              </small>
            </p>
            <a href={newsUrl} className="btn btn-primary bg-dark">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsReader;
