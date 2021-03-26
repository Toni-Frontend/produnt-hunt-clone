import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { useRouter } from "next/router";
import Today from "../components/Products/Today";
import useProduct from "../hooks/useProducts";

const Search = () => {
  const router = useRouter();
  const {
    query: { q },
  } = router;

  // Todos los productos
  const { products } = useProduct("create");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const search = q.toLowerCase();
    const filtro = products.filter((product) => {
      return (
        product.nameproduct.toLowerCase().includes(search) ||
        product.topics.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search)
      );
    });

    setResult(filtro);
  }, [q, products]);

  return (
    <Layout>
      <div className="container">
        <div>
          <h2 className="title-component-h">Filter by</h2>
          <div>
            {result.map((product) => (
              <Today key={product.id} product={product} />
            ))}
          </div>
        </div>
        <aside></aside>
      </div>
    </Layout>
  );
};

export default Search;
