import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
export const runtime = "edge";

const Card = ({
  title = "",
  text,
  imgSrc = "",
}: {
  title: string;
  text: ReactNode;
  imgSrc: string;
}) => {
  
  return (
    <div className="card my-3" style={{ width: "22rem" }}>
      <Image
        src={imgSrc}
        className="card-img-top"
        alt={title}
        width={250}
        height={250}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="card-text">{text}</div>
        <Link href="#" className="btn btn-primary">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
