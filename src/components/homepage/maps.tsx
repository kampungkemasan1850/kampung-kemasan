import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import heroImg from "../../../public/assets/images/hero-img.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const t = (key: string) => {
  if (key === "contact.address_label") return "Address";
  return key;
};

const Map: React.FC = () => {
  const src =
    "https://www.google.com/maps?q=Kampung+Kemasan+Gresik&output=embed";

  return (
    <div className="w-full h-full">
      <iframe
        title="Kampung Kemasan Location"
        src={src}
        className="w-full h-full"
        loading="lazy"
      />
    </div>
  );
};

const MapsSection: React.FC = () => {
  return (
    <section className="px-4 md:px-8 bg-[#EFEDE0] md:bg-[linear-gradient(to_left,#000_50%,#EFEDE0_50%)]">
      <div className="md:max-w-[80vw] mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-16 items-center">
          {/* Left: original embedded map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-4 h-[50vh] w-full shadow-2xl transition-all duration-700"
          >
            <Map />
          </motion.div>

          {/* Right: guide map area + text */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-3 text-zinc-900"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter uppercase leading-none text-white">
              Find the <br /> Heart of Gresik
            </h2>
            <p className="font-light leading-relaxed mb-6 opacity-80 text-white">
              {t("contact.address_label")}: Located in the historic center.
            </p>
            <Link
              href="https://maps.app.goo.gl/Wq5PmYcvCCX5i5Y2A"
              target="_blank"
              className="inline-block border bg-[#C9A051] border-white md:border-black px-8 py-4 uppercase font-bold tracking-widest text-xs hover:bg-[#C9A051] hover:border-[#C9A051] text-white transition-all mb-6"
            >
              View on Map
            </Link>

            {/* Guide map image */}
            <div className="mt-8 grid grid-cols-3 gap-2 md:gap-4">
              <div className="bg-white shadow-lg overflow-hidden rounded">
                <Image
                  width={250}
                  height={200}
                  src={heroImg} 
                  alt="Guide Map Kampung Kemasan 1"
                  className="w-full h-[12vh] md:h-[20vh] object-cover transition-transform hover:scale-105"
                />
              </div>

              <div className="bg-white shadow-lg overflow-hidden rounded">
                <Image
                  width={250}
                  height={200}
                  src={heroImg} 
                  alt="Guide Map Kampung Kemasan 2"
                  className="w-full h-[12vh] md:h-[20vh] object-cover transition-transform hover:scale-105"
                />
              </div>

              <div className="bg-white shadow-lg overflow-hidden rounded">
                <Image
                  width={250}
                  height={200}
                  src={heroImg} 
                  alt="Guide Map Kampung Kemasan 3"
                  className="w-full h-[12vh] md:h-[20vh] object-cover transition-transform hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapsSection;
