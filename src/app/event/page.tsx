"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ArtEvent from "../../../public/assets/images/art-event.webp";
import YearEvent from "../../../public/assets/images/year-event.webp";
import { FaArrowRight } from "react-icons/fa";
import "../../i18n";
import { useTranslation } from "react-i18next";

export default function EventPage() {
  const { t } = useTranslation();
  const fetchedEvents = t("event_page.annual_events", { returnObjects: true });
  const annualEvents = Array.isArray(fetchedEvents) ? fetchedEvents : [];

  return (
    <div className="min-h-screen text-zinc-900">
      <section className="pt-20 px-4 md:px-8 max-w-7xl mx-auto mb-20">
        <div className="border-l-8 border-black pl-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
            {t("event_page.header.title")}
          </h1>
          <p className="text-zinc-500 mt-4 text-sm font-light tracking-[0.4em] uppercase">
            {t("event_page.header.subtitle")}
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#C9A051] mb-6">
                {t("event_page.section1.badge")}
              </h2>
              <p className="text-zinc-500 font-light leading-relaxed">
                {t("event_page.section1.desc")}
              </p>
            </div>

            <div className="relative w-full h-[45vh] md:h-[70vh] overflow-hidden group/img">
              <Image
                src={YearEvent}
                alt="Annual Events Kampung Kemasan Heritage"
                fill
                sizes="(max-width: 1280px) 33vw, 100vw"
                className="object-contain transition-transform duration-700 group-hover/img:scale-105"
                placeholder="blur"
              />
            </div>
          </div>

          <div className="lg:col-span-8 space-y-24">
            {annualEvents.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group border-b border-zinc-300 pb-8"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight group-hover:text-[#C9A051] transition-colors">
                    {event.title}
                  </h3>
                  <span className="text-xs font-bold px-3 py-1 bg-black text-white uppercase tracking-tighter shrink-0">
                    {event.period}
                  </span>
                </div>

                <p className="text-zinc-600 leading-relaxed mb-6 font-light">
                  {event.description}
                </p>

                <div className="mb-6 bg-zinc-100 p-6 rounded-sm">
                  <p className="font-bold text-sm uppercase tracking-widest mb-4">
                    {event.listTitle}
                  </p>
                  <ul className="space-y-3">
                    {event.listItems?.map((item: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-zinc-600 text-sm md:text-base"
                      >
                        <span className="w-1.5 h-1.5 bg-[#C9A051] rounded-full mt-2 shrink-0"></span>
                        <span className="font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {event.menus && (
                  <div className="mb-6">
                    <p className="text-sm text-zinc-600 font-light mb-4 italic">
                      {event.menusTitle}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {event.menus.map((menu: string, i: number) => (
                        <span
                          key={i}
                          className="border border-zinc-300 bg-white px-4 py-2 text-[11px] uppercase font-bold tracking-widest text-zinc-700 shadow-sm"
                        >
                          {menu}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <p className="text-zinc-600 leading-relaxed text-sm md:text-base font-light">
                  {event.extraDescription}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[70vh] transition-all duration-700">
              <Image
                src={ArtEvent}
                alt="MTN Lab Exhibition"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover rounded-sm shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#C9A051] p-8 hidden md:block">
                <p className="text-black font-bold text-4xl tracking-tighter">
                  {t("event_page.exhibition.date_badge")}
                </p>
                <p className="text-black/70 text-xs font-bold uppercase tracking-widest">
                  {t("event_page.exhibition.role_badge")}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-2">
                {t("event_page.exhibition.title1")} <br />{" "}
                <span className="text-[#C9A051] text-3xl md:text-4xl">
                  {t("event_page.exhibition.title2")}
                </span>
              </h2>
              <div className="space-y-4 text-zinc-400 font-light leading-relaxed">
                <p>{t("event_page.exhibition.p1")}</p>
                <p>{t("event_page.exhibition.p2")}</p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-6 border-t border-zinc-800">
                <div>
                  <h4 className="font-bold text-[#C9A051] uppercase text-xs tracking-widest mb-2">
                    {t("event_page.exhibition.schedule_label")}
                  </h4>
                  <p className="text-sm text-zinc-300">
                    {t("event_page.exhibition.schedule_val")}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#C9A051] uppercase text-xs tracking-widest mb-2">
                    {t("event_page.exhibition.initiator_label")}
                  </h4>
                  <p className="text-sm text-zinc-300">
                    {t("event_page.exhibition.initiator_val")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 text-white px-4 md:px-8 py-24 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="border-t border-zinc-700 pt-8">
              <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6 text-white">
                {t("event_page.exhibition.activities_title")}
              </h3>
              <div className="text-zinc-400 font-light space-y-6 leading-relaxed">
                <p>{t("event_page.exhibition.activities_p1")}</p>
                <p>{t("event_page.exhibition.activities_p2")}</p>
              </div>
            </div>

            <div className="border-t border-zinc-700 pt-8">
              <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6 text-white">
                {t("event_page.exhibition.space_title")}
              </h3>
              <div className="text-zinc-400 font-light space-y-6 leading-relaxed">
                <p>{t("event_page.exhibition.space_p1")}</p>
                <p>{t("event_page.exhibition.space_p2")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 text-center py-24 border-t mx-[5vw] border-zinc-200">
        <p className="text-zinc-400 uppercase tracking-[0.5em] text-xs mb-8">
          {t("event_page.footer.badge")}
        </p>
        <h2 className="text-3xl md:text-5xl font-light italic mb-12 text-zinc-800 px-4 leading-tight">
          {t("event_page.footer.quote_1")} <br className="hidden md:block" />{" "}
          {t("event_page.footer.quote_2")}
        </h2>
        <div className="flex flex-row justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-black text-white px-10 py-4 uppercase font-bold tracking-widest text-xs hover:bg-[#C9A051] transition-all duration-500"
          >
            {t("event_page.footer.cta")}
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}
