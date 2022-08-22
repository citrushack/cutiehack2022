import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SponsorLogos from "@/components/Sponsors/SponsorLogos";
import SponsorMap from "@/components/Sponsors/SponsorMap";

const PomeloArray = SponsorLogos.slice(0, 1);
const OrangeArray = SponsorLogos.slice(1, 2);
const TangerineArray = SponsorLogos.slice(2, 4);
const CutieArray = SponsorLogos.slice(4, 11);

export default function Sponsors() {
  return (
    <div>
      <div className="flex w-full justify-center items-center text-6xl font-bold font-Arial">
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
      {/* Pomelo */}
      <div
        style={{ width: "700px" }}
        className="flex justify-center items-center font-bold font-Arial text-4xl tracking-widest"
      >
        Pomelo
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {PomeloArray.map((sponsor) => {
          return (
            <SponsorMap
              image={sponsor.image}
              key={sponsor.logoKey}
              size_width={sponsor.size_width}
              size_height={sponsor.size_height}
            />
          );
        })}
      </div>
      {/* Orange */}
      <div
        style={{ width: "700px" }}
        className="flex justify-center items-center font-bold font-Arial text-4xl tracking-widest"
      >
        Orange
      </div>
      <div className="flex flex-wrap justify-center items-center my-4">
        {OrangeArray.map((sponsor) => {
          return (
            <SponsorMap
              image={sponsor.image}
              key={sponsor.logoKey}
              size_width={sponsor.size_width}
              size_height={sponsor.size_height}
            />
          );
        })}
      </div>
      {/* Tangerine */}
      <div
        style={{ width: "700px" }}
        className="flex justify-center items-center font-bold font-Arial text-4xl tracking-widest"
      >
        Tangerine
      </div>
      <div className="flex flex-wrap justify-center items-center my-4">
        {TangerineArray.map((sponsor) => {
          return (
            <SponsorMap
              image={sponsor.image}
              key={sponsor.logoKey}
              size_width={sponsor.size_width}
              size_height={sponsor.size_height}
            />
          );
        })}
      </div>
      {/* Cutie */}
      <div
        style={{ width: "700px" }}
        className="flex justify-center items-center font-bold font-Arial text-4xl tracking-widest"
      >
        Cutie
      </div>
      <div className="flex flex-wrap justify-center items-center my-4">
        {CutieArray.map((sponsor) => {
          return (
            <SponsorMap
              image={sponsor.image}
              key={sponsor.logoKey}
              size_width={sponsor.size_width}
              size_height={sponsor.size_height}
            />
          );
        })}
      </div>
    </div>
  );
}
