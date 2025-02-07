import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      
      
      <div className="max-w-5xl mx-auto px-4  ">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            {" "}
            <span className="hover:text-cyan-300" >Arnab Mukherjee</span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden text-white md:flex items-center space-x-8  ">
            <a
              href="#home"
              className="relative hover:text-cyan-300 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-cyan-300 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {" "}
              Home
            </a>
          

            <a
              href="#about"
              className="relative hover:text-cyan-300 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-cyan-300 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {" "}
              About{" "}
            </a>


            <a
              href="#projects"
              className="relative hover:text-cyan-300 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-cyan-300 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {" "}
              Projects{" "}
            </a>
            <a
              href="#contact"
              className="relative hover:text-cyan-300 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-cyan-300 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"

            >
              {" "}
              Contact{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
