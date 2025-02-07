import React, { Fragment } from "react";
import { client } from "../contentful/Client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Card from "./components/Card";

interface Item {
  blogId: number;
  blogTitle: string;
  slug: string;
  tags: string[];
  blogDescription: string;
  blogImage: string;
}

const Blogs = async () => {
  const { items }: { items: any[] } = await client.getEntries({
    content_type: "blogs",
  });
  console.log(items);
  return (
    <>
      <h1>Blogs</h1>
      <br />
      {items.map((item) => (
        <Fragment key={item?.fields?.blogId}>
          {/* <Card
            title={item?.fields?.blogTitle}
            text={documentToReactComponents(item?.fields?.blogDescription)}
            imgSrc={`https:${item?.fields?.blogImage?.fields?.file?.url}`}
          /> */}
          <h4>{item?.fields?.blogTitle}</h4>
          <Image
            alt={item?.fields?.blogTitle}
            width={250}
            height={250}
            src={`https:${item?.fields?.blogImage?.fields?.file?.url}`}
          />
          <div style={{ margin: 10 }}>
            {documentToReactComponents(item?.fields?.blogDescription)}
          </div>
        </Fragment>
      ))}
    </>
  );
};

export default Blogs;
