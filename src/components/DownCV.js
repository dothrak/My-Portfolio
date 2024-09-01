import React from "react";
import PropTypes from "prop-types";
import cv_fr from "../assets/cv/CV_fr.pdf";
import cv_en from "../assets/cv/CV_en.pdf";
import cv_de from "../assets/cv/CV_de.pdf";

export const DownloadCVButton = ({ language }) => {
  const downloadCV = () => {
    let cvUrl;
    
    switch(language) {
      case 'fr':
        cvUrl = cv_fr;
        break;
      case 'de':
        cvUrl = cv_de;
        break;
      case 'en':
      default:
        cvUrl = cv_en;
        break;
    }
    
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = `Myriam_Ouraou_CV_${language}.pdf`;
    link.click();
  };

  return (
    <button onClick={downloadCV}>
      Curriculum Vitae
    </button>
  );
};

// Ajouter la validation des props
DownloadCVButton.propTypes = {
  language: PropTypes.string.isRequired,
};
