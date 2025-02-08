"use client";

// import { client } from "../contentful/Client";
import { createClient } from "contentful";

// const getEnvVariable = (name: string): string => {
//   const val = process.env.name;
//   if (!val) {
//     throw new Error(`missing env variable ${name}`);
//   }
//   return val;
// };

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Card from "./components/Card";
import { useEffect, useState } from "react";
// export const runtime = "edge"
// import Image from "next/image";

// interface Item {
//   blogId: number;
//   blogTitle: string;
//   slug: string;
//   tags: string[];
//   blogDescription: string;
//   blogImage: string;
// }

const Blogs = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const client = createClient({
      accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN || "",
      space: process.env.NEXT_PUBLIC_SPACE_ID || "",
    });

    const getBlogs = async () => {
      const { items }: { items: any[] } = await client.getEntries({
        content_type: "blogs",
      });
      setItems(items);
    };

    getBlogs();
  }, []);

  //console.log(items);

  return (
    <>
      <h1>Blogs Page</h1>
      <br />
      <div className="container">
        <div className="row gy-2">
          {items.map((item) => (
            <div key={item.sys.id} className="col-md-4">
              {/* <div className="bg-light">
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
              </div> */}
              <Card
                id={item.sys.id}
                title={item?.fields?.blogTitle}
                text={documentToReactComponents(item?.fields?.blogDescription)}
                imgSrc={`https:${item?.fields?.blogImage?.fields?.file?.url}`}
                slug={item?.fields?.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;

{
  /* <h4>{item?.fields?.blogTitle}</h4>
          <Image
            alt={item?.fields?.blogTitle}
            width={250}
            height={250}
            src={`https:${item?.fields?.blogImage?.fields?.file?.url}`}
          />
          <div style={{ margin: 10 }}>
            {documentToReactComponents(item?.fields?.blogDescription)}
          </div> */
}
