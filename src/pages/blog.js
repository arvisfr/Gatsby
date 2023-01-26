import React from "react";
import Layout from "../components/layout";

const BlogPage = () => {
  return (
    <main>
      <Layout pageTitle="Blog">
        <p>Posts will be here</p>
      </Layout>
    </main>
  );
};
export const Head = () => <title>Blog</title>;
export default BlogPage;
