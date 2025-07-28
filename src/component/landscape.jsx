"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import img1 from "../../public/image/image.png"
import img2 from "../../public/image/image (1).png"
import img3 from "../../public/image/image (2).png"
import img4 from "../../public/image/image (3).png"

export default function Component() {
  const products = [
    {
      id: 1,
      name: "Antigo Fence",
      image: img1,
      priceRange: "₹10,024.00 – ₹14,984.82",
    },
    {
      id: 2,
      name: "JF Australian Trellis",
      image: img2,
      price: "₹6,962.00",
    },
    {
      id: 3,
      name: "JF Polyhex Mesh",
      image: img3,
      priceRange: "₹4,050.00 – ₹10,770.00",
    },
    {
      id: 4,
      name: "JF Privezy Grass Wall",
      image: img4,
      priceRange: "₹1,646.10 – ₹18,284.10",
    },
  ]

  return (
    <section className="bg-gray-50 py-12">
        <div className="w-full  max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 ml-8">Landscape Products</h2>

      <div className="relative">
        {/* Left Arrow */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        {/* Right Arrow */}
        <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-12">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-50 border-0 rounded-2xl overflow-hidden shadow-sm">
              <div className="p-4">
                <div className="aspect-[4/3] mb-4 rounded-xl overflow-hidden bg-white">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-semibold text-gray-900 text-lg mb-2">{product.name}</h3>

                <p className="text-gray-600 text-sm mb-4">{product.priceRange || product.price}</p>

                <button className="w-1/2 bg-lime-400 hover:bg-lime-500 text-black font-medium rounded-full py-2 px-6 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  )
}
