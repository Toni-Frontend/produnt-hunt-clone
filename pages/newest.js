import Link from "next/link";
import React from "react";
import { css } from "styled-components";
import HiringNow from "../components/Jobs/HiringNow";
import Layout from "../components/layout/Layout";
import CircularIndeterminate from "../components/layout/Progress";
import Today from "../components/Products/Today";
import LatestStory from "../components/Stories/LatestStory";
import useProduct from "../hooks/useProducts";

const Newest = () => {
  const { products } = useProduct("create");

  return (
    <Layout>
      {Object.keys(products).length === 0 ? (
        <CircularIndeterminate />
      ) : (
        <div className="container">
          <div>
            <div className="title-today-list">
              <h2 className="title-component-h">Today</h2>
              <div className="links-today">
                <Link href="/popular">
                  <a>POPULAR</a>
                </Link>
                <Link href="/newest">
                  <a>NEWEST</a>
                </Link>
              </div>
            </div>
            {products.map((product) => (
              <Today key={product.id} product={product} />
            ))}
          </div>
          <aside
            css={css`
              @media (max-width: 599px) {
                display: none;
              }
              @media (min-width: 1200px) {
                display: block;
              }
            `}
          >
            <LatestStory />
            <HiringNow />
          </aside>
        </div>
      )}
    </Layout>
  );
};

export default Newest;