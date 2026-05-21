import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

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
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: i * 0.2 }}
              className="bg-white p-10 border border-zinc-100 shadow-sm relative group"
            >
              <span className="text-8xl font-serif text-[#C9A051]/20 absolute top-4 left-4 group-hover:text-[#C9A051]/40 transition-colors">
                “
              </span>
              <p className="text-zinc-600 italic leading-relaxed mb-8 relative z-10">
                Historical testimony from the residents of Kampung Kemasan.
              </p>
              <div className="border-t pt-6">
                <h3 className="font-bold uppercase tracking-widest text-sm">
                  Residen {i}
                </h3>
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest mt-1">
                  Gresik Local
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
