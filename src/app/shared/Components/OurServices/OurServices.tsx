// components/ServiceArea.tsx
import React from "react";
import Image from "next/image";

const OurServices: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">
          Our Service Area
        </h2>
        <hr className="w-16 h-1 bg-blue-500 mx-auto mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-700">
              We pride ourselves on our multi-cultural workforce with a diverse
              range of qualifications. Trained to handle any situation across
              all commodities, our team are dedicated to ensuring your cargo is
              safe and secure every step of the way.
            </p>
          </div>

          <div className="bg-blue-500 p-6 rounded-lg text-white flex flex-col items-center justify-center">
            <span className="text-5xl font-bold">165</span>
            <span className="text-xl">worldwide</span>
            <span className="text-xl">offices</span>
          </div>

          <div className="bg-green-500 p-6 rounded-lg text-white flex flex-col items-center justify-center">
            <span className="text-5xl font-bold">5,000</span>
            <span className="text-xl">+</span>
            <span className="text-xl">employees</span>
          </div>
        </div>

        <div className="grid mb-10 grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-64 md:h-full">
            <Image
              src="/image1.jpg"
              alt="Workforce Development"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Developing our workforce
            </h3>
            <hr className="w-16 h-1 bg-blue-500 mb-4" />
            <p className="text-gray-700">
              At Rolling Cargo, we invest in our team so they can serve you
              better. Our agility and ability to rise to any challenge all comes
              down to our talented, passionate and diverse team. That is why we
              continuously invest in recruiting, training and developing our
              staffs skillset so we can deliver the exceptional service that
              Emirates SkyCargo is known for.
            </p>
          </div>
        </div>

        <div className="grid mb-10 grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Recognising our stars</h3>
            <hr className="w-16 h-1 bg-blue-500 mb-4" />
            <p className="text-gray-700">
              Hard work, passion and dedication is something we believe should
              be rewarded. That is why we incentivise our employees with a range
              of rewards throughout the year to keep them motivated,
              enthusiastic and empowered. These include offering Najm Awards,
              celebrating Emirati Womens Day and partaking in the Dubai Fitness
              Challenge together.
            </p>
          </div>

          <div className="relative h-64 md:h-full">
            <Image
              src="/image2.jpg"
              alt="Workforce Development"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="grid mb-10 grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-64 md:h-full">
            <Image
              src="/image3.jpg"
              alt="Workforce Development"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Recruiting globally</h3>
            <hr className="w-16 h-1 bg-blue-500 mb-4" />
            <p className="text-gray-700">
              For us, it is imperative to have a global recruiting strategy that
              brings the best talent through our doors. That is why we
              continuously scour the globe for the most highly qualified,
              diverse and dedicated candidates to join our every-growing team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
