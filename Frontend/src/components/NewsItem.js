import React from "react";
import samplePhoto from "./SamplePhoto.jpg";

const NewsItem = ({ title, description, urlToImage, url, mode, author, date, source }) => {
  const myStyle = {
    color: mode === "dark" ? "white" : "black",
    backgroundColor: mode === "dark" ? "black" : "white",
  };

  return (
    <div className="my-3">
      <div className="card">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ left: "90%", zIndex: "1" }}
        >
          {source}
          <span className="visually-hidden">unread messages</span>
        </span>

        <img
          src={!urlToImage ? samplePhoto : urlToImage}
          className="card-img-top"
          alt="news"
        />

        <div className="card-body" style={myStyle}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className={`btn btn-${mode === "dark" ? "primary" : "dark"}`}
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
