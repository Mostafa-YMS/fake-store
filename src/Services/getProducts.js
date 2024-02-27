export const getProductsService = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products?limit=10");
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};
