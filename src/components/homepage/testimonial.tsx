"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Testimonial() {
  const { t } = useTranslation();

  const fetchedTestimonials = t("testimonials.items", { returnObjects: true });
  const testimonials = Array.isArray(fetchedTestimonials)
    ? fetchedTestimonials
    : [];

  return (
    <section className="py-24 px-4 md:px-8 bg-[#F6F6EC]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold tracking-tighter uppercase mb-4">
            {t("testimonials.heading")}
          </h2>
          <div className="h-1 w-20 bg-[#C9A051] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id || index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: (index + 1) * 0.2 }}
              className="bg-white p-10 border border-zinc-100 shadow-sm relative group flex flex-col justify-between"
            >
              <div>
                <span className="text-8xl font-serif text-[#C9A051]/20 absolute top-4 left-4 group-hover:text-[#C9A051]/40 transition-colors">
                  “
                </span>
                <p className="text-zinc-600 italic leading-relaxed mb-8 relative z-10 line-clamp-6">
                  {testimonial.quote}
                </p>
              </div>

              <div>
                <div className="border-t pt-6">
                  <h3 className="font-bold uppercase tracking-widest text-sm">
                    {testimonial.name}
                  </h3>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest mt-1">
                    {testimonial.role}
                  </p>
                </div>
                <button
                  onClick={() => window.open(testimonial.link, "_blank")}
                  className="mt-4 text-[#C9A051] hover:text-[#8B4513] transition-colors font-semibold"
                >
                  {t("testimonials.view_detail")}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
