const BASE_URL = 'http://localhost:5000/api/products';

export async function fetchProducts() {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  return data;
}

export async function submitProduct(product) {
  await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
}
