/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-multi-str */
// Dpeendencies and Components
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useThemeContext } from '../contexts/GlobalThemeContext';

type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  thumbnail: string
}


const StorePage = () => {
  // Theme Context
  const { theme } = useThemeContext();
  // Initialize States
  const [products, setProducts] = useState([]);
  const [maxProducts, setMaxProducts] = useState(60);
  const [numOfProducts, setNumOfProducts] = useState(30);
  const [loading, setLoading] = useState(false);
  // Fetching Products
  const fetchProducts = async () => {
    try {
      setLoading(true)
      const res = await fetch(`https://dummyjson.com/products?limit=194`).then(res => res.json());
      const data = res.products;

      if (data) {
        setMaxProducts(res.total);
        setProducts(data)
        setLoading(false);
      }

    } catch (error) {
      alert(error)
      setLoading(false);
    }
  }
  // Initialize Data Upon Entry
  useEffect(() => {
    fetchProducts();
  }, [])
  // Loading State Display
  if (loading) {
    return (
      <h1 className='flex min-h-screen flex-col justify-center items-center'>
        Loading ... Please wait ...
      </h1>
    )
  }
  console.log(products);
  console.log(numOfProducts);
  console.log(numOfProducts);

  return (
    <div className={clsx(
      "pt-8 px-4 min-h-screen\
      md:pt-12 md:px-5",
      {
        "text-[#1e2019]": theme === 'light',
        "bg-[#1e2019] text-[#ffffff]": theme === 'dark',
      })}
    >
      <h1
        className="
        font-bold
        mb-2 text-3xl
        md:mb-5 md:text-6xl
        "
      >
        Marketplace
      </h1>

      <div
        className='md:grid md:grid-cols-4 md:gap-4 md:mt-5'
      >
        {
          products && products.length ?
            products.map((product: Product) =>
              <div
                key={product.id}
                className={clsx(`
                  border-2 flex flex-col items-center 
                  mb-2
                  md:row-start-${Math.ceil(product.id / 4)} md:p-5 md:mb-0`,
                  {
                    'hidden': product.id > numOfProducts,
                    '': product.id <= numOfProducts
                  }
                )}
              >
                <div
                  className='md:mb-5 md:h-14 text-center'
                >
                  <h3>
                    {product.title}
                  </h3>
                </div>

                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className='
                  w-36 h-36
                  md:w-52 md:h-52'
                />

                <h4>
                  ${product.price}
                </h4>
              </div>) :
            null
        }
      </div>

      <div className='my-5 w-full flex flex-row justify-center'>
        <button
          className={clsx(
            "rounded-3xl px-5 py-2",
            {
              'bg-[#87cefa] text-[#1e2019] shadow-2xl shadow-[#87cefa]': theme === 'light',
              'bg-[#355691] text-[#ffffff] shadow-2xl shadow-[#355691]': theme === 'dark',
              'bg-[#d62828] text-[#ffffff] cursor-default shadow-2xl shadow-[#d62828]': numOfProducts >= maxProducts
            }
          )}
          onClick={() => numOfProducts < maxProducts ? setNumOfProducts(numOfProducts + 41) : null}
        >
          {
            numOfProducts < maxProducts ?
              <h3>Load More</h3> :
              <h3>Max Number Of Products Reached</h3>
          }
        </button>
      </div>
    </div>
  )
}

export default StorePage;