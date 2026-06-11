import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const testimonials = [
  {
    id: 1,
    name: "Prabu",
    role: "Visitor",
    quote:
      "A village that has been designated as a heritage site. Many of the ancient buildings are well-maintained, while others are poorly maintained, but still quite attractive for photos thanks to their overgrown vegetation. However, most of the second floors are used as swallow houses. Some are for sale, perhaps someone would like to experience the atmosphere of living in a heritage area. The best time to visit is in the afternoon or evening, as there are many food and drink vendors.",
    link: "https://maps.app.goo.gl/oCxFYPSwLa4ewPaj8",
  },
  {
    id: 2,
    name: "Ebith Junaidi",
    role: "Visitor",
    quote:
      "It's just a village that's not as big as the old town of Semarang, very few people visit here, but just to know, you can see the atmosphere of the packaging village which is located not far from Bandar Grisse.",
    link: "https://maps.app.goo.gl/ZhbsNsvvbTMyaHDV8",
  },
  {
    id: 3,
    name: "Anni Lim",
    role: "Visitor",
    quote:
      "The ancient house is still well-maintained and beautiful. It's just that it wasn't possible to explore it during the Eid al-Adha holiday. Hopefully, there'll be another opportunity.",
    link: "https://maps.app.goo.gl/u1b3nLBixR6j2wb99",
  },
];

export default function Testimonial() {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#F6F6EC]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold tracking-tighter uppercase mb-4">
            Voice of the Village
          </h2>
          <div className="h-1 w-20 bg-[#C9A051] mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: testimonial.id * 0.2 }}
              className="bg-white p-10 border border-zinc-100 shadow-sm relative group"
            >
              <span className="text-8xl font-serif text-[#C9A051]/20 absolute top-4 left-4 group-hover:text-[#C9A051]/40 transition-colors">
                “
              </span>
              <p className="text-zinc-600 italic leading-relaxed mb-8 relative z-10 line-clamp-6">
                {testimonial.quote}
              </p>
              <div className="border-t pt-6">
                <h3 className="font-bold uppercase tracking-widest text-sm">
                  {testimonial.name} 
                </h3>
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest mt-1">
                  {testimonial.role}
                </p>
              </div>
              <button onClick={() => window.open(testimonial.link, "_blank")} className="mt-4 text-[#C9A051] hover:text-[#8B4513] transition-colors">
                View Detail
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
