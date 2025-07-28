
import { Facebook, Instagram, Youtube } from "lucide-react"
import logo from "../../public/image/Group 395.png";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-[#212516] text-white">
      {/* Main Footer Content */}
      <div className="rounded-t-3xl bg-slate-800 px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 justify-between gap-8">
            {/* Newsletter Section */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-semibold mb-3">Join Our JF Products</h3>
              <p className="text-gray-300 mb-6 text-sm">We'll tell you about store updates and discounts</p>

              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400"
                />

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="w-4 h-4 text-lime-400 bg-slate-700 border-slate-600 rounded focus:ring-lime-400"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-300">
                    Yes, subscribe me to your newsletter.
                  </label>
                </div>

                <button className="w-full py-2 bg-white text-slate-800 hover:bg-gray-100 font-semibold rounded-full">
                  Join Now
                </button>
              </div>
            </div>

            {/* Information Links */}
            <div className="lg:col-span-1 lg:ml-52">
              <h3 className="text-xl font-semibold mb-6">Information</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Helpful Links */}
            <div className="lg:col-span-1 lg:ml-40">
              <h3 className="text-xl font-semibold mb-6">Helpful</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    My Account
                  </a>
                </li>
              </ul>
            </div>

            
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8  border-slate-700">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              {/* Logo and Branches */}
              <div className="flex items-center space-x-4 mb-6 lg:mb-0">
                 <Image src={logo} alt="Logo" width={120} height={40}  />
                <div>
                  <h4 className="font-semibold text-white mb-1">Our Branches</h4>
                  <p className="text-gray-300 text-sm">Coimbatore, Chennai, Hyderabad, Goa, Kochi</p>
                </div>
              </div>

              {/* Contact Us Button */}
            <div className="lg:col-span-1 flex justify-end">
              <button className="bg-lime-400 hover:bg-lime-500 text-slate-800 font-semibold px-8 py-3 rounded-full">
                Contact Us
              </button>
            </div>
             
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-gray-600 text-sm">Copyright © 2025 JF Products. All rights reserved</p>
            <div className="flex space-x-4 mt-2 sm:mt-0">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
