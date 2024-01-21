import ProductItems from "../components/ProductItems";
import products from "../data/products.json";

const Store = () => {
  return (
    <div>
      {products?.map((product) => (
        <ProductItems {...product}/>
      ))}
    </div>
  );
};

export default Store;
