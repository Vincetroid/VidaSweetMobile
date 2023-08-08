export const formatCurrency = (quantity: number) => {
  const formattingOptions = {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 2,
  };
  const pesosString = new Intl.NumberFormat('es-MX', formattingOptions).format(
    quantity,
  );
  if (pesosString === 'NaN' || !quantity) {
    return '---';
  }

  return pesosString;
};
