import { useState } from "react";
import Tabs from "./Tabs";

const images = [
  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
  "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
  "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
  "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
];

function ProductDetails() {
  const [count, setCount] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const [selectedImage, setSelectedImage] = useState(
    images !== null ? images[0] : ''
  );

  const handleColorClick = (color: string) => {
    setSelectedColor(color === selectedColor ? '' : color);
    console.log("color: ", color);
  };

  const handleSizeClick = (size: string) => {
    setSelectedSize(size === selectedSize ? '' : size);
    console.log("size: ", size);
    // console.log('Clicked size:', size);
    // setSelectedSize(size);
    // console.log('Selected size:', selectedSize);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:px-16">
      <div className="pt-8">
        <div className="flex items-center">
          <ol className="flex w-full items-center overflow-hidden">
            <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
              <a href="#">Home</a>
            </li>
            <li className="text-body mt-0.5 text-base">/</li>
            <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
              <a className="capitalize" href="#">
                products
              </a>
            </li>
            <li className="text-body mt-0.5 text-base">/</li>
            <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
              <a className="capitalize" href="#">
                Nike Shoes
              </a>
            </li>
          </ol>
        </div>
      </div>
      <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
        <div className="col-span-5 grid grid-cols-2 gap-2.5">
          <div className="col-span-4 transition duration-150 ease-in hover:opacity-90">
            <img
              src={selectedImage}
              alt="Nike Air Max 95 By You--0"
              className="w-full object-cover"
            />
          </div>
          {/*grid grid-cols-3 gap-4 h-24*/}
          <div className="col-span-5 grid grid-cols-6 gap-2.5">
            {images &&
              images.map((image, i) => (
                <div
                  key={i}
                  className="mb-2.5 transition duration-150 ease-in hover:opacity-90"
                >
                  <img
                    src={image}
                    alt={`Nike Air Max 95 By You--${i}`}
                    className="w-24 h-24 object-cover"
                    onClick={() => setSelectedImage(image)}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="col-span-4 pt-8 lg:pt-0">
          <div className="mb-7 border-b border-gray-300 pb-7">
            <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
              Nike Air Max 95 By You
            </h2>
            <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
              The Nike Air Max 95 By You lets you take inspiration from the
              human body itself. The midsole represents the spine, graduated
              panels are the muscles, the lace loops are the shoe&apos;s ribs
              and the mesh in the upper is the skin.
            </p>
            <div className="mt-5 flex items-center ">
              <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
                $40.00
              </div>
              <span className="font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
                $50.00
              </span>
            </div>
          </div>
          <div className="border-b border-gray-300 pb-3  ">
            <div className="mb-4">
              <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
                size
              </h3>
              <ul className="colors -mr-3 flex flex-wrap">
                {["S", "M", "L", "XL"].map((size) => (
                  <li
                    key={size}
                    className={`text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black ${
                      size === selectedSize ? "border-black" : ""
                    } md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm  `}
                    onClick={() => handleSizeClick(size)}
                  >
                    {size}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-4 ">
              <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
                color
              </h3>
              <ul className="colors -mr-3 flex flex-wrap">
                {[
                  "bg-orange-400",
                  "bg-pink-400",
                  "bg-violet-600",
                  "bg-red-500",
                ].map((color) => (
                  <li
                    key={color}
                    className={`text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black ${
                      color === selectedColor ? "border-black" : ""
                    } md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm`}
                    onClick={() => handleColorClick(color)}
                  >
                    <span className={`block h-full w-full rounded ${color} `} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-s-4 3xl:pr-48 flex items-center gap-2 border-b border-gray-300 py-8  md:pr-32 lg:pr-12 2xl:pr-32">
            <div className="group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12">
              <button
                className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
                // disabled
                onClick={() => {
                  if (count !== 1) setCount(count - 1);
                }}
              >
                -
              </button>
              <input
                type="number"
                value={count}
                className="appearance-none duration-250 text-heading flex h-full w-12 flex-shrink-0 cursor-default items-center justify-center text-base text-center font-semibold transition-colors ease-in-out  md:w-20 xl:w-24"
                onChange={(e) => {
                  // if(parseInt(e.target.value, 10) > 0)
                  setCount(parseInt(e.target.value, 10));
                  // else setCount(1);
                }}
              />
              <button
                className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                +
              </button>
            </div>
            <button
              type="button"
              className="h-11 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add to cart
            </button>
          </div>
          <div className="py-6 ">
            <ul className="space-y-5 pb-1 text-sm">
              <li>
                <span className="text-heading inline-block pr-2 font-semibold">
                  SKU:
                </span>
                N/A
              </li>
              <li>
                <span className="text-heading inline-block pr-2 font-semibold">
                  Category:
                </span>
                <a
                  className="hover:text-heading transition hover:underline"
                  href="#"
                >
                  kids
                </a>
              </li>
              <li className="productTags">
                <span className="text-heading inline-block pr-2 font-semibold">
                  Tags:
                </span>
                <a
                  className="hover:text-heading inline-block pr-1.5 transition last:pr-0 hover:underline"
                  href="#"
                >
                  Sneakers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Tab Content */}
      <Tabs />
    </div>
  );
}

export default ProductDetails;
