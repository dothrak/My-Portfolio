import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import meter1 from "../assets/img/c.svg";
import meter2 from "../assets/img/cpp.svg";
import meter3 from "../assets/img/cs.svg";
import meter4 from "../assets/img/python.svg";
import meter5 from "../assets/img/js.svg";
import meter6 from "../assets/img/react.svg";
import meter7 from "../assets/img/node.svg";
import meter8 from "../assets/img/html.svg";
import meter9 from "../assets/img/css.svg";
import meter10 from "../assets/img/php.svg";
import meter11 from "../assets/img/linux.svg";
import meter12 from "../assets/img/windows.svg";
import meter13 from "../assets/img/arduino.svg";
import meter14 from "../assets/img/mysql.svg";
import meter15 from "../assets/img/cassandra.svg";
import meter16 from "../assets/img/mongodb.svg";
import meter17 from "../assets/img/postgre.svg";
import meter18 from "../assets/img/wordpress.svg";
import meter19 from "../assets/img/github.svg";
import meter20 from "../assets/img/gitlab.svg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const Skills = () => {
  const getLanguageFromURL = () => {
    const path = window.location.pathname;
    const language = path.substring(1);
    return language;
  };

  const currentLanguage = getLanguageFromURL() || 'en';

  const titleTranslations = {
    en: {
      title: "Skills",
   
    },
    fr: {
      title: "Compétences",
    },
    de: {
      title: "Fähigkeiten",
    },
  };
  const { title } = titleTranslations[currentLanguage];


  const descTranslations = {
    en: {
      skillsDescription: "Growing in the IT field has allowed me to build up a diverse skill set. From my earliest steps to the present day, I've acquired a real understanding of different areas of computing, which reflects my real passion for the industry.",
   
    },
    fr: {
      skillsDescription: "Mon évolution dans le domaine des technologies de l'information m'a permis d'acquérir un ensemble de compétences variées. Depuis mes premiers pas jusqu'à aujourd'hui, j'ai développé une réelle compréhension des différents domaines de l'informatique, ce qui reflète ma véritable passion pour ce secteur.",
 
    },
    de: {
      skillsDescription: "Durch mein Wachstum im IT-Bereich konnte ich mir vielfältige Fähigkeiten aneignen. Von meinen ersten Schritten bis zum heutigen Tag habe ich ein echtes Verständnis für verschiedene Bereiche der Informatik erworben, was meine echte Leidenschaft für die Branche widerspiegelt.",
    },
  };
  const { skillsDescription } = descTranslations[currentLanguage];

  
  const [setBothAnimationsStarted] = useState(true);

  useEffect(() => {
    function addAnimation() {
      const scrollers = document.querySelectorAll(".scroller");
      let animationCounter = 0;
  
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
  
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
  
        scrollerContent.forEach((item, index) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
  
          duplicatedItem.addEventListener('animationstart', () => {
            animationCounter++;
  
            if (animationCounter === scrollerContent.length * 2) {
              setBothAnimationsStarted(true);
            }
          });
        });
      })
    }
  
    addAnimation();
  }, [setBothAnimationsStarted]);

  return (
    <section className="skill" id="skills">
      <div className="container">
        <motion.div
          className="motion-container horizontal-scroll"
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <div className="skill-bx">
                <h2>{title}</h2>
                <p>{skillsDescription}</p>
              </div>
              <div className="flex justify-content-center"> 
                <div className="scroller" data-direction="left" data-speed="fast">
                  <ul className="tag-list scroller__inner">
                    <img src={meter1} alt="" />
                    <img src={meter2} alt="" />
                    <img src={meter3} alt="" />
                    <img src={meter4} alt="" />
                    <img src={meter5} alt="" />
                    <img src={meter6} alt="" />
                    <img src={meter7} alt="" />
                    <img src={meter8} alt="" />
                    <img src={meter9} alt="" />
                    <img src={meter10} alt="" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <div className="flex justify-content-center"> 
              <div className="scroller" data-direction="right" data-speed="fast">
                  <ul className="tag-list scroller__inner">
                    <img src={meter11} alt="" />
                    <img src={meter12} alt="" />
                    <img src={meter13} alt="" />
                    <img src={meter14} alt="" />
                    <img src={meter15} alt="" />
                    <img src={meter16} alt="" />
                    <img src={meter17} alt="" />
                    <img src={meter18} alt="" />
                    <img src={meter19} alt="" />
                    <img src={meter20} alt="" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
