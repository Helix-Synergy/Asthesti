import React, { useEffect, useState } from "react";
import { Sparkle } from "lucide-react";
import { Link } from "react-router-dom";
// Images for agri
import img1 from "../assets/tracks/img1.jpeg";
import img2 from "../assets/tracks/img2.jpeg"
import img3  from "../assets/tracks/img3.jpg";
import img4 from "../assets/tracks/img4.jpg";
import img5 from "../assets/tracks/img5.jpg";
import img6 from "../assets/tracks/img6.jpg"
import img7 from "../assets/tracks/img7.jpg";
import img8 from "../assets/tracks/img8.webp"
import img9 from "../assets/tracks/img9.webp";
import img10 from "../assets/tracks/img10.png"
import img11 from "../assets/tracks/img11.png";
import img12 from "../assets/tracks/img12.webp"
import img13 from "../assets/tracks/img13.webp";
import img14 from "../assets/tracks/img14.jpg"
import img15 from "../assets/tracks/img15.jpg";
import img16 from "../assets/tracks/img16.jpg"
import img17 from "../assets/tracks/img17.png"
import img18 from "../assets/tracks/img18.webp";
import img19 from "../assets/tracks/img19.jpg"
import img20 from "../assets/tracks/img20.jpg"

export const tracks = [
  {
    image: img1,
    title: "Cosmetic Gynecology",
    description: (
      <>
{" "}
        <Link
          to="/aesthetic-conference-tracks/"
          className="
             hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       Cosmetic gynecology 
        </Link> focuses on aesthetic and functional procedures enhancing women’s intimate health, comfort, and confidence. This track covers non surgical and surgical techniques, regenerative therapies, safety standards, ethical practice, patient selection, outcome assessment, and emerging technologies supporting personalized, evidence based care in modern aesthetic gynecologic practice worldwide clinical innovation excellence
   
      </>
    ),
  },

  {
    image: img2,
    title: "Tissue Engineering",
    description: (
      <>
{" "}
        <Link
          to="/contact"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       Tissue engineering
        </Link>{" "} examines biomaterials, scaffolds, and regenerative strategies restoring structure and function in skin and soft tissues. Sessions address laboratory research, clinical translation, wound healing, aesthetic reconstruction, bioprinting advances, regulatory pathways, and interdisciplinary collaboration enabling safe, scalable, and innovative regenerative solutions for aesthetic medicine worldwide clinical practice, outcomes, standards, excellence.
       
      </>
    ),
  },

  {
    image:img3,
    title: "Dermatology",
    description: (
      <>
    
{" "}
        <Link
          to= "/aesthetic-event-schedule"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
   Dermatology
        </Link> covers medical and aesthetic management of skin, hair, and nail conditions across all ages. This track highlights diagnostics, therapeutics, cosmetic procedures, inflammatory disorders, pigmentation, acne, aging skin, prevention strategies, and integrative approaches combining clinical expertise, technology, and personalized patient care models for modern dermatologic practice, research, education, innovation excellence.
      </>
    ),
  },

  {
    image: img4,
    title: "Photobiomodulation",
    description: (
      <>
    {" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Photobiomodulation 
        </Link>{" "} explores therapeutic light applications stimulating cellular metabolism, reducing inflammation, and accelerating tissue repair. Sessions focus on wavelength science, clinical protocols, safety considerations, aesthetic indications, pain management, wound healing, recovery enhancement, and future innovations advancing evidence based light therapies in medical aesthetics research, clinical adoption, global standards, outcomes, practice excellence.

      </>
    ),
  },

  {
    image: img5 ,
    title: "Plastic Surgery",
    description: (
      <>
{" "}
        <Link
          to= "/about-aesthetic"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
     Plastic surgery 
        </Link>{" "} addresses aesthetic and reconstructive procedures enhancing form, function, and quality of life. This track covers facial and body surgery, minimally invasive techniques, perioperative safety, technology integration, patient centered planning, outcomes analysis, and ethical considerations shaping modern surgical aesthetic practice standards, innovation, education, training, research, collaboration, excellence, worldwide leadership.
   
      </>
    ),
  },

  {
    image: img6,
    title: "Laser & Energy-Based Devices",
    description: (
      <>

        <Link
          to="/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
 Laser and energy based devices
        </Link>{" "} play critical roles in skin resurfacing, tightening, and rejuvenation. Sessions address device physics, treatment planning, patient selection, safety protocols, combination therapies, complication prevention, and emerging technologies improving precision, outcomes, and efficiency in aesthetic clinical practice worldwide, innovation, training, standards, research, adoption, quality, care, excellence, leadership.
     
      </>
    ),
  },

  {
    image:img7,
    title: "Smart Injectables",
    description: (
      <>
{" "}
        <Link
          to="/event_partners"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       Smart injectables
        </Link>{" "} represent advanced fillers and neuromodulators designed for precision, longevity, and safety. This track explores anatomy driven techniques, formulation science, delivery systems, complication management, personalization strategies, and technology supported planning enhancing natural results and patient satisfaction in aesthetic medicine practice, education, standards, innovation, outcomes, safety, research, excellence, globally, leadership.
      </>
    ),
  },

  {
    image:  img8,
    title: "Nutrition & Aesthetics",
    description: (
      <>
      {" "}
        <Link
          to= "/aesthetic-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
  Nutrition and aesthetics 
        </Link>{" "} examine how diet influences skin health, aging, and procedural outcomes. Topics include nutraceuticals, metabolic balance, inflammation, gut skin interactions, supplementation, lifestyle counseling, and evidence based nutrition strategies supporting holistic, long term aesthetic and dermatologic treatment success across clinical practice, patient care, prevention, wellness, outcomes, research, education, excellence.
  
      </>
    ),
  },

  {
    image: img9,
    title: "Aesthetic Complications",
    description: (
      <>
      {" "}
        <Link
     
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
        Aesthetic Complications
        </Link>{" "}
     track focuses on prevention, recognition, and management of adverse events. Sessions emphasize anatomy knowledge, risk assessment, patient communication, emergency protocols, legal considerations, and corrective strategies ensuring safety, ethical practice, and confidence in delivering high quality aesthetic treatments across global practice, training, education, standards, outcomes, patient, trust, excellence, leadership.
      </>
    ),
  },

  {
    image: img10,
    title: "Facial Volumization",
    description: (
      <>
 {" "}
        <Link
          to="/about-aesthetic" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
      Facial volumization
        </Link>{" "} addresses age related volume loss using fillers, biostimulators, and fat grafting. This track explores facial anatomy, assessment techniques, injection strategies, proportion balance, safety considerations, and personalized approaches achieving natural rejuvenation and long lasting aesthetic harmony for diverse patient populations, practice, innovation, outcomes, training, research, excellence, standards, artistry, leadership.

      </>
    ),
  },

  {
    image: img11,
    title: "AI & Digital Diagnostics",
    description: (
      <>
       Examines {" "}
        <Link
          to="/event_partners"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       AI and digital diagnostics
        </Link> transform aesthetic assessment through data driven analysis and predictive insights. Sessions cover skin imaging, algorithm validation, treatment planning, workflow optimization, ethical data use, and integration of intelligent tools enhancing accuracy, personalization, and clinical decision making in aesthetics practice, innovation, outcomes, safety, standards, research, education, excellence, leadership.
      </>

    ),
  },

  {
    image: img12,
    title: "Allergies",
    description: (
      <>
Allergies track addresses immune mediated skin reactions relevant to aesthetic practice. Topics include diagnosis, patch testing, ingredient sensitivities, injectable reactions, prevention strategies, patient screening, and management protocols ensuring treatment safety and minimizing adverse outcomes in cosmetic and dermatologic procedures across diverse populations, practice, education, research, standards, risk, reduction, excellence, globally. {" "}
        {/* <Link
          to="/event_partners" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
    food processing innovations aligned with green technologies.
        </Link>{" "}    */}
      </>
    ),
  },

  {
    image: img13,
    title: "Glass Skin Innovations",
    description: (
      <>
Glass skin innovations focus on achieving radiant, hydrated, and refined skin appearance. Sessions explore{" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
    advanced skincare 
        </Link>  formulations, device based therapies, barrier repair, hydration science, combination treatments, and maintenance protocols delivering long term clarity, luminosity, and skin health improvement through evidence based practice, innovation, research, education, outcomes, standards, aesthetics, excellence, leadership.

        
      </>
    ),
  },

  {
    image: img14,
    title: "Stem Cell Therapies",
    description: (
      <>
Stem cell therapies explore regenerative approaches for  {" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
   skin rejuvenation,
        </Link>  hair restoration, and tissue repair. This track discusses mechanisms, clinical applications, safety considerations, ethical frameworks, regulatory perspectives, and translational research advancing responsible integration of stem based treatments in aesthetic medicine practice, innovation, outcomes, standards, education, patient, safety, excellence, globally, future, leadership.
        
      </>
    ),
  },

  {
    image: img15,
    title: "3D Imaging",
    description: (
      <>
     Three dimensional imaging enhances visualization, planning, and communication in aesthetic medicine. Sessions cover facial analysis, simulation software, outcome prediction, documentation, patient education, and technology integration improving precision, transparency, and satisfaction across {" "}
        <Link
          to="/about-aesthetic"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
      surgical and non-surgical
        </Link> aesthetic treatments practice, research, training, innovation, outcomes, standards, safety, ethics, excellence, globally, leadership, adoption, quality.
     
      </>
    ),
  },

  {
    image:img16,
    title: "Biologic Medicine",
    description: (
      <>
 {" "}
        <Link
          to="/aesthetic-orators" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Biologic medicine
        </Link> focuses on growth factors, peptides, and platelet derived therapies supporting regeneration and healing. Topics include mechanisms of action, clinical protocols, safety, combination approaches, and personalized applications integrating biologics into evidence based aesthetic and regenerative treatment strategies for modern practice, research, innovation, outcomes, education, standards, safety, excellence, leadership, globally.
</>
    ),
  },

  {
    image: img17,
    title: "Future of Aesthetic Medicine",
    description: (
      <>
 The future of {" "}
        <Link
          to="/contact"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          aesthetic medicine 
        </Link>  explores innovation shaping next generation patient care. Sessions address regenerative science, artificial intelligence, sustainability, digital health, evolving regulations, and ethical practice models influencing global standards, technological convergence, and long term growth of aesthetic healthcare systems, research, education, investment, outcomes, safety, quality, access, excellence, leadership, worldwide.
 
      </>
    ),
  },
// Ethical

  {
    image: img18,
    title: "Psychodermatology",
    description: (
      <>
   Psychodermatology examines connections between  {" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
        psychological 
        </Link>  wellbeing and skin health. This track covers stress related disorders, body image, patient communication, behavioral interventions, and integrative care models addressing emotional factors to improve dermatologic outcomes and patient satisfaction through holistic practice, education, research, collaboration, innovation, standards, safety, care, quality, excellence, leadership, globally, integration.

      </>
    ),
  },
  // Microbiome Engineering
  
  {
    image:img19,
    title: "Skin Microbiome",
    description: (
      <>
  {" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
  Skin microbiome
        </Link> track explores microbial ecosystems influencing barrier function, inflammation, and aging. Sessions discuss diagnostics, microbiome friendly formulations, therapeutic modulation, personalized skincare, and research insights supporting balanced skin health and improved outcomes in dermatologic and aesthetic treatments through innovation, education, standards, safety, practice, quality, care, excellence, leadership, globally, integration, science.
      </>
    ),
  },
  {
    image: img20,
    title: "Gender-Specific Treatments",
    description: (
      <>
  Gender specific treatments address anatomical, hormonal, and aesthetic differences across patient populations. This track explores tailored protocols, safety considerations, inclusive care, communication strategies, and evolving expectations supporting personalized, respectful, and effective  {" "}
        <Link
          to="/venue" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       aesthetic treatments
        </Link>{" "} for diverse gender identities within modern practice, education, research, ethics, standards, safety, outcomes, innovation, excellence, leadership, globally.
       
      </>
    ),
  },
];

const StaticTracks = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <style>{`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 0px rgba(44, 211, 35, 0.2);
          }
          50% {
            box-shadow: 0 0 18px 6px rgb(122,179,38);
          }
        }

        .animate-pulseShadow {
          animation: pulseShadow 3s ease-in-out infinite;
        }

        .transition-custom {
          transition: all 0.8s ease-in-out;
        }
      `}</style> */}

      <div className="relative mt-14">
        {/* Fixed Top-Right Button */}
        <div className="fixed top-[22%] right-[1%] z-50 transition-custom">
          <a
            href="/abstract-submission"
            aria-label="Submit abstract"
            className="bg-one rounded-full text-white text-sm font-medium px-3 py-3 select-none transition-transform hover:scale-110 animate-pulseShadow"
          >
            Submit Abstract
          </a>
        </div>

        {/* Track Content */}
        <div className="container mx-auto px-4 py-10 space-y-20 flex flex-col items-center">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="relative w-[80%] flex flex-col md:flex-row items-stretch md:space-x-6"
            >
              <div className="flex-shrink-0 bg-white border shadow-xl rounded-2xl p-2 w-full md:w-1/3">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="bg-white border shadow-xl rounded-2xl p-6 w-full md:w-2/3 mt-12 md:mt-0 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-1 text-one flex items-center gap-2">
                  <Sparkle className="fill-one" />
                  {track.title}
                </h2>
                <h3 className="text-xl text-gray-600 font-semibold mb-3">
                  {track.subtitle}
                </h3>
                <p className="text-md text-gray-800 leading-relaxed">
                  {track.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StaticTracks;
