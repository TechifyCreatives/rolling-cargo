import Image from "next/image";
import Hero from "./shared/Components/Hero/Hero";
import GridSection from "./shared/Components/GridSection/GridSection";
import Textarea from "./shared/Components/Textarea/Textarea";
import Shippingneeds from "./shared/Components/Shippingneeds/Shippingneeds";
import ShippingSection from "./shared/Components/ShippingSection/ShippingSection";
import Appdownload from "./shared/Components/Appdownload/Appdownload";

export default function Home() {
  return (
    <div>
      <Hero />
      <Textarea />
      <GridSection />
      <Shippingneeds />
      <ShippingSection />
      <Appdownload />
    </div>
  );
}
