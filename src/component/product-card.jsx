
import Image from "next/image"

export default function ProductCard({ product }) {
  const formatPrice = (min, max) => {
    if (max) {
      return `₹${min.toLocaleString()} – ₹${max.toLocaleString()}`
    }
    return `₹${min.toLocaleString()}`
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      {/* Product Image */}
      <div className="mb-4 aspect-square bg-gray-50 rounded-lg overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{product.title}</h3>

        <p className="text-lg font-medium text-gray-700">{formatPrice(product.minPrice, product.maxPrice)}</p>

        <button className="w-1/2 py-2  bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold rounded-full">
          Shop Now
        </button>
      </div>
    </div>
  )
}
