import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import fan1 from "../assets/fanzone/fan-1.jpg";
import fan2 from "../assets/fanzone/fan-2.jpg";
import fan3 from "../assets/fanzone/fan-3.jpg";
import fan4 from "../assets/fanzone/fan-4.jpg";
import fan5 from "../assets/fanzone/fan-5.jpg";
import fan6 from "../assets/fanzone/fan-6.jpg";
import fan7 from "../assets/fanzone/fan-7.jpg";
import fan8 from "../assets/fanzone/fan-8.jpg";
import fan9 from "../assets/fanzone/fan-9.jpg";
import fan10 from "../assets/fanzone/fan-10.jpg";
import fan11 from "../assets/fanzone/fan-11.jpg";
import fan12 from "../assets/fanzone/fan-12.jpg";
import fan13 from "../assets/fanzone/fan-13.jpg";
import fan14 from "../assets/fanzone/fan-14.jpg";

const fanContent = [
  {
    image: fan1,
    type: "Fan Art",
    title: "The Viking",
  },
  {
    image: fan2,
    type: "Wallpaper",
    title: "Built Different",
  },
  {
    image: fan3,
    type: "Match Day",
    title: "Game Night",
  },
  {
    image: fan4,
    type: "Fan Art",
    title: "The Goal Machine",
  },
  {
    image: fan5,
    type: "Wallpaper",
    title: "Haaland 9",
  },
  {
    image: fan8,
    type: "Match Day",
    title: "The Celebration",
  },
  {
    image: fan7,
    type: "Fan Art",
    title: "Ice Cold",
  },
  {
    image: fan6,
    type: "Wallpaper",
    title: "Viking Mode",
  },
  {
    image: fan9,
    type: "Wallpaper",
    title: "Haaland 9",
  },
  {
    image: fan10,
    type: "Fan Art",
    title: "The Viking",
  },
  {
    image: fan11,
    type: "Match Day",
    title: "The Celebration",
  },
  {
    image: fan12,
    type: "Fan Art",
    title: "The Goal Machine",
  },
  {
    image: fan13,
    type: "Wallpaper",
    title: "Viking Mode",
  },
  {
    image: fan14,
    type: "Match Day",
    title: "Game Night",
  }
];

const FanZone = () => {
  return (
    <section
      id="fan-zone"
      className="relative overflow-hidden bg-[#050505] py-24 md:py-32"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-sky-400/5 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <p className="text-xs uppercase tracking-[5px] text-sky-300">
              The Community
            </p>

            <h2 className="mt-4 text-4xl font-bold uppercase leading-[0.95] text-white sm:text-5xl md:text-7xl">
              FAN
              <br />
              <span className="text-gray-500">ZONE.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-gray-500 md:text-right md:text-base">
            Created by the fans. Inspired by the Viking. Explore artwork,
            wallpapers and unforgettable moments from the Haaland community.
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {fanContent.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: (index % 3) * 0.1,
              }}
              className="group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-white/10"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="block w-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 transition duration-500 group-hover:opacity-100" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6">

                <div className="flex items-end justify-between gap-4">

                  <div>
                    <p className="text-[10px] uppercase tracking-[4px] text-sky-300">
                      {item.type}
                    </p>

                    <h3 className="mt-2 text-xl font-bold uppercase text-white">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
                    <ArrowUpRight size={16} />
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Community CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center md:p-14"
        >
          <p className="text-xs uppercase tracking-[5px] text-sky-300">
            Your Turn
          </p>

          <h3 className="mx-auto mt-4 max-w-3xl text-3xl font-bold uppercase leading-tight text-white md:text-5xl">
            SHOW US YOUR
            <span className="text-gray-500"> VIKING MODE.</span>
          </h3>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500">
            Share your artwork, edits, wallpapers and favorite Haaland
            moments with the community.
          </p>

          <button
            className="
              mt-8
              rounded-full
              border
              border-sky-300
              px-7
              py-3
              text-xs
              font-semibold
              uppercase
              tracking-[3px]
              text-sky-300
              transition-all
              duration-300
              hover:bg-sky-300
              hover:text-black
            "
          >
            Join The Community
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default FanZone;