import { motion } from "framer-motion";

import premierLeague from "../assets/image-2.jpg";
import championsLeague from "../assets/ucl-3.jpg";
import faCup from "../assets/fa-cup-1.jpg";
import clubWorldCup from "../assets/club-world-cup-1.jpg";
import communityShield from "../assets/community-shield-1.jpg";
import carabaoCup from "../assets/carabao-1.jfif";
import superCup from "../assets/super-1.jpg";
import pokal from "../assets/pokal-1.jpg";

const trophies = [
  {
    name: "Premier League",
    year: "2023",
    image: premierLeague,
  },
  {
    name: "Champions League",
    year: "2023",
    image: championsLeague,
  },
  {
    name: "FA Cup",
    year: "2023",
    image: faCup,
  },
  {
    name: "Club World Cup",
    year: "2023",
    image: clubWorldCup,
  },
  {
    name: "Community Shield",
    year: "2024",
    image: communityShield,
  },
  {
    name: "Carabao Cup",
    year: "2026",
    image: carabaoCup,
  },
  {
    name: "Super Cup",
    year: "2023",
    image: superCup,
  },
  {
    name: "DFB-Pokal",
    year: "2020",
    image: pokal,
  },
];

const Trophies = () => {
  return (
    <section
      id="trophies"
      className="relative overflow-hidden bg-[#050505] py-24 md:py-32"
    >
      {/* Ambient glow */}
      <div className="absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[5px] text-sky-300">
            The Collection
          </p>

          <h2 className="mt-4 text-4xl font-bold uppercase leading-[0.95] text-white sm:text-5xl md:text-7xl">
            TROPHY
            <br />
            <span className="text-gray-500">CABINET.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-500 md:text-base">
            Every season leaves a mark. These are the trophies that helped
            define the journey.
          </p>
        </motion.div>

        {/* Trophy Showcase */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trophies.map((trophy, index) => (
            <motion.div
              key={trophy.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              className="group relative h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-black transition-all duration-500 hover:border-white/20 sm:h-[460px]"
            >
              {/* Trophy Image */}
              <img
                src={trophy.image}
                alt={trophy.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/10 transition-all duration-700 group-hover:bg-black/55" />

              {/* Bottom Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/50 to-transparent" />

              {/* Trophy Number */}
              <div className="absolute right-5 top-5 z-10">
                <span className="text-5xl font-black text-white/20 transition-all duration-500 group-hover:text-white/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Trophy Information */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  z-10
                  w-full
                  p-6
                  transition-transform
                  duration-700
                  ease-out

                  translate-y-0

                  md:translate-y-[75px]
                  md:group-hover:translate-y-0
                "
              >
                {/* Accent Line */}
                <div className="mb-4 h-px w-10 bg-sky-300 transition-all duration-700 group-hover:w-20" />

                {/* Year */}
                <p className="text-xs uppercase tracking-[5px] text-sky-300">
                  {trophy.year}
                </p>

                {/* Name */}
                <h3 className="mt-2 text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
                  {trophy.name}
                </h3>

                {/* Label */}
                <p className="mt-2 text-xs uppercase tracking-[3px] text-gray-400">
                  Trophy Won
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 border-t border-white/10 pt-10 text-center"
        >
          <p className="text-xs uppercase tracking-[5px] text-gray-600">
            Silverware earned. Legacy built.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Trophies;