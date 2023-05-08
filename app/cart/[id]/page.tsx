'use client';

import React, {useEffect} from 'react';
import CartItem from "@/app/components/cart/CartItem";

const cartItems = [
  {
    id: 1,
    name: 'Nike Air Max 270',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1612681621979-fffe5920dbe8?auto=format&q=75&fit=crop&w=200',
    inStock: true,
  },
  {
    id: 2,
    name: 'Nike Air Force 1',
    price: 109.99,
    image: 'https://images.unsplash.com/photo-1542327897-4141b355e20e?auto=format&q=75&fit=crop&w=200',
    inStock: true,
  },
  {
    id: 3,
    name: 'Nike Air Max 97',
    price: 169.99,
    image: 'https://images.unsplash.com/photo-1590926938512-c0d7e5c39abd?auto=format&q=75&fit=crop&w=200',
    inStock: false,
  }
];

const Cart = () => {
  const [totalPrice, setTotalPrice] = React.useState(0);
  const calcTotalPrice = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price;
    });
    setTotalPrice(total);
  };
  useEffect(() => {
    calcTotalPrice();
  }, []);
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="mb-6 sm:mb-10 lg:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Your Cart</h2>
        </div>
        <div className="mb-5 flex flex-col sm:mb-8 sm:divide-y sm:border-t sm:border-b">
          {cartItems.map((item) =>
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              img={item.image}
              inStock={item.inStock}
            />
          )}
        </div>
        <div className="flex flex-col items-end gap-4">
          <div className="w-full rounded-lg bg-gray-100 p-4 sm:max-w-xs">
            <div className="mt-4 border-t pt-4">
              <div className="flex items-start justify-between gap-4 text-gray-800">
                <span className="text-lg font-bold">Total</span>
                <span className="flex flex-col items-end">
              <span className="text-lg font-bold">¥{totalPrice}</span>
              <span className="text-sm text-gray-500">送料込み</span>
            </span>
              </div>
            </div>
          </div>
          <button
            className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Check
            out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
