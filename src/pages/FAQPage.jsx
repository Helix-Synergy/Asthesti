import React, { useState } from "react";

const faqLinks = {
  tracks:"/aesthetic-conference-tracks/" ,
  abstractSubmission: "/abstract-submission",
  schedule: "/aesthetic-event-schedule",
  email: "mailto:hello@helixconferences.com",

};

export const faqData = [
  {
    question: "What is AESTHETICA-2026?",
    answer:
      "AESTHETICA-2026, officially titled the “Aesthetic Medicine & Cosmetic Innovation Summit”, is a premier international conference and exhibition organized by Helix Conferences. It brings together aesthetic physicians, dermatologists, plastic surgeons, cosmetic scientists, medical device innovators, researchers, brand leaders, and industry experts to explore advancements in aesthetic medicine, cosmetic dermatology, anti-aging therapies, regenerative aesthetics, and beauty technology.",
  },
  {
    question: "When and where will AESTHETICA-2026 take place?",
    answer:
      "AESTHETICA-2026 will take place in 2026. The exact dates and venue will be announced soon.",
  },
  {
    question: "What are the highlights of AESTHETICA-2026?",
    answer:
      "Keynote presentations, live aesthetic demonstrations, hands-on workshops, expert-led sessions, product launches, panel discussions, innovation showcases, and high-level networking opportunities across the aesthetic and cosmetic medicine ecosystem.",
  },
  {
    question: "What summit tracks are featured at AESTHETICA-2026?",
    answer: (
      <>
        You can explore the full list of tracks here:{" "}
        <a
          href={faqLinks.tracks}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand underline"
        >
          AESTHETICA-2026 Tracks
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I showcase my products or explore sponsorship options?",
    answer: (
      <>
        To exhibit your products or discuss sponsorship opportunities, please
        contact our team at{" "}
        <a href={faqLinks.email} className="text-brand underline">
          hello@helixconferences.com
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I submit a proposal or presentation for AESTHETICA-2026?",
    answer: (
      <>
        You can submit your proposal{" "}
        <a
          href={faqLinks.abstractSubmission}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand underline"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "How will I receive my invoice?",
    answer:
      "Invoices will be sent to the email address provided during registration. Please check your inbox and spam folder.",
  },
  {
    question: "What materials will I receive during the summit?",
    answer:
      "Registered participants will receive a digital summit kit including the event agenda, speaker profiles, exhibitor details, session information, and partner highlights.",
  },
  {
    question: "How long can I present my topic?",
    answer:
      "Presentation slots typically range from 15–20 minutes, including Q&A. Final presentation guidelines will be shared after proposal acceptance.",
  },
  {
    question: "Who will be attending AESTHETICA-2026?",
    answer:
      "Aesthetic physicians, dermatologists, plastic and cosmetic surgeons, cosmetic scientists, medical device manufacturers, skincare brands, clinic owners, researchers, investors, and healthcare professionals from around the world.",
  },
  {
    question: "How many people usually attend the summit?",
    answer:
      "AESTHETICA-2026 is expected to welcome 150+ international participants, including speakers, exhibitors, delegates, brand representatives, and sponsors.",
  },
  {
    question: "Can I register for multiple speaking or demo sessions?",
    answer:
      "Yes, participants may submit multiple proposals, provided each submission represents a unique topic, technique, or innovation.",
  },
  {
    question: "Are keynote speaking opportunities available?",
    answer:
      "Yes, a limited number of keynote and featured speaker slots are available. Interested participants should indicate their preference during the submission process.",
  },
  {
    question: "What is expected of speakers and exhibitors?",
    answer:
      "Speakers and exhibitors are expected to deliver high-quality, educational, and engaging sessions or demonstrations, share practical insights, and actively engage with attendees.",
  },
  {
    question: "Is there a fee to participate as a speaker, exhibitor, or attendee?",
    answer:
      "Yes, registration and participation fees apply. Please visit the “Buy A Ticket” section on the website for detailed pricing information.",
  },
  {
    question: "How can I view the event schedule?",
    answer: (
      <>
        The detailed summit schedule will be released soon. You can view or
        download it{" "}
        <a
          href={faqLinks.schedule}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand underline"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "Can I preview the session and exhibitor list before the event?",
    answer:
      "Yes, the full agenda, exhibitor lineup, and speaker details will be published ahead of the summit dates.",
  },
  {
    question: "Can I purchase tickets in advance?",
    answer:
      "Yes, early registration is encouraged, as ticket availability may be limited closer to the event.",
  },
  {
    question: "How can I get assistance with accommodation or travel?",
    answer: (
      <>
        For accommodation or travel-related assistance, please contact us at{" "}
        <a href={faqLinks.email} className="text-brand underline">
          hello@helixconferences.com
        </a>
        .
      </>
    ),
  },
];




const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-300 mb-4">
          <button
            className="w-full text-left py-4 px-2 font-medium text-lg flex justify-between items-center"
            onClick={() => toggle(index)}
          >
            {item.question}
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-700">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
