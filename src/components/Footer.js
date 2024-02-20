import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  const getLanguageFromURL = () => {
    const path = window.location.pathname;
    const language = path.substring(1);
    return language;
  };
  
  const currentLanguage = getLanguageFromURL() || 'en';

  const copyrightTranslations = {
    en: {
      copyright: "Initial template by",
   
    },
    fr: {
      copyright: "Template initial par",
    },
    de: {
      copyright: "Ursprüngliche Vorlage von",
    },
  };
  const { copyright } = copyrightTranslations[currentLanguage];

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="footer-icon">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/myriam-ouraou/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Icon" /></a>
                <a href="https://github.com/dothrak" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Icon" /></a>
              </div>
            </div>
            <p>Copyright © 2024 Dothrak | {copyright} <a href="https://github.com/judygab/web-dev-projects/tree/main/personal-portfolio" target="_blank" rel="noreferrer"><span className="footer">Judygab</span></a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};