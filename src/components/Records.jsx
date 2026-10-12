import { motion } from "framer-motion";

const records = [
  {
    number: 300,
    suffix: "+",
    label: "Career Goals",
    description: "Across club and international football",
  },
  {
    number: 36,
    suffix: "",
    label: "Premier League Record",
    description: "Goals in a single Premier League season",
  },
  {
    number: 5,
    suffix: "",
    label: "Champions League Goals",
    description: "Goals in one historic match",
  },
  {
    number: 9,
    suffix: "",
    label: "The Number",
    description: "The shirt number synonymous with the Viking",
  },
];

const Records = () => {
  return (
    <section
      id="records"
      className="relative overflow-hidden bg-[#050505] py-24 md:py-32"
    >
      {/* Background glow */}
      <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-sky-400/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[5px] text-sky-300">
            The Numbers
          </p>

          <h2 className="mt-4 text-4xl font-bold uppercase leading-[0.95] text-white sm:text-5xl md:text-7xl">
            RECORDS
            <br />
            <span className="text-gray-500">& STATISTICS.</span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-gray-500 md:text-base">
            Numbers don't tell the whole story. But when the numbers look
            like this, they become part of the legend.
          </p>
        </motion.div>

        {/* Main Featured Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="relative mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-16 text-center md:mt-24 md:py-24"
        >
          {/* Giant background 9 */}
          <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[280px] font-black leading-none text-white/[0.025] sm:text-[400px] md:text-[550px]">
            9
          </span>

          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[5px] text-gray-500">
              The Goal Machine
            </p>

            <div className="mt-4 flex items-baseline justify-center">
              <AnimatedNumber value={records[0].number} />
              <span className="text-5xl font-bold text-sky-300 md:text-7xl">
                {records[0].suffix}
              </span>
            </div>

            <h3 className="mt-3 text-xl font-semibold uppercase tracking-[3px] text-white md:text-2xl">
              {records[0].label}
            </h3>

            <p className="mx-auto mt-4 max-w-md text-sm text-gray-500">
              {records[0].description}
            </p>
          </div>
        </motion.div>

        {/* Statistics Grid */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {records.slice(1).map((record, index) => (
            <motion.div
              key={record.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-500 hover:border-white/20 hover:bg-white/[0.04] md:p-9"
            >
              {/* Number */}
              <div className="flex items-baseline">
                <AnimatedNumber value={record.number} />

                {record.suffix && (
                  <span className="text-3xl font-bold text-sky-300">
                    {record.suffix}
                  </span>
                )}
              </div>

              <h3 className="mt-4 text-sm font-semibold uppercase tracking-[2px] text-white">
                {record.label}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {record.description}
              </p>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-sky-300 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-xs uppercase tracking-[4px] text-gray-600">
            Built for records. Driven by goals.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

/* ---------------------------------------------
   Animated Number
--------------------------------------------- */

const AnimatedNumber = ({ value }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-6xl font-black tracking-tight text-white md:text-8xl"
    >
      {value}
    </motion.span>
  );
};

export default Records;