import { getProduct, getProductStock, updateProductStock } from '@/fb/queries';

export const updateStock = async (operation: string, productId: string) => {
  const productObtained = await getProduct(productId);
  const productStock = await getProductStock(productObtained.stock);

  let newStock = 0;
  if (operation === 'decrement') {
    newStock = productStock.liters - productObtained.liters;
  } else if (operation === 'increment') {
    newStock = productStock.liters + productObtained.liters;
  }
  await updateProductStock(productObtained.stock, newStock || 0);

  // TODO: Checar si mejor retornar de updateProductStock el 0
  return newStock;
};
