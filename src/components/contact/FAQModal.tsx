"use client";
import React, { useState } from "react";
import { faqData } from "./faqData";

const FAQModal: React.FC = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(
    null
  );

  const handleQuestionClick = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <section>
      <div>
        <h2 className="text-xl text-center font-semibold mb-4">
          Preguntas frecuentes
        </h2>
        <ul className="md:px-28">
          {faqData.map((faq, index) => (
            <li key={index} className="mb-4">
              <button
                onClick={() => handleQuestionClick(index)}
                className="text-blue-500 font-semibold hover:underline"
              >
                {faq.question}
              </button>
              {openQuestionIndex === index && (
                <div className="mt-2 text-gray-600">{faq.answer}</div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQModal;
