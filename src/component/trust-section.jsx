import { Star, Smile, Truck } from "lucide-react"

export default function TrustSection() {
  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Premium",
      subtitle: "Products",
    },
    {
      icon: <Smile className="w-6 h-6" />,
      title: "4000+",
      subtitle: "Google Review",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Delivery",
      subtitle: "Across India",
    },
  ]

  return (
   <section className="bg-gray-50 py-12">
     <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="bg-blue-900 rounded-3xl px-8 py-12">
        <h2 className="text-white text-3xl font-medium text-center mb-12">Trusted by over 6K+ customers</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <div className="text-blue-900">{feature.icon}</div>
              </div>

              <div className="text-white text-center md:text-left">
                <div className="text-xl font-semibold">{feature.title}</div>
                <div className="text-lg opacity-90">{feature.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   </section>
  )
}
