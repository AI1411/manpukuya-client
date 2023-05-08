import React from 'react';

type Props = {
  id: number,
  name: string
  price: number
  img: string
  inStock: boolean
}

const CartItem = (item: Props) => {
  return (
    <div className="py-5 sm:py-8">
      <div className="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
        <div className="sm:-my-2.5">
          <a href="#"
             className="group relative block h-40 w-24 overflow-hidden rounded-lg bg-gray-100 sm:h-56 sm:w-40">
            <img
              src={item.img}
              loading="lazy" alt="Photo by Thái An"
              className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>
          </a>
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div>
            <a href="#"
               className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Top</a>
          </div>

          <div>
            <span className="mb-1 block font-bold text-gray-800 md:text-lg">¥{item.price}</span>

            {item.inStock ?
              <span className="flex items-center gap-1 text-sm text-gray-500">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fill-rule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clip-rule="evenodd"/>
                </svg>

                In stock
            </span>
              : <span className="flex items-center gap-1 text-sm text-gray-500">Out of stock</span>}
          </div>
        </div>

        <div className="flex w-full justify-between border-t pt-4 sm:w-auto sm:border-none sm:pt-0">
          <div className="flex flex-col items-start gap-2">
            <button
              className="select-none text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">削除
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
