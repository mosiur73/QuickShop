import { ChevronLeft, ChevronRight } from "lucide-react"
import ProductCard from "./product-card"
import img1 from "../../public/image/Group 507.png"


export default function AgriculturalProducts() {
  const products = [
    {
      id: 1,
      title: "JF Barbed Wire- 270 GSM",
      image: img1,
      minPrice: 4995,
      maxPrice: null,
    },
    {
      id: 2,
      title: "FGC RustFree Fencing",
      image: img1,
      minPrice: 499,
      maxPrice: 1589,
    },
    {
      id: 3,
      title: "GI Poultry Mesh",
      image: img1,
      minPrice: 1260,
      maxPrice: 10750,
    },
    {
      id: 4,
      title: "JF Bluelink Mesh",
      image: img1,
      minPrice: 3067.5,
      maxPrice: 6362.5,
    },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Agricultural Products</h2>
        </div>

        {/* Products Grid with Navigation */}
        <div className="relative">
          {/* Left Navigation Arrow */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md hover:shadow-lg flex items-center justify-center transition-all">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          {/* Right Navigation Arrow */}
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md hover:shadow-lg flex items-center justify-center transition-all">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
