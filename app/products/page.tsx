import React from 'react';
import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          <Link href="/products/1"
             className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-32 xl:h-64">
            <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                 loading="lazy" alt="Photo by Minh Pham"
                 className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>

            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

            <div className="relative mt-auto p-4">
              <span className="block text-sm text-gray-200">July 19, 2021</span>
              <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">New trends in Tech</h2>

              <span className="font-semibold text-indigo-300">Read more</span>
            </div>
          </Link>
          <Link href="/products/2"
             className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-32 xl:h-64">
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                 loading="lazy" alt="Photo by Lorenzo Herrera"
                 className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>

            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

            <div className="relative mt-auto p-4">
              <span className="block text-sm text-gray-200">April 07, 2021</span>
              <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">Working with legacy
                stacks</h2>

              <span className="font-semibold text-indigo-300">Read more</span>
            </div>
          </Link>
          <Link href="/products/3"
             className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-32 xl:h-64">
            <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
                 loading="lazy" alt="Photo by Magicle"
                 className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>

            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

            <div className="relative mt-auto p-4">
              <span className="block text-sm text-gray-200">March 15, 2021</span>
              <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">10 best smartphones for
                devs</h2>

              <span className="font-semibold text-indigo-300">Read more</span>
            </div>
          </Link>
          <Link href="/products/4"
             className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-32 xl:h-64">
            <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
                 loading="lazy" alt="Photo by Martin Sanchez"
                 className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>

            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

            <div className="relative mt-auto p-4">
              <span className="block text-sm text-gray-200">January 27, 2021</span>
              <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">8 High performance
                Notebooks</h2>

              <span className="font-semibold text-indigo-300">Read more</span>
            </div>
          </Link>
          <Link href="/products/5"
             className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-32 xl:h-64">
            <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                 loading="lazy" alt="Photo by Minh Pham"
                 className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>

            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

            <div className="relative mt-auto p-4">
              <span className="block text-sm text-gray-200">July 19, 2021</span>
              <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">New trends in Tech</h2>

              <span className="font-semibold text-indigo-300">Read more</span>
            </div>
          </Link>
          <Link href="/products/6"
             className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-32 xl:h-64">
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                 loading="lazy" alt="Photo by Lorenzo Herrera"
                 className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>

            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

            <div className="relative mt-auto p-4">
              <span className="block text-sm text-gray-200">April 07, 2021</span>
              <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">Working with legacy
                stacks</h2>

              <span className="font-semibold text-indigo-300">Read more</span>
            </div>
          </Link>
          <Link href="/products/7"
             className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-32 xl:h-64">
            <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
                 loading="lazy" alt="Photo by Magicle"
                 className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>

            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

            <div className="relative mt-auto p-4">
              <span className="block text-sm text-gray-200">March 15, 2021</span>
              <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">10 best smartphones for
                devs</h2>

              <span className="font-semibold text-indigo-300">Read more</span>
            </div>
          </Link>
          <Link href="/products/8"
             className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-32 xl:h-64">
            <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
                 loading="lazy" alt="Photo by Martin Sanchez"
                 className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>

            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

            <div className="relative mt-auto p-4">
              <span className="block text-sm text-gray-200">January 27, 2021</span>
              <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">8 High performance
                Notebooks</h2>

              <span className="font-semibold text-indigo-300">Read more</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
