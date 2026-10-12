import { motion } from "framer-motion";

import bryne from "../assets/bryne-2.jpeg";
import molde from "../assets/molde-1.jpg";
import salzburg from "../assets/salzburg-1.jpg";
import dortmund from "../assets/dortmund-1.jfif";
import manCity from "../assets/city-1.jpg";
import norway from "../assets/norway-1.jpg";

const careerData = [
  {
    year: "2016",
    club: "Bryne FK",
    location: "Norway",
    image: bryne,
    description:
      "The journey begins in his hometown. Haaland made his senior debut for Bryne and took his first steps into professional football.",
  },
  {
    year: "2017",
    club: "Molde FK",
    location: "Norway",
    image: molde,
    description:
      "Haaland's development accelerated at Molde. His extraordinary physical ability and eye for goal quickly began attracting attention.",
  },
  {
    year: "2019",
    club: "Red Bull Salzburg",
    location: "Austria",
    image: salzburg,
    description:
      "Europe took notice. Haaland exploded onto the Champions League stage, announcing himself as one of football's most exciting young strikers.",
  },
  {
    year: "2020",
    club: "Borussia Dortmund",
    location: "Germany",
    image: dortmund,
    description:
      "The goals kept coming. Haaland became one of Europe's most feared forwards while establishing himself among football's elite.",
  },
  {
    year: "2022",
    club: "Manchester City",
    location: "England",
    image: manCity,
    description:
      "The Viking arrived in Manchester. Haaland joined City and immediately began rewriting records in English football.",
  },
  {
    year: "2019 — Present",
    club: "Norway",
    location: "International",
    image: norway,
    description:
      "Haaland continues to lead the Norwegian attack, carrying the hopes of a nation onto the international stage.",
  },
];

const Career = () => {
  return (
    <section
      id="career"
      className="relative overflow-hidden bg-[#050505] py-24 md:py-32"
    >
      {/* Background glow */}
      <div className="absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-sky-400/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-28"
        >
          <p className="mb-4 text-xs uppercase tracking-[5px] text-sky-300">
            The Evolution
          </p>

          <h2 className="max-w-4xl text-4xl font-bold uppercase leading-[0.95] text-white sm:text-5xl md:text-7xl">
            THE ROAD
            <br />
            <span className="text-gray-500">TO GREATNESS.</span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-gray-500 md:text-base">
            From the fields of Bryne to the biggest stadiums in world
            football. Follow the journey of the Viking.
          </p>
        </motion.div>

        {/* Career Timeline */}
        <div className="relative">

          {/* Central Timeline Line - Desktop */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 lg:block" />

          <div className="space-y-24 md:space-y-32">

            {careerData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.article
                  key={`${item.club}-${item.year}`}
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.9,
                    ease: "easeOut",
                  }}
                  className="relative"
                >

                  {/* Desktop Timeline Dot */}
                  <div className="absolute left-1/2 top-1/2 z-20 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-sky-300 bg-[#050505] lg:block">
                    <div className="absolute inset-1 rounded-full bg-sky-300" />
                  </div>

                  {/* Desktop Layout */}
                  <div
                    className={`hidden items-center gap-16 lg:grid lg:grid-cols-2 ${
                      isEven ? "" : ""
                    }`}
                  >

                    {/* Image */}
                    <div className={isEven ? "" : "order-2"}>
                      <CareerImage
                        image={item.image}
                        year={item.year}
                        club={item.club}
                      />
                    </div>

                    {/* Content */}
                    <div
                      className={`${
                        isEven
                          ? "pl-8"
                          : "order-1 pr-8 text-right"
                      }`}
                    >
                      <CareerContent
                        year={item.year}
                        club={item.club}
                        location={item.location}
                        description={item.description}
                        alignRight={!isEven}
                      />
                    </div>
                  </div>

                  {/* Mobile / Tablet Layout */}
                  <div className="lg:hidden">
                    <CareerImage
                      image={item.image}
                      year={item.year}
                      club={item.club}
                    />

                    <div className="mt-8">
                      <CareerContent
                        year={item.year}
                        club={item.club}
                        location={item.location}
                        description={item.description}
                      />
                    </div>
                  </div>

                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 border-t border-white/10 pt-16 text-center md:mt-32 md:pt-20"
        >
          <p className="text-xs uppercase tracking-[5px] text-gray-500">
            The story continues
          </p>

          <h3 className="mt-5 text-3xl font-bold uppercase text-white sm:text-4xl md:text-6xl">
            THE BEST IS YET
            <br />
            <span className="text-gray-500">TO COME.</span>
          </h3>
        </motion.div>

      </div>
    </section>
  );
};

/* --------------------------------------------------
   Career Image
-------------------------------------------------- */

const CareerImage = ({ image, year, club }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">

      <div className="aspect-[16/10] overflow-hidden md:aspect-[16/9]">
        <img
          src={image}
          alt={`${club} - Erling Haaland`}
          className="h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-110"
        />
      </div>

      {/* Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      {/* Year */}
      <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7">
        <span className="text-4xl font-black text-white md:text-6xl">
          {year}
        </span>
      </div>

      {/* Club */}
      <div className="absolute right-5 top-5 md:right-7 md:top-7">
        <span className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-[10px] uppercase tracking-[3px] text-white backdrop-blur-md">
          {club}
        </span>
      </div>

      {/* Hover line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-sky-300 transition-all duration-700 group-hover:w-full" />
    </div>
  );
};

/* --------------------------------------------------
   Career Content
-------------------------------------------------- */

const CareerContent = ({
  year,
  club,
  location,
  description,
  alignRight = false,
}) => {
  return (
    <div className={alignRight ? "ml-auto max-w-xl" : "max-w-xl"}>

      <p className="text-xs uppercase tracking-[4px] text-sky-300">
        {year}
      </p>

      <h3 className="mt-3 text-3xl font-bold uppercase text-white sm:text-4xl md:text-5xl">
        {club}
      </h3>

      <p className="mt-2 text-xs uppercase tracking-[3px] text-gray-600">
        {location}
      </p>

      <p className="mt-6 text-sm leading-7 text-gray-500 md:text-base md:leading-8">
        {description}
      </p>

      <div
        className={`mt-6 h-px w-12 bg-sky-300 ${
          alignRight ? "ml-auto" : ""
        }`}
      />
    </div>
  );
};

export default Career;