export function formatPrice(amount) {
  if (typeof amount !== 'number' || Number.isNaN(amount)) return '₹0';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function calcDiscountPercent(mrp, price) {
  if (!mrp || mrp <= price) return 0;
  return Math.round(((mrp - price) / mrp) * 100);
}

export function calcSavings(mrp, price) {
  if (!mrp || mrp <= price) return 0;
  return mrp - price;
}
