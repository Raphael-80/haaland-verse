import { motion } from "framer-motion";
import mentalityImage from "../assets/viking-2.jpg";

const principles = [
  {
    number: "01",
    title: "DISCIPLINE",
    text: "The work behind the goals. Every session, every recovery, every detail matters.",
  },
  {
    number: "02",
    title: "HUNGER",
    text: "Success is never enough. The next goal is always waiting.",
  },
  {
    number: "03",
    title: "RELENTLESS",
    text: "Pressure creates moments. The Viking thrives when the stakes are highest.",
  },
];

const Mentality = () => {
  return (
    <section
      id="mentality"
      className="relative overflow-hidden bg-[#050505] py-24 md:py-32"
    >
      {/* Hero Image */}
      <div className="relative min-h-[700px] overflow-hidden md:min-h-[850px]">

        <motion.img
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={mentalityImage}
          alt="Erling Haaland"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Main Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/20 to-black/50" />

        {/* Side gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/20" />

        {/* Giant Background Text */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
          <span className="text-[180px] font-black uppercase leading-none text-white/[0.035] sm:text-[260px] md:text-[400px] lg:text-[520px]">
            VIKING
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[700px] max-w-7xl items-end px-6 pb-20 md:min-h-[850px] md:px-10 md:pb-28">

          <div className="max-w-4xl">

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-xs uppercase tracking-[5px] text-sky-300"
            >
              The Mindset
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-5 text-5xl font-black uppercase leading-[0.9] text-white sm:text-6xl md:text-8xl lg:text-9xl"
            >
              BUILT
              <br />
              <span className="text-gray-400">DIFFERENT.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-7 max-w-2xl text-sm leading-7 text-gray-300 md:text-lg md:leading-8"
            >
              Talent may open the door. Discipline, obsession and an
              unrelenting desire to improve are what keep the door open.
            </motion.p>

          </div>
        </div>
      </div>

      {/* Principles */}
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl py-20 text-center md:py-28"
        >
          <p className="text-xs uppercase tracking-[5px] text-gray-600">
            The Formula
          </p>

          <h3 className="mt-4 text-3xl font-bold uppercase text-white md:text-5xl">
            WHAT DRIVES
            <br />
            <span className="text-gray-500">THE VIKING?</span>
          </h3>
        </motion.div>

        <div className="grid border-t border-white/10 md:grid-cols-3">

          {principles.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              className="group border-b border-white/10 py-10 md:border-b-0 md:border-r md:px-10 md:py-14 last:border-r-0"
            >

              <span className="text-xs tracking-[4px] text-sky-300">
                {principle.number}
              </span>

              <h4 className="mt-6 text-2xl font-bold uppercase text-white md:text-3xl">
                {principle.title}
              </h4>

              <p className="mt-4 max-w-sm text-sm leading-7 text-gray-500">
                {principle.text}
              </p>

              <div className="mt-7 h-px w-8 bg-sky-300 transition-all duration-500 group-hover:w-16" />

            </motion.div>
          ))}

        </div>

        {/* Final statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="py-20 text-center md:py-28"
        >
          <p className="text-xs uppercase tracking-[5px] text-gray-600">
            The Viking Code
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-2xl font-medium uppercase leading-tight text-white sm:text-3xl md:text-5xl">
            "THE NEXT GOAL IS ALWAYS
            <span className="text-gray-500"> THE MOST IMPORTANT."</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Mentality;