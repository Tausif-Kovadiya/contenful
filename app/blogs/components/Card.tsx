import React from "react";
import Image from "next/image";

const Card = ({
  title = "",
  text,
  imgSrc = "",
}: {
  title: string;
  text: any;
  imgSrc: string;
}) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <Image
        src={imgSrc}
        className="card-img-top"
        alt={title}
        width={288}
        height={180}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
