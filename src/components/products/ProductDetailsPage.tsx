import { randProduct } from "@ngneat/falso";
import { Link, useParams } from "react-router-dom";
import { ProductRoutes } from "../../routes";

export const ProductDetailsPage = () => {
  const params = useParams();
  const product = randProduct();

  const productId = params["productId"];

  return (
    <div className={"my-8"}>
      <div className={"flex flex-row justify-end"}>
        <Link
          className={"text-white bg-red-500 mb-4 py-2 px-4 rounded-xl"}
          to={ProductRoutes.productList()}
        >
          Go back
        </Link>
      </div>

      <p>Id: {productId}</p>
      <h1 className={"text-xl font-bold"}>{product.title}</h1>
      <p className={"text-xl"}>{product.description}</p>
      <p>Price: {product.price}</p>
      <p>Image: {product.image}</p>
    </div>
  );
};
