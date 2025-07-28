"use client"

import { useState } from "react"
import { MapPin, Building2, Ship } from "lucide-react"
import map from "../../public/image/map.png"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const branches = [
    { name: "COIMBATORE", icon: Building2 },
    { name: "CHENNAI", icon: Building2 },
    { name: "HYDERABAD", icon: Building2 },
    { name: "GOA", icon: Ship },
    { name: "KOCHI", icon: Ship },
    { name: "MUMBAI", icon: Building2 },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-4 py-12">
      <div className="max-w-7xl mx-auto ">
        {/* Header with branches */}
        <div className="text-center mb-8">
          <div className="inline-block bg-[#B0DD1D] px-4 py-1 rounded-full text-sm font-medium text-black mb-6">
            OUR BRANCHES
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {branches.map((branch, index) => {
              const IconComponent = branch.icon
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-2 border border-yellow-300">
                    <IconComponent className="w-8 h-8 text-gray-600" />
                  </div>
                  <span className="text-xs font-medium text-gray-700">{branch.name}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Main content */}
        <div className=" rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Contact Form */}
            <div className="lg:w-1/2 bg-[#212516] p-8 rounded-2xl">
              <h2 className="text-white text-2xl font-semibold mb-8">Contact Us</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 text-white placeholder-gray-300 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 text-white placeholder-gray-300 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 text-white placeholder-gray-300 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Write message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 text-white placeholder-gray-300 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-lime-400 hover:bg-lime-500 text-black font-medium px-8 py-3 rounded-full transition-colors duration-200"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Map Section */}
            <div className="lg:w-1/2 relative rounded-2xl">
              <div className="h-full min-h-[500px] bg-gray-200 relative">
                {/* Map placeholder - you can replace this with actual map integration */}
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                       backgroundImage: `url(${map.src})`,
                    }}
                  ></div>
                </div>

                {/* Location marker and info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white rounded-lg p-4 shadow-lg flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        <strong>JRR Towers</strong> (2nd Floor), Pattalam Temple Rd,
                      </p>
                      <p className="text-sm text-gray-600">Basavangudi, Bangalore, 560004</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
