import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const period = 1000;

  const toRotate = useMemo(() => ["Myriam", "White Team", "Blue Team"], []); 

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setDelta(200);
    }
  }, [loopNum, isDeleting, text, setLoopNum, setIsDeleting, setText, setDelta, toRotate]);


  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [tick, delta]);

  const getLanguageFromURL = () => {
    const path = window.location.pathname;
    const language = path.substring(1);
    return language;
  };

  const currentLanguage = getLanguageFromURL() || 'en';

  const descriptionTranslations = {
    en: {
      description: "I'm a cybersecurity student and White Team work-study student at the Thales Digital Factory in Paris. With a passion for technology and computing, I'm looking to make the most of my cybersecurity skills to help make the world a safer place.",
   
    },
    fr: {
      description: "Je suis étudiante en cybersécurité et apprentie White Team à la Digital Factory de Thales à Paris. Passionné de technologie et d'informatique, je cherche à mettre à profit mes compétences en cybersécurité pour contribuer à rendre le monde plus sûr.",
 
    },
    de: {
      description: "Ich bin Studentin der Cybersicherheit und Werkstudentin des White Teams in der Thales Digital Factory in Paris. Ich habe eine Leidenschaft für Technologie und Informatik und möchte meine Fähigkeiten im Bereich Cybersicherheit optimal einsetzen, um die Welt sicherer zu machen.",
    },
  };
  const { description } = descriptionTranslations[currentLanguage];

  const welcomeTranslations = {
    en: {
      welcome: "Welcome to my Portfolio"
    },
    fr: {
      welcome: "Bienvenue sur mon Portfolio"
    },
    de: {
      welcome: "Willkommen in meinem Portfolio"
    },
  };
  const { welcome } = welcomeTranslations[currentLanguage];

  const hiTranslations = {
    en: {
      hi: "Hi! I'm"
    },
    fr: {
      hi: "Salut ! Je suis"
    },
    de: {
      hi: "Hallo! Ich bin"
    },
  };
  const { hi } = hiTranslations[currentLanguage];

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">{welcome}</span>
                  <h1>{hi} <span className="txt-rotate" data-rotate='[ "Myriam", "White Team", "Blue Team" ]'><span className="wrap">{text}</span></span></h1>
                  <p>{description}</p>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" className="img-fluid" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}