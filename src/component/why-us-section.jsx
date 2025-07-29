// components/WhyUsSection.jsx
import { ShieldCheck, Users, Layers } from "lucide-react";

export default function WhyUsSection() {
  return (
    <section className="py-16 px-4 md:px-20 bg-white text-black">
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold mb-2">Why Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We specialize in delivering durable and innovative fencing solutions built to last.
          With a focus on quality and trust, we help secure spaces across industries and communities.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
  {/* Left Card */}
  <div className="bg-blue-50 rounded-lg shadow-md p-6">
    <ShieldCheck className="text-black mb-4" size={32} />
    <h3 className="text-xl font-semibold mb-2">Unmatched Durability with Corrosion-Free Technology</h3>
    <p className="text-gray-700 text-sm">
      Our JF-270 barbed wire features a robust 270 GSM zinc coating, ensuring superior resistance
      against rust and corrosion. Paired with stainless steel binding wire, our fencing solutions
      are designed to withstand harsh environmental conditions, offering longevity and reliability.
    </p>
  </div>

  {/* Center Card */}
  <div className="bg-[#002B64] text-white rounded-lg shadow-md p-6 -mt-6 md:-mt-12">
    <Users className="text-lime-400 mb-4" size={32} />
    <h3 className="text-xl font-semibold mb-2">Customer-Centric Approach</h3>
    <p className="text-sm">
      At JF Products, customer satisfaction is paramount. We pride ourselves on delivering timely services,
      maintaining transparent communication, and ensuring a seamless purchasing experience. Our commitment
      to excellence is reflected in the positive feedback from our valued clients.
    </p>
  </div>

  {/* Right Card */}
  <div className="bg-blue-50 rounded-lg shadow-md p-6">
    <Layers className="text-black mb-4" size={32} />
    <h3 className="text-xl font-semibold mb-2">Innovative and Diverse Product Range</h3>
    <p className="text-gray-700 text-sm">
      We offer a wide array of fencing solutions, including PolyNet Mesh, Australian Trellis, and GI Poultry Mesh,
      catering to various needs from agricultural to residential applications. Our products combine functionality
      with aesthetic appeal, ensuring both security and style.
    </p>
  </div>
</div>


      {/* Button */}
      <div className="text-center mt-10">
        <button className="bg-lime-400 hover:bg-lime-500 text-black font-medium py-2 px-6 rounded-full transition">
          Contact Us
        </button>
      </div>
    </section>
  );
}
