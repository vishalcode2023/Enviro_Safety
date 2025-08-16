import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-white py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left - Text */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-[80px] sm:text-[120px] leading-none font-extrabold text-slate-800">
            ABOUT <br /> <span className="text-sky-600">US</span>
          </h1>

          <p className="text-sm text-sky-700 font-medium">
            Luxurious Interior and Industrial Design
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            At{" "}
            <span className="font-semibold text-indigo-700">
              Enviro Safety Glass
            </span>
            , we blend modern elegance with industrial innovation. Our glass
            solutions are engineered for strength, style, and
            performance—perfect for both architectural and interior design.
          </p>
        </div>

        {/* Middle - Main Image */}
        <div className="w-full lg:w-2/3 flex-shrink-0 rounded-3xl overflow-hidden  max-w-[700px] h-[400px] bg-white flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/dybpd6dkz/image/upload/v1754647023/_DSC4939_xotgwo.jpg"
            alt="Enviro Safety Interior"
            className="max-w-full max-h-full rounded-3xl"
          />
        </div>
      </div>

      {/* Bottom Right Philosophy Section */}
      <div className="mt-16 grid md:grid-cols-2 items-start gap-10">
        <div className="rounded-2xl overflow-hidden shadow-md max-w-md h-[250px] mx-auto md:mx-0">
          <img
            src="https://res.cloudinary.com/dybpd6dkz/image/upload/v1754647130/_DSC4872_qx2nfp.jpg"
            alt="Philosophy"
            className="w-full h-full "
          />
        </div>

        <div className="text-left max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-4">
            Our Philosophy
          </h2>
          <p className="text-gray-600 text-lg">
            At{" "}
            <span className="font-semibold text-indigo-700">
              Enviro Safety Glass
            </span>
            , we believe in building environments that reflect durability,
            transparency, and modern aesthetics. Each piece of glass we craft is
            a statement of quality and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
