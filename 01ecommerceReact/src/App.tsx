import ProductDetails from './pages/ProductDetails';

function App() {
  console.log(import.meta.env.VITE_APP_BASE_API);
  return (
    <>
      <h2>eCommerce Template</h2>
      {/* <CardProductList /> */}
      <ProductDetails />
    </>
  );
}

export default App;
