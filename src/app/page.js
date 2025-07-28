import AgriculturalProducts from "@/component/agricultural-products";
import Landscape from "@/component/landscape";
import TrustSection from "@/component/trust-section";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <AgriculturalProducts></AgriculturalProducts>
      <Landscape></Landscape>
      <TrustSection></TrustSection>
    </div>
  );
}
