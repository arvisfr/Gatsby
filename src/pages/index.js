import React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Hello gatsby!">
        <h2>Im Arvis, Full stack dev.</h2>
      </Layout>
    </main>
  );
};

export default IndexPage;
export const Head = () => <title>Hello Gatsby!</title>;
