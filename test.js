const product = {
  category: "Fruits",
  price: 3,
  stocked: true,
  name: "Apple",
};

// Options with some values set and others potentially undefined
const options = {
  inStockOnly: Math.random() < 0.5 ? true : undefined, // Randomly true or undefined
  startNameWith: Math.random() < 0.5 ? "app" : undefined, // Randomly "app" or undefined
  category: Math.random() < 0.5 ? "fruits" : undefined, // Randomly "fruits" or undefined
  minPrice: Math.random() < 0.5 ? Math.floor(Math.random() * 10) : undefined, // Random integer between 0 and 9 or undefined
  maxPrice:
    Math.random() < 0.5 ? Math.floor(Math.random() * 10) + 10 : undefined, // Random integer between 10 and 19 or undefined
};

const { inStockOnly, startNameWith, category, minPrice, maxPrice } = options;

const matchesText = startNameWith
  ? product.name.toLowerCase().startsWith(startNameWith.toLowerCase())
  : true;
const matchesStock =
  inStockOnly !== undefined ? product.stocked === inStockOnly : true;
const matchesCategory = category
  ? product.category.toLowerCase() === category.toLowerCase()
  : true;
const matchesPrice =
  (minPrice !== undefined ? product.price >= minPrice : true) &&
  (maxPrice !== undefined ? product.price <= maxPrice : true);

const selected = matchesText && matchesStock && matchesCategory && matchesPrice;

console.log("\nTest Results:");
const results = [
  {
    Name: product.name,
    Option:
      startNameWith !== undefined
        ? `startNameWith = ${startNameWith}`
        : undefined,
    Test: `matchesText = ${matchesText}`,
  },
  {
    Name: product.stocked,
    Option:
      inStockOnly !== undefined ? `inStockOnly = ${inStockOnly}` : undefined,
    Test: `matchesStock = ${matchesStock}`,
  },
  {
    Name: product.category,
    Option: category !== undefined ? `category = ${category}` : undefined,
    Test: `matchesCategory = ${matchesCategory}`,
  },
  {
    Name: product.price,
    Option: `minPrice = ${
      minPrice !== undefined ? minPrice : undefined
    }, maxPrice = ${maxPrice !== undefined ? maxPrice : undefined}`,
    Test: `matchesPrice = ${matchesPrice}`,
  },
];

console.table(results);
console.log("Overall selected:", selected);
