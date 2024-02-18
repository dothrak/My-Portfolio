import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import hobby1 from "../assets/img/hobby1.svg";
import hobby2 from "../assets/img/hobby2.svg";
import hobby3 from "../assets/img/hobby3.svg";
import hobby4 from "../assets/img/hobby4.svg";
import hobby5 from "../assets/img/hobby5.svg";

const HobbiesDataDisplay = ({ src, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="d-flex justify-content-center"
    >
      <motion.img
        src={src}
        alt={`hobby${index + 1}`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * animationDelay, duration: 0.1 }}
        className="hobby-image"
      />
    </motion.div>
  );
};

export const HobbiesDisplay = () => {
  const imagesRow1 = [hobby1, hobby2, hobby3];
  const imagesRow2 = [hobby4, hobby5];

  return (
    <section className="hobbie" id="hobbies">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="hoobies-bx">
            </div>
            <div className="motion-container horizontal-scroll">
              <div className="flex justify-content-center" style={{ overflowX: 'auto' }}> {}
                {imagesRow1.map((image, index) => (
                  <HobbiesDataDisplay
                    key={index}
                    src={image}
                    index={index}
                  />
                ))}
              </div>
              <div className="flex justify-content-center mt-5" style={{ overflowX: 'auto' }}> {}
                {imagesRow2.map((image, index) => (
                  <HobbiesDataDisplay
                    key={index + imagesRow1.length}
                    src={image}
                    index={index + imagesRow1.length}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

