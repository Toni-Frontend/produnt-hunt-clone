import React from "react";
import FormPostProduct from "../components/forms/FormPostproduct";
import Layout from '../components/layout/Layout';

const PostProduct = () => {
  return (
    <Layout>
      <div className=" container c-login">
        <FormPostProduct/>
      </div>
    </Layout>
  );
};

export default PostProduct;
