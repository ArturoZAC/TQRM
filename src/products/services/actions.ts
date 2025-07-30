import { type Product, type ProductLike, productsApi} from '..';

interface GetProductsOptions {
  filterKey?: string;
}

export const sleep = (seconds: number): Promise<boolean> => {
  return new Promise( resolve => {
    setTimeout(() => {
      resolve( true );
    }, seconds * 1000);
  })
}

export const getProducts = async({ filterKey }: GetProductsOptions): Promise<Product[]> => {

  // sleep(2);

  const fitlerUrl = (filterKey) ? `category=${filterKey}` : '';

  const { data } = await productsApi.get<Product[]>(`/products?${fitlerUrl}`);
  return data;
};

export const getProductById = async(id: number): Promise<Product> => {

  // sleep(5);

  const { data } = await productsApi.get<Product>(`/products/${id}`);
  return data;
};

export const createProduct = async( product: ProductLike) => {
  await sleep(5);

  const { data } = await productsApi.post<ProductLike>('/products', product);
  return data;
}