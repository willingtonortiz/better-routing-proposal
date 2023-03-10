export class ProductRoutes {
  /* *
   * React router routes
   * Used only in the router component
   * */
  static readonly INDEX = `/products`;
  static readonly ROOT = `${ProductRoutes.INDEX}/*`;
  static readonly PRODUCT_DETAILS = `:productId`;
  static readonly ADD_PRODUCT = `add`;
  static readonly EDIT_PRODUCT = `:productId/edit`;
  static readonly DELETE_PRODUCT = `:productId/delete`;

  /* *
   * Base path
   * Used as the base path for route methods
   */
  private static getBasePath = () => `${ProductRoutes.INDEX}`;

  /* *
   * Route methods
   * Used in the components to generate paths
   * */
  static productList = () => ProductRoutes.getBasePath();
  static productDetail = (productId: string) =>
    `${ProductRoutes.getBasePath()}/:productId`.replace(
      ":productId",
      productId
    );
  static addProduct = () => `${ProductRoutes.getBasePath()}/add`;
  static editProduct = (productId: string) =>
    `${ProductRoutes.getBasePath()}/:productId/edit`.replace(
      ":productId",
      productId
    );
  static deleteProduct = (productId: string) =>
    `${ProductRoutes.getBasePath()}/:productId/delete`.replace(
      ":productId",
      productId
    );
}
