import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-4 padding-2">
          Get In
          <span className="text-purple">Touch</span>
        </h2>
        <p className="text-gray-400 text-center mx-auto mb-16 padding-2">
          Have a project in mind or want to collaborate? Let's talk!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* contact-form  */}
          <div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2 padding-2"
                >
                  Your Name
                </label>
                <input
                  className="w-full bg-dark-300 border
                         border-dark-400 rounded-lg padding-4 outline-none"
                  type="text"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2 padding-2"
                >
                  Email Address
                </label>
                <input
                  className="w-full bg-dark-300 border
                         border-dark-400 rounded-lg padding-4 outline-none"
                  type="email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2 padding-2"
                >
                  Your Message
                </label>
                <textarea
                  className="w-full h-40 bg-dark-300 border
                         border-dark-400 rounded-lg padding-4 outline-none"
                  type="text"
                />
              </div>

              <button className="w-full padding-4  bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer">
                Send Message
              </button>
            </form>
          </div>
          {/* contact info */}
          <div className="space-y-4">
            <div className="flex flex-start padding-4">
              <div className="text-purple text-2xl mr-4 padding-2">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Surat,Gujrat</p>
              </div>
            </div>

            <div className="flex flex-start padding-4">
              <div className="text-purple text-2xl mr-4 padding-2">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-400">Archupatil@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-start padding-4">
              <div className="text-purple text-2xl mr-4 padding-2">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">+91 8010192337</p>
              </div>
            </div>
            <div className="padding-4">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex padding-4 gap-3">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white  transition duration-300 "
                >
                  <FaGithub />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white  transition duration-300 "
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white  transition duration-300 "
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink hover:bg-pink hover:text-white  transition duration-300 "
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
