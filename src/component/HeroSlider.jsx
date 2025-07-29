"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import hero from "../../public/image/hero1.png"
import hero1 from "../../public/image/hero2.png"
import Image from "next/image"

const ProductShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(1)

  const products = [
    {
      id: 1,
      title: "Premium Quality",
      subtitle: "Durability",
      description: "Long-lasting artificial grass",
      buttonText: "Learn More",
      bgColor: "bg-green-100",
      image: hero,
    },
    {
      id: 2,
      title: "JF Privezy Grass Wall",
      subtitle: "The Perfect Blend Of Greenery",
      description: "Premium artificial grass solution",
      buttonText: "Shop Now",
      bgColor: "bg-gray-50",
      image: hero1,
    },
    {
      id: 3,
      title: "Garden Solutions",
      subtitle: "Landscape Design",
      description: "Complete outdoor transformation",
      buttonText: "Explore",
      bgColor: "bg-blue-100",
      image: hero,
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  return (
   <section className="bg-gray-50">
     <div className="relative w-full max-w-6xl mx-auto py-12 px-4 ">
      {/* JF Logo */}
      <div className="absolute top-4 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-200">
        <span className="text-lg font-bold text-gray-800">JF</span>
      </div>

      {/* Cards Container */}
      <div className="relative flex items-center justify-center h-96 overflow-hidden">
        {products.map((product, index) => {
          const position = (index - currentIndex + products.length) % products.length
          let translateX = 0
          let scale = 0.8
          let opacity = 0.6
          let zIndex = 1

          if (position === 0) {
            // Current card (center)
            translateX = 0
            scale = 1
            opacity = 1
            zIndex = 3
          } else if (position === 1) {
            // Next card (right)
            translateX = 60
            scale = 0.8
            opacity = 0.7
            zIndex = 2
          } else if (position === products.length - 1) {
            // Previous card (left)
            translateX = -60
            scale = 0.8
            opacity = 0.7
            zIndex = 2
          } else {
            // Hidden cards
            translateX = position > currentIndex ? 120 : -120
            scale = 0.6
            opacity = 0
            zIndex = 1
          }

          return (
            <div
              key={product.id}
              className="absolute transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(${translateX}%) scale(${scale})`,
                opacity,
                zIndex,
                width: "800px",
                height: "300px",
              }}
            >
              <div className="bg-white rounded-2xl shadow-lg h-full flex overflow-hidden">
                {/* Left side - Text content */}
                <div className="flex-1 p-6 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h2>
                  <p className="text-gray-600 mb-6">{product.subtitle}</p>
                  <button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold py-2 px-6 rounded-full transition-colors duration-200 self-start">
                    {product.buttonText}
                  </button>
                </div>

                {/* Right side - Product image */}
                <div className="flex-1 relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )
        })}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-lime-400 hover:bg-lime-500 rounded-full flex items-center justify-center shadow-lg transition-colors duration-200 z-10"
        >
          <ChevronLeft className="w-5 h-5 text-black" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-lime-400 hover:bg-lime-500 rounded-full flex items-center justify-center shadow-lg transition-colors duration-200 z-10"
        >
          <ChevronRight className="w-5 h-5 text-black" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? "bg-lime-400" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
   </section>
  )
}

export default ProductShowcase
