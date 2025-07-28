import AgriculturalProducts from "@/component/agricultural-products";
import ContactForm from "@/component/contact-from";
import CustomerTestimonials from "@/component/customer-testimonials";
import HeroSlider from "@/component/HeroSlider";
import Landscape from "@/component/landscape";
import RotatedBanner from "@/component/RotateBanner";
import TrustSection from "@/component/trust-section";
import WhyUsSection from "@/component/why-us-section";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSlider></HeroSlider>
      <AgriculturalProducts></AgriculturalProducts>
      <Landscape></Landscape>
      <TrustSection></TrustSection>
      <WhyUsSection></WhyUsSection>
      <RotatedBanner></RotatedBanner>
      <CustomerTestimonials></CustomerTestimonials>
      <ContactForm></ContactForm>
    </div>
  );
}
