import { MdExpandMore } from "react-icons/md";
import { useState } from "react";
import styles from "./faq.module.css";
import FaqArray from "./faqArray";
import FaqItem from "./FaqItem";

const Faq = () => {
  return (
    <div style={{ height: "2000px" }} className="h-max">
      {FaqArray.map((faqItem) => {
        return (
          <FaqItem
            key={faqItem.question}
            question={faqItem.question}
            answer={faqItem.answer}
          />
        );
      })}
    </div>
  );
};

export default Faq;
