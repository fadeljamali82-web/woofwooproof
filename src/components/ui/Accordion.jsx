import { useState } from "react";

export default function Accordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={item.question} className="accordion-item">
          <button
            className="accordion-trigger"
            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
          >
            {item.question}
          </button>
          {openIndex === index ? <p className="accordion-content">{item.answer}</p> : null}
        </div>
      ))}
    </div>
  );
}
