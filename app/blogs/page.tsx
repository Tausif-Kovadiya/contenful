import { client } from "../contentful/Client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Card from "./components/Card";
export const runtime = "edge"


// interface Item {
//   blogId: number;
//   blogTitle: string;
//   slug: string;
//   tags: string[];
//   blogDescription: string;
//   blogImage: string;
// }

const Blogs = async () => {
  const { items }: { items: any[] } = await client.getEntries({
    content_type: "blogs",
  });

return (
  <>
    <h1>Blogs</h1>
    <br />
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <div key={item.sys.id} className="col-md-4 mb-4">
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
