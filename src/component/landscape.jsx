import Navbar from "@/components/navbar"
import LandscapeProducts from "@/components/landscape-products"
import Footer from "@/components/footer"

export default function LandscapePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Page Header */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Transform Your Landscape</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our premium collection of landscape products designed to enhance your outdoor spaces with style and
            functionality.
          </p>
        </div>
      </div>

      {/* Landscape Products Section */}
      <LandscapeProducts />

      {/* Additional Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Landscape Products?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gray-800 text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Premium Quality Materials</h3>
                    <p className="text-gray-600">Durable, weather-resistant products built to last</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gray-800 text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Easy Installation</h3>
                    <p className="text-gray-600">Simple setup process with detailed instructions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gray-800 text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Competitive Pricing</h3>
                    <p className="text-gray-600">Best value for money with flexible pricing options</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gray-800 text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Support</h3>
                    <p className="text-gray-600">Professional guidance and customer service</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get a Quote</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
                    placeholder="Enter your phone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
                    placeholder="Tell us about your project"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold py-3 rounded-full transition-colors"
                >
                  Get Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
