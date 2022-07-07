import React from "react";
import { client } from "../lib/client";

import { Product, FooterBanner, HeroBanner } from "../components";

const Home = ({ products, bannerData }) => {
  return (
    <div>
      <HeroBanner />
      <div>
        <h2>Best Selling Shoes</h2>
        <p>Unique shoes for men and women</p>
      </div>
      <div>
        {products?.map((product) => product.name)}
      </div>

      <FooterBanner />
    </div>
  )
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;