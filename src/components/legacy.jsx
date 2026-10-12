import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import haaland from "../assets/image-4.jpg"

const milestones = [
  {
    year: "2000",
    title: "The Beginning",
    description: "Born in Leeds, England.",
  },
  {
    year: "2019",
    title: "The Breakthrough",
    description: "Announced himself on the Champions League stage.",
  },
  {
    year: "2022",
    title: "The Next Chapter",
    description: "Joined Manchester City and entered a new era.",
  },
];

const Legacy = () => {
  return (
    <section
      id="legacy"
      className="relative overflow-hidden bg-[#050505] py-24 md:py-32"
    >
      {/* Background glow */}
      <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-sky-400/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <p className="mb-4 text-xs uppercase tracking-[5px] text-sky-300">
            The Journey
          </p>

          <h2 className="max-w-4xl text-4xl font-bold uppercase leading-tight text-white sm:text-5xl md:text-6xl">
            FROM BRYNE
            <br />
            <span className="text-gray-500">TO THE WORLD.</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="group relative overflow-hidden rounded-2xl border border-white/10">

              <img
                src={haaland}
                alt="Erling Haaland"
                className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[650px]"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Image label */}
              <div className="absolute bottom-6 left-6">
                <p className="text-xs uppercase tracking-[4px] text-gray-300">
                  Erling Haaland
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  The Viking
                </p>
              </div>
            </div>

            {/* Decorative number */}
            <div className="pointer-events-none absolute -bottom-10 -right-4 text-[140px] font-black leading-none text-white/[0.03] md:text-[200px]">
              9
            </div>
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            <p className="text-lg leading-8 text-gray-300 md:text-xl">
              From the small Norwegian town of Bryne to the brightest
              stadiums in world football, Erling Haaland's rise has been
              anything but ordinary.
            </p>

            <p className="mt-6 text-base leading-7 text-gray-500 md:text-lg">
              A relentless desire to improve, extraordinary physical ability,
              and an instinct for finding the back of the net transformed a
              promising young striker into one of football's most feared
              forwards.
            </p>

            <p className="mt-6 text-base leading-7 text-gray-500 md:text-lg">
              His journey through Molde, Salzburg, Dortmund and eventually
              Manchester City has created a story that is still being written.
            </p>

            {/* Explore button */}
            <a
              href="#career"
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white hover:text-black"
            >
              Explore His Journey

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>
        </div>

        {/* Milestones */}
        <div className="mt-24 grid gap-6 border-t border-white/10 pt-10 md:mt-32 md:grid-cols-3">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              className="group border-b border-white/10 pb-8 md:border-b-0 md:border-r md:pr-8 last:border-0"
            >
              <span className="text-4xl font-bold text-white md:text-5xl">
                {milestone.year}
              </span>

              <h3 className="mt-4 text-lg font-semibold uppercase tracking-wide text-white">
                {milestone.title}
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500">
                {milestone.description}
              </p>

              <div className="mt-5 h-px w-10 bg-sky-300 transition-all duration-500 group-hover:w-20" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Legacy;