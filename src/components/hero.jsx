import { motion } from "framer-motion"
import { ChevronDown, Play } from "lucide-react"
import heroVideo from "../assets/hero-video.mp4"
import heroImg from "../assets/hero-poster.jpg"

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen overflow-hidden">
            {/* Background Video */}
            <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline preload="metadata" poster={heroImg} aria-hidden="true">
                <source src={heroVideo} type="video/mp4"/>
                Your browser does not support video playback.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] md:h-[700px] md:w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-[150px]" />

            {/* Content */}
            <div className="relative z-10 flex min-h-screen items-center pt-28 md:pt-32">
                <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-3 text-xs sm:text-sm uppercase tracking-[4px] md:tracking-[8px] text-sky-300"
                    >
                        The Ultimate Fan Experience
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="font-black uppercase text-white leading-[0.9] text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
                    >
                        ERLING
                        <br />
                        HAALAND
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="mt-4 text-base sm:text-lg md:text-2xl uppercase tracking-[4px] md:tracking-[6px] text-gray-300"
                    >
                        THE VIKING ERA
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="mt-6 max-w-xl text-sm sm:text-base md:text-lg leading-7 text-gray-300"
                    >
                        Experience the remarkable journey of one of football's most
                        dominant strikers. From Bryne to the biggest stages in world football.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1 }}
                        className="mt-8 flex flex-col sm:flex-row gap-4">

                        <button className="rounded-full bg-white px-6 py-3 md:px-8 md:py-4 font-semibold text-black transition hover:scale-105">
                            Explore Legacy
                        </button>

                        <a href="https://youtu.be/Sm5skxOAj3M?si=9kpMsqKdjniyTm94" className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 md:px-8 md:py-4 text-white backdrop-blur-md transition hover:bg-white/10">
                            <Play size={18} />
                            Watch Highlights
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4 }}
                        className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 md:mt-16 md:grid-cols-4"
                    >
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">300+</h3>
                            <p className="text-xs md:text-sm uppercase tracking-wider text-gray-400">
                                Career Goals
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">14</h3>
                            <p className="text-xs md:text-sm uppercase tracking-wider text-gray-400">
                                Major Trophies
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl md:text-3xl font-bold text-white">Norway</h3>
                            <p className="text-xs md:text-sm uppercase tracking-wider text-gray-400">
                                National Team
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">#9</h3>
                            <p className="text-xs md:text-sm uppercase tracking-wider text-gray-400">
                                Goal Machine
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scoll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 1.8,
                }}
                className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white"
            >
                <ChevronDown size={30} className="md:w-9 md:h-9"/>
            </motion.div>
        </section>
    )
}

// import { motion } from "framer-motion";
// import { ChevronDown, Play } from "lucide-react";
// import heroVideo from "../assets/hero-davido.mp4";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="relative h-screen w-full overflow-hidden"
//     >
//       {/* Background Video */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute inset-0 h-full w-full object-cover"
//       >
//         <source src={heroVideo} type="video/mp4" />
//       </video>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/70"></div>

//       {/* Blue Glow */}
//       <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-[180px]"></div>

//       {/* Hero Content */}
//       <div className="relative z-10 flex h-full items-center pt-40">
//         <div className="mx-auto w-full max-w-7xl px-6">

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: .2 }}
//             className="mb-2 uppercase tracking-[8px] text-sky-300"
//           >
//             The Ultimate Fan Experience
//           </motion.p>

//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: .4 }}
//             className="max-w-5xl text-6xl font-black uppercase leading-none text-white md:text-8xl"
//           >
//             ERLING
//             <br />
//             HAALAND
//           </motion.h1>

//           <motion.h2
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: .7 }}
//             className="mt-4 text-2xl font-light tracking-[6px] text-gray-300 uppercase"
//           >
//             THE VIKING ERA
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: .9 }}
//             className="mt-4 max-w-xl text-lg leading-8 text-gray-300"
//           >
//             Experience the remarkable journey of one of football's most
//             dominant striker from Bryne to the biggest stages in world football.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.1 }}
//             className="mt-10 flex flex-wrap gap-5"
//           >
//             <button className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
//               Explore Legacy
//             </button>

//             <button className="flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-white backdrop-blur-md transition hover:bg-white/10">
//               <Play size={18} />
//               Watch Highlights
//             </button>
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.4 }}
//             className="mt-16 grid max-w-3xl grid-cols-2 gap-8 border-t border-white/10 pt-8 md:grid-cols-4"
//           >
//             <div>
//               <h3 className="text-3xl font-bold text-white">300+</h3>
//               <p className="text-sm uppercase tracking-wider text-gray-400">
//                 Career Goals
//               </p>
//             </div>

//             <div>
//               <h3 className="text-3xl font-bold text-white">15+</h3>
//               <p className="text-sm uppercase tracking-wider text-gray-400">
//                 Major Trophies
//               </p>
//             </div>

//             <div>
//               <h3 className="text-3xl font-bold text-white">Norway</h3>
//               <p className="text-sm uppercase tracking-wider text-gray-400">
//                 National Team
//               </p>
//             </div>

//             <div>
//               <h3 className="text-3xl font-bold text-white">#9</h3>
//               <p className="text-sm uppercase tracking-wider text-gray-400">
//                 Goal Machine
//               </p>
//             </div>
//           </motion.div>

//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         animate={{ y: [0, 10, 0] }}
//         transition={{
//           repeat: Infinity,
//           duration: 1.8,
//         }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
//       >
//         <ChevronDown size={35} />
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;