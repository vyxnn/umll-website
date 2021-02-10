import React from "react";
import "../assets/css/event.css";

const eventPost = ({ event }) => {
 // Formats from ISO time to a readable date format 
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(event.node.date).toLocaleDateString(undefined, options);

  return (
    <div className="event-post">
      <a href={event.node.eventUrl}>
        <img className="event-image" src={event.node.image.publicURL} />
      </a>

      <div className="event-text">
        <div className="event-title">{event.node.title}</div>
        <hr />
        <br />
        <div className="event-date">Date: {date}</div>
        <br />
        <div className="event-blurb">{event.node.summary}</div>
      </div>
    </div>
  );
};

export default eventPost;
