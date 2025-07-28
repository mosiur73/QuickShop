"use client"
import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import img from "../../public/image/hero1.png"
import img2 from "../../public/image/hero2.png"
import img3 from "../../public/image/hero2.png"

const products = [
  {
    id: 1,
    title: "JF Privezy Grass Wall",
    desc: "The Perfect Blend Of Greenery",
    image: img,
  },
  {
    id: 2,
    title: "Premium Fence Mesh",
    desc: "Strong & Flexible Garden Solution",
    image: img2,
  },
  {
    id: 3,
    title: "Italian Artificial Grass",
    desc: "Natural Look with Durability",
    image: img3,
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => setCurrent((prev) => (prev + 1) % products.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + products.length) % products.length)

  return (
   <section className="bg-gray-50">
     <div className="relative overflow-hidden py-10">
      <div className="flex transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(-${current * 100}%)` }}>
        {products.map((product, index) => (
          <div
            key={product.id}
            className="min-w-full flex justify-center items-center px-10"
          >
            <div className="relative bg-[#f5f9f6] rounded-xl shadow-md flex w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
              {/* Left Side Image */}
              <div className="w-1/2 p-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Right Side Text */}
              <div className="w-1/2 p-4 flex flex-col justify-center">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">
                  {product.title}
                </h2>
                <p className="text-gray-600 mb-4">{product.desc}</p>
                <button className="bg-lime-400 text-sm px-4 py-2 rounded-full w-max font-medium hover:bg-lime-500 transition">
                  Shop Now
                </button>
              </div>

              {/* Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-lime-400 p-2 rounded-full hover:bg-lime-500"
              >
                <ArrowLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-lime-400 p-2 rounded-full hover:bg-lime-500"
              >
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
   </section>
  )
}
