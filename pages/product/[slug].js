import React, { useState } from "react";
import { client, urlFor } from "../../lib/client";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Product } from "../../components";
import { useStateContext } from "../../context/StateContext";

const ProductDetails = ({ product, products }) => {
    
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  
  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };

  return (
    <div>
        <div className="flex justify-center m-[40px] mt-[60px]">
            <div>
                <div className="">
                    <img src={urlFor(image && image[index])} className="rounded-lg w-[400px] h-fit object-cover" />
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center space-y-2 lg:space-y-0 lg:space-x-2 mt-[20px]">
                    {image?.map((item, i) => (
                        <img key={i} src={urlFor(item)} className="rounded-lg w-[70px] h-fit cursor-pointer object-cover" onMouseEnter={() => setIndex(i)} />
                    ))}
                </div>
            </div>

            <div className="flex flex-col p-4">
                <h3 className="">{name}</h3>
                <div className="flex items- space-x-1 mt-[10px]">
                    <div className="flex items-center">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>
                    <p className="relative top-[-2px]">
                        (20)
                    </p>
                </div>
                <h4 className="pt-2">Details: </h4>
                <p className="">{details}</p>
                <p className="pt-2">${price}</p>
                <div className="flex items-center mt-[10px]">
                    <h4 className="pb-1 pr-2">Quantity:</h4>
                    <p className="flex items-center justify-evenly border w-full">
                        <div className="w-fit p-[8px] cursor-pointer" onClick={decQty}><AiOutlineMinus /></div>
                        <div className="border-x px-5 w-fit p-[8px] cursor-pointer">{qty}</div>
                        <div className="w-fit p-[8px] cursor-pointer" onClick={incQty}><AiOutlinePlus /></div>
                    </p>
                </div>
                <div className="">
                    <button type="button" className="mt-5 primary-button w-full" onClick={() => onAdd(product, qty)}>Add to Cart</button>
                    <button type="button" className="mt-1 primary-button w-full" onClick={handleBuyNow}>Buy Now</button>
                </div>
            </div>
        </div>
        <div className="">
            <h4 className="grid place-items-center">You may also like</h4>
            <div className="">
                <div className="flex flex-col justify-center items-center lg:flex-row">
                    {products.map((item) => (
                        <Product key={item._id} product={item} />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;

    const products = await client.fetch(query);
    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
  
    return {
      props: { product, products }
    }
  }

export default ProductDetails