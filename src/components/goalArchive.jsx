import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";

import city1 from "../assets/city-1.jpg";
import city2 from "../assets/city-1.jpg";
import dortmund1 from "../assets/dortmund-1.jfif";
import dortmund2 from "../assets/dortmund-2.jfif";
import salzburg1 from "../assets/city-1.jpg";
import norway1 from "../assets/norway-1.jpg";

const goals = [
  {
    id: 1,
    club: "Manchester City",
    era: "city",
    competition: "Premier League",
    opponent: "Southampton",
    date: "2022",
    type: "Volley",
    image: city1,
    videoUrl: "https://youtube.com/shorts/yA1H9hR63dQ?si=jSJ9gfMBsRRQfZob"
  },
  {
    id: 2,
    club: "Manchester City",
    era: "city",
    competition: "Champions League",
    opponent: "RB Leipzig",
    date: "2023",
    type: "Finishing",
    image: city2,
    videoUrl: "https://youtu.be/5B_ZXp-nil4?si=3h6TrEyCuD8AbLJv"
  },
  {
    id: 3,
    club: "Borussia Dortmund",
    era: "dortmund",
    competition: "Bundesliga",
    opponent: "PSG",
    date: "2021",
    type: "Power Finish",
    image: dortmund1,
    videoUrl: "https://youtu.be/Nzue-fQFfKw?si=rX2bGmMKDK2Ni67U"
  },
  {
    id: 4,
    club: "Manchester City",
    era: "city",
    competition: "World Cup",
    opponent: "Brazil",
    date: "2026",
    type: "Power Finish",
    image: norway1,
    videoUrl: "https://youtube.com/shorts/ex3wW88Kj_E?si=g74T9MZfLj5nEGQ0"
  },
  {
    id: 5,
    club: "Borussia Dortmund",
    era: "dortmund",
    competition: "Bundesliga",
    opponent: "Augsburg",
    date: "2019",
    type: "Hat Trick",
    image: dortmund2,
    videoUrl: "https://youtu.be/rx3V4vcgOsA?si=w_mtsJF9ok_1Md_j"
  },
  {
    id: 6,
    club: "Norway",
    era: "norway",
    competition: "International",
    opponent: "Brazil",
    date: "2026",
    type: "Head Finish",
    image: norway1,
    videoUrl: "https://youtube.com/shorts/5C4dicl2-IE?si=5sLaPLsBzu7obfWQ"
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Manchester City", value: "city" },
  { label: "Dortmund", value: "dortmund" },
  { label: "Salzburg", value: "salzburg" },
  { label: "Norway", value: "norway" },
];

const GoalArchive = () => {
  const [activeFilter, setActiveFilter] = React.useState("all");
  const [activeVideo, setActiveVideo] = useState(null);

  const filteredGoals =
    activeFilter === "all"
      ? goals
      : goals.filter((goal) => goal.era === activeFilter);

  return (
    <section
      id="goals"
      className="relative overflow-hidden bg-[#050505] py-24 md:py-32"
    >
      <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-sky-400/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[5px] text-sky-300">
            The Archive
          </p>

          <h2 className="mt-4 text-4xl font-bold uppercase leading-[0.95] text-white sm:text-5xl md:text-7xl">
            GOAL
            <br />
            <span className="text-gray-500">ARCHIVE.</span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-gray-500 md:text-base">
            A collection of moments that turned the Viking's career into
            something extraordinary.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mt-12 flex gap-3 overflow-x-auto pb-3 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-xs uppercase tracking-[2px] transition-all duration-300 ${activeFilter === filter.value
                ? "border-sky-300 bg-sky-300 text-black"
                : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Goals */}
        <motion.div
          layout
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredGoals.map((goal) => (
              <motion.article
                key={goal.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={goal.image}
                    alt={`${goal.club} vs ${goal.opponent}`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/50" />

                  {/* Play */}

                  <a
                    href={goal.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Watch ${goal.opponent} goal on YouTube`}
                    className="absolute left-1/2 top-1/2 flex h-14 w-14
    -translate-x-1/2 -translate-y-1/2 items-center
    justify-center rounded-full border border-white/30
    bg-black/40 text-white backdrop-blur-md
    transition-all duration-300 hover:scale-110
    md:opacity-0 md:group-hover:opacity-100"
                  >
                    <Play size={18} fill="currentColor" />
                  </a>
                </div>

                {/* Content */}
                <div className="p-6">

                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[3px] text-sky-300">
                      {goal.date}
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="text-gray-600 transition group-hover:text-white"
                    />
                  </div>

                  <h3 className="mt-3 text-xl font-bold uppercase text-white">
                    {goal.opponent}
                  </h3>

                  <p className="mt-1 text-xs uppercase tracking-[2px] text-gray-500">
                    {goal.club} · {goal.competition}
                  </p>

                  <div className="mt-5 h-px w-full bg-white/10" />

                  <p className="mt-4 text-xs uppercase tracking-[3px] text-gray-500">
                    {goal.type}
                  </p>

                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-[4px] text-gray-600">
            More iconic moments coming soon.
          </p>
        </div>

      </div>
    </section>
  );
};

export default GoalArchive;