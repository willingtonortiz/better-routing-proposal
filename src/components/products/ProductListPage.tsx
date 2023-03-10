import { Link } from "react-router-dom";
import { randProduct } from "@ngneat/falso";
import { ProductRoutes } from "../../routes";

export const ProductListPage = () => {
  const products = randProduct({
    length: 10,
    locale: "es",
  });

  return (
    <div>
      <div className={"flex flex-row justify-end"}>
        <Link
          className={"text-white bg-red-500 py-2 px-4 rounded-xl"}
          to={ProductRoutes.addProduct()}
        >
          Add product
        </Link>
      </div>

      <ul className={"flex flex-col gap-y-4"}>
        {products.map((product) => (
          <li
            key={product.id}
            className={
              "flex flex-row gap-x-8 items-start shadow px-8 py-4 rounded-md"
            }
          >
            <div className={"flex-1"}>
              <Link to={ProductRoutes.productDetail(product.id)}>
                <h1 className={"font-bold text-xl"}>{product.title}</h1>
              </Link>

              <Link to={ProductRoutes.productDetail(product.id)}>
                <p>{product.description}</p>
              </Link>
            </div>

            <Link
              className={"text-blue-500"}
              to={ProductRoutes.editProduct(product.id)}
            >
              Edit
            </Link>

            <Link
              className={"text-blue-500"}
              to={ProductRoutes.deleteProduct(product.id)}
            >
              Delete
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
