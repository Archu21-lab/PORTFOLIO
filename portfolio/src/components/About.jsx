import React from "react";
import { easeOut, motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="container py-20 bg-dark-200"
    >
      <div className="max-w-7xl mx-auto px-6 padding-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          About<span className="text-purple">Me</span>
        </h2>
        <p className="text-gray-400 text-center  mx-auto mb-16 py-3">
          Get to know more about my background and passion.
        </p>
      </div>
      {/* Image + My Journey */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="md:w-1/2 rounded-2xl overflow-hidden py-4">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-[350px] md:w-[420px] lg:w-[480px] h-auto object-cover rounded-3xl shadow-2xl"
            src={assets.MyImg2}
            alt="profile"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="md:w-1/2"
        >
          <div className="rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6 padding-2">My Journey</h3>
            <p className="text-gray-300 mb-6 padding-2">
              I'm a passionate full-stack developer with over 1 years of
              experience creating digital solutions for businesses around the
              world. My journey started with basic HTML/CSS websites and has
              evolved into building complex web applications with modern
              frameworks.
            </p>
            <p className="text-gray-300 mb-12 padding-2">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through tech blogs and tutorials. I believe in continuous learning
              and pushing the boundaries of what's possible on the web.
            </p>
            {/* cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 padding-4">
              {aboutInfo.map((data, index) => (
                <div
                  key={index}
                  className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                >
                  <div className="text-purple text-4xl mb-4 padding-2">
                    <data.icon />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 padding-2">{data.title}</h3>
                  <p className="text-gray-400 padding-2">{data.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
