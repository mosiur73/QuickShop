import { Building2 } from "lucide-react"

export default function CrookedBanner() {
  return (
   <section className="bg-gray-50">
     <div className="w-full py-8 overflow-hidden ">
      {/* Crooked Banner Container */}
      <div className="relative transform -rotate-1 w-full h-20 bg-gradient-to-r from-white via-blue-50 to-blue-100 shadow-sm">
        {/* Wavy Background Shape */}
        <div className="absolute inset-0">
          <svg viewBox="0 0 1200 80" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,30 Q300,10 600,35 T1200,30 L1200,80 L0,80 Z" fill="rgba(219, 234, 254, 0.7)" />
            <path d="M0,45 Q200,25 400,45 T800,40 T1200,45 L1200,80 L0,80 Z" fill="rgba(191, 219, 254, 0.5)" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center border border-black">
          <div className="flex items-center space-x-16">
            {/* Quality Product */}
            <div className="flex items-center space-x-3">
              <Building2 className="w-6 h-6 text-slate-600" />
              <span className="text-slate-700 font-semibold text-base">Quality Product</span>
            </div>

            {/* Shipping Across India */}
            <div className="flex items-center space-x-3">
              <Building2 className="w-6 h-6 text-slate-600" />
              <span className="text-slate-700 font-semibold text-base">Shipping Across India</span>
            </div>

            {/* Quality Product */}
            <div className="flex items-center space-x-3">
              <Building2 className="w-6 h-6 text-slate-600" />
              <span className="text-slate-700 font-semibold text-base">Quality Product</span>
            </div>

            {/* Shipping Across India */}
            <div className="flex items-center space-x-3">
              <Building2 className="w-6 h-6 text-slate-600" />
              <span className="text-slate-700 font-semibold text-base">Shipping Across India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}
