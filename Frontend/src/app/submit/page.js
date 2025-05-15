'use client'
import { useState } from 'react';
import ProductForm from '@/components/ProductForm';

export default function SubmitPage() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Submit Product</h1>
      <ProductForm />
    </div>
  );
}
