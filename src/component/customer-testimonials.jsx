import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import img from "../../public/image/image 43.png";
import img2 from "../../public/image/Group 395.png";
import Image from "next/image";

export default function CustomerTestimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        "I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast(400ft.) Value for money and easy to install. Happy with the product",
      name: "Samuel Varughese",
      image: img,
    },
  ];

  const currentTestimonial = testimonials[0];

  return (
    <section className="bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Customers Love <span className="ml-4">Us?</span>
          </h2>
        </div>

        {/* Testimonial Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Left Side - Testimonial Card */}
          <div className="bg-gray-100 col-span-2 rounded-2xl p-8 relative h-[500px] min-h-[350px] flex flex-col justify-between">
            {/* Quote Icon */}
            <div>
              <div className="mb-6">
                <Quote className="w-12 h-12 text-lime-400 fill-current" />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-800 text-lg leading-relaxed mb-8">
                {currentTestimonial.quote}
              </p>
            </div>

            {/* Customer Name and Navigation */}
            <div className="flex items-center justify-between">
              <p className="text-gray-900 font-semibold text-lg">
                - {currentTestimonial.name}
              </p>

              {/* Navigation Arrows */}
              <div className="flex gap-2">
                <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Customer Photo */}
          <div className="relative col-span-1 h-[500px] min-h-[350px]">
            <div className="bg-blue-50 rounded-2xl overflow-hidden relative h-full">
              {/* Company Logo */}
              <div className="absolute top-4 right-4 z-10">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Image src={img2} alt="" />
                </div>
              </div>

              {/* Customer Image */}
              <div className="w-full h-full relative">
                <Image
                  src={currentTestimonial.image || "/placeholder.svg"}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Pagination Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
