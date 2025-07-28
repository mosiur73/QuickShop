import { Shield, Settings, Network } from "lucide-react"

export default function WhyUsSection() {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Unmatched Durability with Corrosion-Free Technology",
      description:
        "Our JF-270 barbed wire features a robust 270 GSM zinc coating, ensuring superior resistance against rust and corrosion. Paired with stainless steel binding wire, our fencing solutions are designed to withstand harsh environmental conditions, offering longevity and reliability.",
      bgColor: "bg-blue-50",
      iconColor: "text-gray-700",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Customer-Centric Approach",
      description:
        "At JF Products, customer satisfaction is paramount. We pride ourselves on delivering timely services, maintaining transparent communication, and ensuring a seamless purchasing experience. Our commitment to excellence is reflected in the positive feedback from our valued clients.",
      bgColor: "bg-blue-900",
      textColor: "text-white",
      iconColor: "text-lime-400",
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Innovative and Diverse Product Range",
      description:
        "We offer a wide array of fencing solutions, including Polyhex Mesh, Australian Trellis, and GI Poultry Mesh, catering to various needs from agricultural to residential applications. Our products combine functionality with aesthetic appeal, ensuring both security and style.",
      bgColor: "bg-blue-50",
      iconColor: "text-gray-700",
    },
  ]

  return (
   <section className="bg-gray-50 py-12">
     <div className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Us</h2>
        <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
          We specialize in delivering durable and innovative fencing solutions built to last. With a focus on quality
          and trust, we help secure spaces across industries and communities.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => (
          <div key={index} className={`${feature.bgColor} rounded-2xl p-8 ${feature.textColor || "text-gray-900"}`}>
            <div className={`${feature.iconColor} mb-6`}>{feature.icon}</div>

            <h3 className="text-xl font-semibold mb-4 leading-tight">{feature.title}</h3>

            <p className={`text-sm leading-relaxed ${feature.textColor ? "opacity-90" : "text-gray-600"}`}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Contact Button */}
      <div className="text-center">
        <button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-3 rounded-full transition-colors">
          Contact Us
        </button>
      </div>
    </div>
   </section>
  )
}
