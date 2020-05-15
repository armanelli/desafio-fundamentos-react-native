interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

const findProductIndex = (id: string, cart: Product[]): number => {
  return cart.findIndex(product => product.id === id);
};

export default findProductIndex;
