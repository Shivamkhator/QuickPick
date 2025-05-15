'use client'
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const router= useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get('search') || '';

  useEffect(() => {
    fetch('https://quickpick-ma8n.onrender.com/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

  useEffect(() => {
    const filteredItems = products.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(filteredItems);
  }, [search, products]);

  return (
    <div className="p-4 mx-auto">
      <Navbar />
      {products.length === 0?(
        <div className="flex justify-between items-center mb-4">
        <p>No products found</p>
       <div>
        <button
          onClick={() => router.push('/submit')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </div>
      </div>):
      filtered.length === 0 ? (
        <p>No matching products found.</p>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

    </div>
  );
}


