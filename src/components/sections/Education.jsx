import { RevealOnScroll } from "../RevealOnScroll";
import userDetails from "../userDetails.json";
import { useEffect, useState } from "react";
import BCET from "../../../public/assets/education/bcet.png";

export const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    setEducation(userDetails.education);
  }, []);

  console.log(education);

  const frontendSkills = ["React", "TypeScript", "TailwindCSS"];

  const backendSkills = ["Node.js", "Python", "MongoDB", "GraphQL"];


  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">

          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            My Education
          </h2>

          <div className="gap-6 py-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all mb-6  hover:border-blue-900/100 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] "
              
              >
                <img src={BCET} alt="Education" className="h-50 w-80 mx-auto md:mx-0" />
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4 md:mt-0 md:ml-10">
                  <li>
                    <strong onClick={()=>{
                      window.open(edu.link, "_blank")
                    }} className="hover:text-cyan-300 hover:cursor-pointer"> {edu.school} - {edu.location} </strong>

                  </li>
                  <li> {edu.degree}</li>
                  <li>{edu.details}</li>
                  <li>{edu.session}</li>
                  <li>{edu.stream}</li>



                </ul>
              </div>
            ))}
          </div>
        </div>

    
      </RevealOnScroll>
    </section>
  );
};


