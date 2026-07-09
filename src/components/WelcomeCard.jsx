import React from "react";

const WelcomeCard = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="max-w-lg">
        <span className="inline-block rounded-full bg-gray-100 px-4 py-1 text-lg font-light text-gray-600">
           Premium Mobile
        </span>

        <h1 className="mt-6 text-5xl font-extralight leading-tight text-gray-900">
          Welcome to
          <br />
          <span className="font-normal">I-Mobile</span>
        </h1>

        <p className="mt-6 text-lg font-light leading-8 text-gray-500">
          Discover premium sneakers and timeless footwear crafted for comfort,
          style, and everyday confidence. Shop the latest collections and step
          into your next favorite pair.
        </p>

        <div className="mt-10 flex gap-8">
          <div>
            <h2 className="text-3xl font-light text-gray-900">500+</h2>
            <p className="text-sm font-light text-gray-500">
              Premium Products
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-light text-gray-900">20K+</h2>
            <p className="text-sm font-light text-gray-500">
              Happy Customers
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-light text-gray-900">4.9★</h2>
            <p className="text-sm font-light text-gray-500">
              Customer Rating
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;