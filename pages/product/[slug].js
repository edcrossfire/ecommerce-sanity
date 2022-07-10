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
                <h1 className="text-2xl font-semibold">{name}</h1>
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
                <p className="text-slate-500">{details}</p>
                <p className="font-semibold pt-2 text-2xl">${price}</p>
                <div className="flex items-center mt-[10px]">
                    <h3 className="font-bold pb-1 pr-2">Quantity:</h3>
                    <p className="flex items-center justify-evenly border w-full">
                        <div className="w-fit p-[8px] cursor-pointer" onClick={decQty}><AiOutlineMinus /></div>
                        <div className="border-x px-5 w-fit p-[8px] cursor-pointer text-[20px]">{qty}</div>
                        <div className="w-fit p-[8px] cursor-pointer" onClick={incQty}><AiOutlinePlus /></div>
                    </p>
                </div>
                <div className="">
                    <button type="button" className="mt-5 p-3 w-full rounded-xl text-white bg-slate-800 shadow-xl" onClick={() => onAdd(product, qty)}>Add to Cart</button>
                    <button type="button" className="mt-1 p-3 w-full rounded-xl text-white bg-slate-800 shadow-xl" onClick={handleBuyNow}>Buy Now</button>
                </div>
            </div>
        </div>
        <div className="">
            <h2 className="grid place-items-center text-3xl font-semibold">You may also like</h2>
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