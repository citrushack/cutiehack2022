import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SponsorLogos from "@/components/Sponsors/SponsorLogos";
import SponsorImage from "@/components/Sponsors/SponsorImage";
import { MdEmojiObjects } from "react-icons/md";

export default function Sponsors() {
  return (
    <div className="flex flex-col h-screen w-full justify-center items-center">
      <div className="flex justify-center items-center text-6xl font-bold font-Arial">
        <h1>Our Sponsors</h1>
      </div>
      <div className="flex w-full justify-center items-center py-8 text-lg font-light">
        <h2>Thank you to all of those who made this hackathon possible!</h2>
      </div>
      <div className="flex justify-center items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.995 }}
          style={{
            display: "flex",
            width: "200px",
            height: "3rem",
            color: "black",
            fontWeight: "650",
            backgroundColor: "#87bd08d4",
            borderRadius: "0.5rem",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1.5rem",
          }}
        >
          Sponsor Us
        </motion.button>
      </div>
      <div className="flex justify-center flex-wrap gap-6">
        {SponsorLogos.get("Pomelo").map((logo) => {
          return (
            <SponsorImage
              image={logo.image}
              key={logo.ID}
              size_width={logo.size_width}
              size_height={logo.size_height}
            />
          );
        })}
      </div>
    </div>
  );
}
