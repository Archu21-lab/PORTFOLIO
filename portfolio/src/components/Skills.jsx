import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets";

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 padding-2">
          My
          <span className="text-purple">Skills</span>
        </h2>
        <p className="text-gray-400 text-center  mx-auto mb-16">
          Technologies I work with to bring ideas to life
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mx-auto">
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className="bg-dark-300 rounded-2xl padding-6 hover:-translate-y-2 transition duration-300 cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="w-12 h-12 text-purple mr-6 gap-2" />
                  <h3 className="text-xl font-semibold padding-2">{skill.title}</h3>
                </div>
                <p className="text-gray-400 mabo-4 padding-2">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                    {
                        skill.tags.map((tech)=>{
                            return(
                                <span key={tech} className="padding-2 bg-dark-400 rounded-full text-sm">{tech}</span>
                            )
                        })
                    }
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
