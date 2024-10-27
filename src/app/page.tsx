import Image from "next/image";
import Hero from "./shared/Components/Hero/Hero";
import GridSection from "./shared/Components/GridSection/GridSection";
import Shippingneeds from "./shared/Components/Shippingneeds/Shippingneeds";
import ShippingSection from "./shared/Components/ShippingSection/ShippingSection";
import Appdownload from "./shared/Components/Appdownload/Appdownload";
import Onlineshoppingsection from "./shared/Components/Onlineshoppingsection/Onlineshoppingsection";
import Servicessection from "./shared/Components/Servicessection/Servicessection";

export default function Home() {
  return (
    <div>
      <Hero />
      <Onlineshoppingsection/>
      <Servicessection/>
      <GridSection />
      <Shippingneeds />
      <ShippingSection />
      <Appdownload />
    </div>
  );
}
