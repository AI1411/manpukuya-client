'use client';

import React, {useEffect} from 'react';
import Link from "next/link";
import {useSearchParams} from "next/navigation";

const products = [
  {
    id: 1,
    product_name: '洋楽',
    image_url: 'https://source.unsplash.com/XAqTc-LLm6A?auto=format&q=75&fit=crop&w=600',
    genre: 'western'
  },
  {
    id: 2,
    product_name: '邦楽',
    image_url: 'https://source.unsplash.com/Qp4TPK_V5iE?auto=format&q=75&fit=crop&w=600',
    genre: 'japanese'
  },
  {
    id: 3,
    product_name: 'アニソン',
    image_url: 'https://source.unsplash.com/zli4eDX3IPQ?auto=format&q=75&fit=crop&w=600',
    genre: 'animation'
  },
  {
    id: 4,
    product_name: 'JAZZ',
    image_url: 'https://source.unsplash.com/A10y2Eq7OHY?auto=format&q=75&fit=crop&w=600',
    genre: 'jazz'
  },
  {
    id: 5,
    product_name: 'クラシック',
    image_url: 'https://source.unsplash.com/xteJ6uGR1b8?auto=format&q=75&fit=crop&w=600',
    genre: 'classic'
  },
  {
    id: 6,
    product_name: 'POP',
    image_url: 'https://source.unsplash.com/ZhQCZjr9fHo?auto=format&q=75&fit=crop&w=600',
    genre: 'pop'
  },
  {
    id: 7,
    product_name: 'Rock',
    image_url: 'https://source.unsplash.com/iIWDt0fXa84?auto=format&q=75&fit=crop&w=600',
    genre: 'rock'
  },
  {
    id: 8,
    product_name: 'ヒップホップ',
    image_url: 'https://source.unsplash.com/Udu9NgiNFk8?auto=format&q=75&fit=crop&w=600',
    genre: 'hiphop'
  }
]

const Page = () => {
  const pathname = useSearchParams();
  const genre = pathname.get('genre');
  const [filteredProducts, setFilteredProducts] = React.useState(products);
  const filter_products = () => {
    if (genre === null) return products
    return products.filter(product => product.genre === genre)
  }

  useEffect(() => {
    setFilteredProducts(filter_products())
  }, [])
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/products/` + product.id}
                  className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-32 xl:h-64">
              <img src={product.image_url}
                   loading="lazy" alt="Photo by Minh Pham"
                   className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

              <div className="relative mt-auto p-4">
                <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">New trends in Tech</h2>
                <span className="font-semibold text-indigo-300">Read more</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
