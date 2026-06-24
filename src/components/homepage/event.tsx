import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

import BandengImg from "../../../public/assets/images/bandeng-event.webp";
import BadoghanImg from "../../../public/assets/images/badoghan-event.webp";

const eventList = [
  { key: "pasar_bandeng", image: BandengImg },
  { key: "badoghan", image: BadoghanImg },
];

type EventHighlightProps = {
  t: (key: string) => string;
};

export default function EventHighlight({ t }: EventHighlightProps) {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#F6F6EC] border-t border-zinc-200">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6"
        >
          <div className="border-l-4 border-[#8B2615] pl-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none">
              {t("events.title")}.
            </h2>
            <p className="text-zinc-500 mt-4 text-xs font-light tracking-[0.4em] uppercase">
              {t("events.subtitle")}
            </p>
          </div>
          <Link
            href="/event"
            className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-[#8B2615] hover:border-[#8B2615] transition-all"
          >
            {t("navbar.event")}
            <span className="group-hover:translate-x-2 transition-transform">
              <FaArrowRight />
            </span>
          </Link>
        </motion.div>

        <div className="flex flex-col">
          {eventList.map((event, idx) => (
            <motion.div
              key={event.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative border-b border-zinc-300 py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden pr-4 md:pr-8"
            >
              <div className="absolute inset-0 bg-[#8B2615]/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 w-full">
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                  <div className="min-w-30">
                    <p className="text-[#8B2615] text-xs font-bold tracking-widest mb-1 uppercase">
                      ARCHIVE
                    </p>
                    <p className="text-zinc-400 text-sm font-medium uppercase">
                      ANNUAL
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:pl-4 transition-all duration-300 uppercase">
                      {t(`events.${event.key}`)}
                    </h3>
                  </div>
                </div>

                <div className="relative w-full md:w-48 h-48 md:h-32 rounded-xl overflow-hidden shadow-sm group-hover:shadow-lg transition-all duration-500 shrink-0">
                  <Image
                    src={event.image}
                    alt={t(`events.${event.key}`)}
                    fill
                    sizes="(max-width: 768px) 100vw, 200px"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
