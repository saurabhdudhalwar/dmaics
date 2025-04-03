import Services from "../home/Services";
import FullWidthBanner from "../navbar/FullWidthBanner";
import image from "../resource/medic1.jpg";
import ProductTable from "./ProductTable";
import data from "./data.json";

const ProductList = () => {
  return (
    <div>
      <div>
        <FullWidthBanner image={image} title="Product List" />
      </div>
      <div>
        <ProductTable data={data} />
      </div>
      <Services />
    </div>
  );
};

export default ProductList;
