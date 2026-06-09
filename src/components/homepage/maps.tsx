import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import heroImg from "../../../public/assets/images/guide-map.webp";

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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tighter uppercase leading-none text-white">
              {t("contact.address_label")}
            </h2>
            {/* Guide map image */}
            <div className="my-6">
              <div className=" shadow-lg overflow-hidden rounded">
                <Image
                  width={250}
                  height={200}
                  src={heroImg}
                  alt="Guide Map Kampung Kemasan 1"
                  className="h-[50vh] w-auto object-cover transition-transform hover:scale-105"
                />
              </div>
            </div>
            <Link
              href="https://maps.app.goo.gl/Wq5PmYcvCCX5i5Y2A"
              target="_blank"
              className="inline-block border bg-[#8B2615] border-white md:border-black px-8 py-4 uppercase font-bold tracking-widest text-xs hover:bg-[#C9A051] hover:border-[#C9A051] text-white transition-all mb-6"
            >
              View on Map
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapsSection;
