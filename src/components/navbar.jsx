import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Legacy", href: "#legacy" },
  { name: "Career", href: "#career" },
  { name: "Records", href: "#records" },
  { name: "Trophies", href: "#trophies" },
  { name: "Fan Zone", href: "#fan-zone" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-[0.25em] text-white"
        >
          HAALAND<span className="text-gray-400">VERSE</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition-all duration-300 text-sm uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Explore Button */}
        <button className="hidden lg:block px-5 py-2 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300">
          Explore
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
        >
          <div className="flex flex-col gap-5 px-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white uppercase tracking-wider transition"
              >
                {link.name}
              </a>
            ))}

            <button className="mt-4 px-5 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300">
              Explore
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;