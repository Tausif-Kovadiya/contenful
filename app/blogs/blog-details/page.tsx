// import { client } from "@/app/contentful/Client";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const BlogDetails = async ({ searchParams }: any) => {
  //const { fields }: { fields: any } = await client.getEntry(searchParams.id);

  return (
    <div className="container my-5">
      {/* <div className="card shadow-lg">
        {fields?.blogImage && (
          <img
            src={`https:${fields.blogImage.fields.file.url}`}
            className="card-img-top"
            alt={fields?.blogTitle}
            width="300"
            height="700"
          />
        )}
        <div className="card-body">
          <h1 className="card-title">{fields?.blogTitle}</h1>
          <div className="card-text">
            {documentToReactComponents(fields?.blogDescription)}
          </div>
          <a href="/blogs" className="btn btn-primary">
            Back to Blogs
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default BlogDetails;
