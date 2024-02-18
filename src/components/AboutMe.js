import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { AboutMeCard } from "./AboutMeCard.js";
import educImg1 from "../assets/img/education-img1.png";
import educImg2 from "../assets/img/education-img2.png";
import educImg3 from "../assets/img/education-img3.png";
import educImg4 from "../assets/img/education-img4.png";
import educImg5 from "../assets/img/education-img5.png";
import educImg6 from "../assets/img/education-img6.png";
import { ProjectCarousel } from "./CarouselProject";
import { HobbiesDisplay } from "./Hobbies";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const AboutMe = () => {
  const getLanguageFromURL = () => {
    const path = window.location.pathname;
    const language = path.substring(1);
    return language;
  };

  const currentLanguage = getLanguageFromURL() || 'en';

  const [activeTab, setActiveTab] = useState("second"); 


  const educationTranslations = {
    en: {
      abibac: {
      title: "ABIBAC Section",
      description: "French-German dual diploma program enabling students to sit the French (Baccalauréat) and German (Abitur) national high school-leaving exams at the same time",
      imgUrl: educImg1,
      url: "https://eduscol.education.fr/704/sections-binationales-franco-allemandes-l-abibac",
    },
    cpge: {
      title: "CPGE PCSI-PC",
      description: "National competitive entrance exams to French \"grandes écoles\", specializing in mathematics, physics and chemistry",
      imgUrl: educImg2,
      url: "https://www.enseignementsup-recherche.gouv.fr/fr/classes-preparatoires-aux-grandes-ecoles-cpge-46496",
    },
    inge: {
      title: "Ingeeniring Cycle",
      description: "Connected Objects and Cybersecurity major at ESILV Paris-La Défense",
      imgUrl: educImg3,
      url: "https://www.esilv.fr/en/programmes/master-degree-engineering/majors/it-iot-security/",
    },
    thales: {
      title: "Work-study programme at Thales Digital Factory",
      description: "Cybersecurity Threats & Vulnerabilities Engineer work-study student",
      imgUrl: educImg4,
      url: "https://www.thalesdigital.io/en/",
    },
    rgs: {
      title: "Certification : RGS - Cryptography & Network",
      description: "Mastery of the fundamentals of the french RGS (Référentiel Général de Sécurité), the art of cryptography, and various key network protocols (made by Thales)",
      imgUrl: educImg5,
    },
    teamctf: {
      title: "Team CTF",
      description: "Member of the CTF Team of my school's DaVinciCode cyber association, aiming to take part in as many CTFs as possible and competing in the EC2 (European Cyber Cup)",
      imgUrl: educImg6,
      url: "https://davincicode.fr/",
    },},

    fr: {
      abibac: {
      title: "Section ABIBAC",
      description: "Programme de double diplôme franco-allemand permettant aux étudiants de passer en même temps les examens nationaux de fin d'études secondaires français (Baccalauréat) et allemand (Abitur)",
      imgUrl: educImg1,
      url: "https://eduscol.education.fr/704/sections-binationales-franco-allemandes-l-abibac",
    },
    cpge: {
      title: "CPGE PCSI-PC",
      description: "Concours nationaux d'entrée aux grandes écoles françaises, spécialisées dans les mathématiques, la physique et la chimie",
      imgUrl: educImg2,
      url: "https://www.enseignementsup-recherche.gouv.fr/fr/classes-preparatoires-aux-grandes-ecoles-cpge-46496",
    },
    inge: {
      title: "Cycle ingénieur",
      description: "Objets connectés et Cybersécurité à l'ESILV Paris-La Défense",
      imgUrl: educImg3,
      url: "https://www.esilv.fr/en/programmes/master-degree-engineering/majors/it-iot-security/",
    },
    thales: {
      title: "Alternance à Thales Digital Factory",
      description: "Apprentie Ingénieur Cybersécurité, Menaces & Vulnérabilités",
      imgUrl: educImg4,
      url: "https://www.thalesdigital.io/en/",
    },
    rgs: {
      title: "Certification : RGS - Cryptographie & Réseaux",
      description: "Maîtrise des fondamentaux du RGS (Référentiel Général de Sécurité), de l'art de la cryptographie, et des différents protocoles clés du réseau (réalisés par Thales)",
      imgUrl: educImg5,
    },
    teamctf: {
      title: "Team CTF",
      description: "Membre de l'équipe CTF de l'association cyber DaVinciCode de mon école, visant à participer à autant de CTF que possible et à concourir à l'EC2 (European Cyber Cup)",
      imgUrl: educImg6,
      url: "https://davincicode.fr/",
    },},

    de: {
      abibac: {
      title: "ABIBAC-Sektion",
      description: "Deutsch-französisches Doppeldiplomprogramm, das die gleichzeitige Ablegung des französischen (Baccalauréat) und des deutschen (Abitur) Abiturs ermöglicht",
      imgUrl: educImg1,
      url: "https://eduscol.education.fr/704/sections-binationales-franco-allemandes-l-abibac",
    },
    cpge: {
      title: "CPGE PCSI-PC",
      description: "Nationale Aufnahmeprüfungen für die französischen \"grandes écoles\" mit den Schwerpunkten Mathematik, Physik und Chemie",
      imgUrl: educImg2,
      url: "https://www.enseignementsup-recherche.gouv.fr/fr/classes-preparatoires-aux-grandes-ecoles-cpge-46496",
    },
    inge: {
      title: "Ingeeniring-Zyklus",
      description: "Studiengang Vernetzte Objekte und Cybersicherheit an der ESILV Paris-La Défense",
      imgUrl: educImg3,
      url: "https://www.esilv.fr/en/programmes/master-degree-engineering/majors/it-iot-security/",
    },
    thales: {
      title: "Werkstudentenprogramm bei Thales Digital Factory",
      description: "Cybersecurity Threats & Vulnerabilities Ingenieur als Werkstudent",
      imgUrl: educImg4,
      url: "https://www.thalesdigital.io/en/",
    },
    rgs: {
      title: "Zertifizierung: RGS - Kryptografie & Netzwerk",
      description: "Beherrschung der Grundlagen des französischen RGS (Référentiel Général de Sécurité), der Kunst der Kryptographie und verschiedener wichtiger Netzprotokolle (von Thales)",
      imgUrl: educImg5,
    },
    teamctf: {
      title: "Team CTF",
      description: "Mitglied des CTF-Teams der DaVinciCode-Cyber-Association meiner Schule, mit dem Ziel, an so vielen CTFs wie möglich teilzunehmen und am EC2 (European Cyber Cup) teilzunehmen",
      imgUrl: educImg6,
      url: "https://davincicode.fr/",
    },},
  };
  const currentEducation = educationTranslations[currentLanguage];


  const titleTranslations = {
    en: {
      title: "About me",
   
    },
    fr: {
      title: "A propos",
    },
    de: {
      title: "Über mich",
    },
  };
  const { title } = titleTranslations[currentLanguage];


  const tabTranslations = {
    en: {
      tab1: "Projects",
      tab2: "Journey",
      tab3: "Hobbies",
   
    },
    fr: {
      tab1: "Projets",
      tab2: "Parcours",
      tab3: "Intérêts",
    },
    de: {
      tab1: "Projekte",
      tab2: "Laufbahn ",
      tab3: "Hobbyes",
    },
  };
  const { tab1, tab2, tab3 } = tabTranslations[currentLanguage];


  const descriptionTranslations = {
    en: {
      abtmeDescription: "In this section, I invite you to discover the different stages of my journey, the various projects I've carried out and my various interests.",
   
    },
    fr: {
      abtmeDescription: "Dans cette rubrique, je vous invite à découvrir les étapes de mon parcours, les divers projets que j'ai menés ainsi que mes différents centres d'intérêt.",
 
    },
    de: {
      abtmeDescription: "In diesem Abschnitt lade ich Sie ein, die Etappen meines Weges, die verschiedenen Projekte, die ich durchgeführt habe, und meine unterschiedlichen Interessen zu entdecken.",
    },
  };
  const { abtmeDescription } = descriptionTranslations[currentLanguage];

  return (
    <section className="aboutme" id="education">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>{title}</h2>
              <p>
              {abtmeDescription}
              </p>
              <Tab.Container
                id="aboutme-tabs"
                defaultActiveKey={activeTab}
                onSelect={(key) => setActiveTab(key)}
              >
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">{tab1}</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">{tab2}</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">{tab3}</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="second">
                    <Row>
                    {currentEducation.abibac && <AboutMeCard {...currentEducation.abibac} />}
                    {currentEducation.cpge && <AboutMeCard {...currentEducation.cpge} />}
                    {currentEducation.inge && <AboutMeCard {...currentEducation.inge} />}
                    {currentEducation.thales && <AboutMeCard {...currentEducation.thales} />}
                    {currentEducation.rgs && <AboutMeCard {...currentEducation.rgs} />}
                    {currentEducation.teamctf && <AboutMeCard {...currentEducation.teamctf} />}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="first">
                    <Row>
                      <ProjectCarousel />
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      <HobbiesDisplay />
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};