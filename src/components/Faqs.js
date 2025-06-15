import React, { useState } from "react";


const faqsData = [
  {
    question: "How often should I water my indoor plants?",
    answer:
      "Most indoor plants prefer to be watered once the top inch of soil feels dry. Overwatering can lead to root rot, so always check the soil first.",
  },
  {
    question: "Do indoor plants need sunlight?",
    answer:
      "Yes, but the amount varies. Some plants like bright indirect light, while others thrive in low-light conditions. Always check your plant's specific needs.",
  },
  {
    question: "What are some low-maintenance indoor plants?",
    answer:
      "Snake Plant, ZZ Plant, Pothos, and Peace Lily are great low-maintenance options for beginners.",
  },
  {
    question: "Why are my plant's leaves turning yellow?",
    answer:
      "Yellow leaves can be caused by overwatering, poor drainage, low humidity, or lack of nutrients.",
  },
  {
    question: "Should I repot my indoor plants?",
    answer:
      "Yes, ideally every 1-2 years or when the plant outgrows its current pot. Repotting provides fresh nutrients and more space for roots.",
  },
  {
    question: "Do indoor plants improve air quality?",
    answer:
      "Yes! Plants like Spider Plant and Snake Plant can help purify air by absorbing toxins and producing oxygen.",
  },
];

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqsData.map((faq, index) => (
          <div className={`faq-item ${activeIndex === index ? "active" : ""}`} key={index}>
            <div className="faq-question" onClick={() => toggle(index)}>
              {faq.question}
              <span className="arrow">{activeIndex === index ? "▲" : "▼"}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
