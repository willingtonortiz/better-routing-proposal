import { Route, Routes } from "react-router-dom";
import { ProductRoutes } from "../routes";
import { ProductListPage } from "../components/products/ProductListPage";
import { ProductDetailsPage } from "../components/products/ProductDetailsPage";

export const ProductsRouter = () => {
  return (
    <div className={"container mx-auto"}>
      <Routes>
        <Route index element={<ProductListPage />} />

        <Route
          path={ProductRoutes.PRODUCT_DETAILS}
          element={<ProductDetailsPage />}
        />

        <Route
          path={ProductRoutes.ADD_PRODUCT}
          element={<h1>Add product</h1>}
        />

        <Route
          path={ProductRoutes.EDIT_PRODUCT}
          element={<h1>Edit product</h1>}
        />

        <Route
          path={ProductRoutes.DELETE_PRODUCT}
          element={<h1>Delete product</h1>}
        />
      </Routes>
    </div>
  );
};
