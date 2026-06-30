import React from "react";
import { motion } from "framer-motion";
import { projects } from "../assets/assets";
import ProjectCards from "./ProjectCards";

export default function Project() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="projects"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center padding-2 mb-4">
          My <span className="text-purple">Projects</span>
        </h2>
        <p className="text-gray-400 text-center mx-auto mb-16">
          A selection of my recent work
        </p>
        <div className=" padding-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCards key={index} {...project} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
