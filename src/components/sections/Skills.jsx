import { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import userDetails from "../userDetails.json";
import GitHub from "../../../public/assets/skills/github.png";

export const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(userDetails.skills);

    console.log(userDetails.skills);
  }, []);

  const publicUrl = import.meta.env.VITE_BASE_URL;

  return (
    <section
      id="skills"
      className=" flex items-center justify-center py-10"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mt-12 mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="text-center">
                <img
                  src={publicUrl + skill.image}
                  alt={skill.name}
                  className={`w-16 h-16 mx-auto mb-2 ${
                    skill.name === "GitHub" ? "bg-white rounded-full" : ""
                  }`}
                />
                <p className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    ">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
