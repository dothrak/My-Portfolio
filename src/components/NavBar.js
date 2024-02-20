import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { DownloadCVButton } from "./DownCV";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import francais from '../assets/img/francais.png';
import english from '../assets/img/english.png';
import deutsch from '../assets/img/deutsch.png';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const getLanguageFromURL = () => {
    const path = window.location.pathname;
    const language = path.substring(1);
    return language;
  };

  const currentLanguage = getLanguageFromURL() || 'en';

  const navbarTranslations = {
    en: {
      home: "Home", 
      abtme: "About Me",
      skills: "Skills",
    },
    fr: {
      home: "Accueil", 
      abtme: "A propos",
      skills: "Compétences",
    },
    de: {
      home: "Startseite", 
      abtme: "Über mich",
      skills: "Fähigkeiten",
    },
  };
  const { home, abtme, skills } = navbarTranslations[currentLanguage];

  return (
    <Router>
      <Navbar expand="md" className={` ${scrolled ? "scrolled" : "initial-black"}`}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>{home}</Nav.Link>
              <Nav.Link href="#education" className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutme')}>{abtme}</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>{skills}</Nav.Link>
              <Nav.Link href="#ctf" className={activeLink === 'ctf' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('ctf')}>CTF</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/myriam-ouraou/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/dothrak" target="_blank" rel="noreferrer"><img src={navIcon2} alt="" /></a>
              </div>
            </span>
            <div className="navbar-text">
              <DownloadCVButton />
            </div>
            <div className="d-flex align-items-center">
              <div className="d-flex flex-row">
                <a href="/fr" className="language-link"><img src={francais} alt="Français" className="language-icon" /></a>
                <a href="/en" className="language-link"><img src={english} alt="English" className="language-icon" /></a>
                <a href="/de" className="language-link"><img src={deutsch} alt="Deutsch" className="language-icon" /></a>
              </div>
            </div>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}