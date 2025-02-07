import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
export const runtime = "edge";

const Card = ({
  id,
  title,
  text,
  imgSrc,
  slug,
}: {
  id: string;
  title: string;
  text: ReactNode;
  imgSrc: string;
  slug: string;
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
        <Link
          href={{ pathname: `/blogs/blog-details`, query: { id } }}
          className="btn btn-primary"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
