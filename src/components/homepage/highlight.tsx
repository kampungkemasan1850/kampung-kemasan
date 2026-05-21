import { motion, type Variants } from "framer-motion";

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

type HighlightProps = {
  t: (key: string) => string;
};

export default function Highlight({ t }: HighlightProps) {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 px-4 md:px-8 border-b border-zinc-200"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {[
          { key: "architecture" },
          { key: "history" },
          { key: "photography" },
        ].map((item) => (
          <motion.div key={item.key} variants={fadeInUp} className="space-y-4">
            <div className="h-px w-12 bg-[#C9A051] mb-6"></div>
            <h3 className="text-2xl font-bold uppercase tracking-tighter leading-tight">
              {t(`features.${item.key}_title`)}
            </h3>
            <p className="text-zinc-500 font-light leading-relaxed">
              {t(`features.${item.key}_desc`)}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
