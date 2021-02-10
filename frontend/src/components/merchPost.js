import React from "react";
import "../assets/css/merch.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

//Consists of the title, images (mapped to a carousel) and the text 
const merchPost = ({ merch }) => {
  var hasDescription = merch.node.description;
  return (
    <div className="merch-div">
      <div className="merch-title">
        <hr />
        {merch.node.name}
        <hr />
      </div>
      <div className="merch-body">
        <div className="merch-carousel">
        {/** Added scrolling images */}
          <Carousel showArrows={true}>
            {merch.node.image.map((i) => (
              <div key={i.id} style={{ background: "#000000" }}>
                <img
                  key={i.id}
                  className="merch-image"
                  src={`${process.env.GATSBY_API_URL}${i.url}`}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="merch-description">
        {/**Checking if it has a description or not */}
          {hasDescription && (
            <div>
              {merch.node.description}
              <br /> <br />
            </div>
          )}
          <div className="merch-price">
            Member Price: ${merch.node.memberPrice}
            <br />
            Non Member Price: ${merch.node.nonMemberPrice}
          </div>
        </div>
      </div>
    </div>
  );
};

export default merchPost;
