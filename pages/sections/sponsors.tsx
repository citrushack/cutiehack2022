import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SponsorLogos from "@/components/Sponsors/SponsorLogos";
import SponsorImage from "@/components/Sponsors/SponsorImage";

export default function Sponsors() {
  return (
    <div>
      <div className="flex flex-col h-screen w-full justify-center items-center">
        <h1 className="flex justify-center items-center text-6xl font-bold font-Arial">
          Our Sponsors
        </h1>
        <h2 className="flex w-full justify-center items-center py-8 text-lg font-light">
          Thank you to all of those who made this hackathon possible!
        </h2>
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
              backgroundColor: "#78a93c",
              borderRadius: "0.5rem",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem",
            }}
          >
            Sponsor Us
          </motion.button>
        </div>
        <h1 className="flex justify-center items-center text-4xl font-bold pb-10">
          Pomelo
        </h1>
        <div className="flex justify-center flex-wrap gap-6">
          {SponsorLogos.get("Pomelo").map((logo) => {
            return (
              <SponsorImage
                ID={logo.ID}
                image={logo.image}
                key={logo.ID}
                size_width={logo.size_width}
                size_height={logo.size_height}
              />
            );
          })}
        </div>
      </div>
      <h1 className="flex justify-center items-center text-4xl font-bold pb-10">
        Orange
      </h1>
      <div className="flex justify-center flex-wrap gap-6">
        {SponsorLogos.get("Orange").map((logo) => {
          return (
            <SponsorImage
              image={logo.image}
              ID={logo.ID}
              key={logo.ID}
              size_width={logo.size_width}
              size_height={logo.size_height}
            />
          );
        })}
      </div>
      <h1 className="flex justify-center items-center text-4xl font-bold pb-10">
        Tangerine
      </h1>
      <div className="flex justify-center flex-wrap gap-6">
        {SponsorLogos.get("Tangerine").map((logo) => {
          return (
            <SponsorImage
              image={logo.image}
              ID={logo.ID}
              key={logo.ID}
              size_width={logo.size_width}
              size_height={logo.size_height}
            />
          );
        })}
      </div>
      <h1 className="flex justify-center items-center text-4xl font-bold pb-10">
        Cutie
      </h1>
      <div className="flex justify-center flex-wrap gap-6">
        {SponsorLogos.get("Cutie").map((logo) => {
          return (
            <SponsorImage
              image={logo.image}
              ID={logo.ID}
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
