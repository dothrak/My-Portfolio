import React from "react";
import cv from "../assets/cv/CV.pdf";

export const DownloadCVButton = () => {
  const downloadCV = () => {
    const cvUrl = cv;
    
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Myriam_Ouraou_CV.pdf";
    link.click();
  };

  return (
    <button onClick={downloadCV}>
      Curriculum Vitae
    </button>
  );
};
