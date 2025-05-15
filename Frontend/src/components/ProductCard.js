'use client';

import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card";

export default function ProductCard({ product }) {
  // Check if product exists
  if (!product) {
    return (
      <Card className="border-red-300 bg-red-50">
        <CardContent className="pt-6">
          <p className="text-red-600">Error: Product data not available</p>
        </CardContent>
      </Card>
    );
  }

  // Destructure with fallback values to handle missing fields
  const {
    name = "Unnamed Product",
    price = "Price not available",
    description = "No description provided",
    image_url = null
  } = product;

  // Format price if it exists
  const formattedPrice = typeof price === 'number' ? 
    `₹${price.toFixed(2)}` : 
    (price || "Price not available");

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Image Section - Positioned at the top */}
      {image_url ? (
        <div className="relative h-48 w-full">
          <Image
            src={image_url}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      ) : (
        <div className="flex h-48 w-full items-center justify-center bg-gray-100">
          <p className="text-gray-400">No image available</p>
        </div>
      )}

      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold line-clamp-1">{name}</CardTitle>
            <CardDescription className="text-lg font-semibold text-blue-600">
              {formattedPrice}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-gray-600 line-clamp-3">
          {description || "No description available"}
        </p>
      </CardContent>
    </Card>
  );
}