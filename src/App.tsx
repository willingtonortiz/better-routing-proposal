import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { ProductRoutes } from "./routes";
import { ProductsRouter } from "./routers/ProductRouter";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <div>
              <h1>Main route</h1>

              <Link to={ProductRoutes.productList()}>Go to /products</Link>
            </div>
          }
        />

        <Route path={ProductRoutes.ROOT} element={<ProductsRouter />} />

        <Route path={"*"} element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
