// import { useId } from 'react';
import Product from '../types/Product';

function CardProduct() {
    // const id = useId();
    const product: Product = {
      id: "1",
      name: "Nike Airmax v2",
      title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, enim!",
      tags:[
        {id: "1", name: "#Sneakers"},
        {id: "2", name: "#Nike"},
        {id: "3", name: "#Airmax"},
      ],
      colors: [
        {id: "1", name: "#1da1f2"},
        {id: "2", name: "#b794f4"},
        {id: "3", name: "#F6AD55"},
        {id: "4", name: "#63b3ed"},
      ],
      sizes: [
        {id: "1", name: "8 UK"},
        {id: "1", name: "9 UK"},
        {id: "1", name: "10 UK"},
      ],
      images: [
        {id: "1", name: "Laptop", url: "https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"},
      ],
      price: 100,
      discountPrice: 120,
      availableQty: 15
    }
  return (
    <div key={product.id} className="rounded-md border">
      <img
        src={product.images[0]?.url}
        alt={product.images[0]?.name}
        className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {product.name}
        </h1>
        <p className="mt-3 line-clamp-2 text-sm text-gray-600">
          {product.title}
        </p>
        <div className="mt-4">
          {product.tags?.map(tag => (
            <span key={tag.id} className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              {tag.name}
            </span>
          ))}
          
        </div>
        <div className="mt-3 flex items-center space-x-2">
          <span className="block text-sm font-semibold">Colors : </span>
          {product.colors?.map(color => (
            <span key={color.id} className={`block h-4 w-4 rounded-full border-2 border-gray-300 bg-[${color.name}]`} style={{
              backgroundColor: color.name
            }} ></span>
          ))}
        </div>
        <div className="mt-5 flex items-center space-x-2">
          <span className="block text-sm font-semibold">Size : </span>
          {product.sizes?.map(size => (
            <span key={size.id} className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
              {size.name}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center space-x-2">
          <span className="block text-sm font-semibold">Price : </span>
          <span className="block rounded-md border-gray-300 p-1 px-2 text-xs font-medium">
            ৳ {product.price}
          </span>
          <span className="block rounded-md  line-through border-gray-300 p-1 px-2 text-xs font-medium">
            ৳ {product.discountPrice}
          </span>
          <span className="block rounded-md text-red-600 p-1 px-2 text-xs font-medium">
            % {Math.ceil((product.discountPrice-product.price)*100/product.discountPrice)}
          </span>
        </div>
        <button
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default CardProduct;
