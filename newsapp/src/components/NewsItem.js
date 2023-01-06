import React, { Component } from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, publishedAt, sources } =
    props;
  return (
    <div className="my-4">
      <div className="card" style={{ width: "18rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span
            className="badge rounded-pill bg-danger"
            //  style={{left:'50%',zIndex:1}}
          >
            {sources}
          </span>
        </div>
        <img
          src={imageUrl}
          style={{ height: "145px", width: "286px" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            {" "}
            <small className="text-muted">
              {" "}
              By {author ? author : "Unknown"} on{" "}
              {publishedAt
                ? new Date(publishedAt).toGMTString()
                : "Unknown time"}{" "}
            </small>{" "}
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
