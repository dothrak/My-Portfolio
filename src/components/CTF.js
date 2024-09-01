import 'animate.css';
import hackImg1 from "../assets/img/hack-img1.png";
import hackImg2 from "../assets/img/hack-img2.png";
import hackImg3 from "../assets/img/hack-img3.png";
import hackImg4 from "../assets/img/hack-img4.png";
import ctfImg1 from "../assets/img/ctf-img1.png";
import ctfImg2 from "../assets/img/ctf-img2.png";
import ctfImg3 from "../assets/img/ctf-img3.png";
import ctfImg4 from "../assets/img/ctf-img4.png";
import ctfImg5 from "../assets/img/ctf-img5.png";
import ctfImg6 from "../assets/img/ctf-img6.png";

export const Ctf = () => {
  const getLanguageFromURL = () => {
    const path = window.location.pathname;
    const language = path.substring(1);
    return language;
  };

  const currentLanguage = getLanguageFromURL() || 'en';

  
  const hacking = [
    {
      id: 1,
      title: "RootMe",
      points: "Points:",
      rank: "Rank:",
      image: hackImg1,
      url: "https://www.root-me.org/dothrak",
  },
  {
      id: 2,
      title: "TryHackMe",
      points: "Points:",
      rank: "Rank:",
      image: hackImg2,
      url: "https://tryhackme.com/p/dothrak",
  },
  {
      id: 3,
      title: "Hack The Box",
      points: "Points: ",
      rank: "Rank: ",
      image: hackImg3,
      url: "https://app.hackthebox.com/profile/1837923",
  },
  {
      id: 4,
      title: "CryptoHack",
      points: "Points:",
      rank: "Rank:",
      image: hackImg4,
      url: "https://cryptohack.org/user/dothrak/",
  },
  ];  


  const ctfs = [
    {
        id: 1,
        title: "TRACS 2023",
        ranking: "25/82",
        image: ctfImg1,
        url : "https://tracs.viarezo.fr/",
    },
    {
      id: 2,
      title: "HACKDAY Finale 2023",
      ranking: "19/70",
      image: ctfImg2,
      url : "https://hackday.fr/",
  },
  {
    id: 3,
    title: "European Cyber Cup 2024",
    ranking: "16/20",
    image: ctfImg3,
    url : "https://european-cybercup.com/",
  },
  {
    id: 4,
    title: "HackSecuReims 2024",
    ranking: "23/60",
    image: ctfImg4,
    url : "https://www.hacksecureims.eu/",
  },
  {
  id: 5,
  title: "WOCS'HACK 2024",
  ranking: "5/14",
  image: ctfImg5,
  url : "https://wocshack.org/",
  },
  {
  id: 6,
  title: "FCSC 2024 ",
  ranking: "TOP 100 / 1000",
  image: ctfImg6,
  url : "https://cyber.gouv.fr/france-cybersecurity-challenge-2024",
  },
  ];


  const descriptionTranslations = {
    en: {
      ctfDescription: "Here's a list of all the CTFs I've participated in with my DaVinciCode team, as well as my profiles on every hacking platform I'm registered on.",
   
    },
    fr: {
      ctfDescription: "Voici la liste de tous les CTF auxquels j'ai participé avec mon équipe DaVinciCode, ainsi que mes profiles sur chaque plateforme de hack sur lesquelles je suis inscrite.",
 
    },
    de: {
      ctfDescription: "Hier ist eine Liste aller CTFs, an denen ich mit meinem DaVinciCode-Team teilgenommen habe, sowie meine Profile auf jeder Hacking-Plattform, auf der ich registriert bin.",
    },
  };
  const { ctfDescription } = descriptionTranslations[currentLanguage];

  return (
    <section className="ctf" id="ctf">
        <div className="row justify-content-center">
            <div className="col-9 text-center">
                <div className="ctf-bx">
                    <h2>CTF</h2>
                    <p>{ctfDescription}</p>
                </div>
            </div>
            <div className="col-12 text-center">
                <div className="ctf-img justify-content-center">
                    {hacking.map((hacking) => (
                    <div key={hacking.id}>
                      <div className='ctf-img-chall'>
                        <img src={hacking.image} alt={hacking.title}/>
                      </div>
                        <div>
                            <h3>
                                <div className="ctf-link-chall">
                                    <a href={hacking.url} target="_blank" rel="noopener noreferrer">
                                      {hacking.title}
                                    </a>
                                </div>
                            </h3>
                        </div>
                    </div>
                    ))}
                    <div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className="col-12 text-center">
                    <div className="ctf-img justify-content-center">
                        {ctfs.map((ctfs) => (
                        <div key={ctfs.id}>
                          <div className='ctf-img-ctf'>
                            <img src={ctfs.image} alt={ctfs.title}/>
                          </div>
                            <div>
                                <h3>
                                    <div className="ctf-link-ctf">
                                        <a href={ctfs.url} target="_blank" rel="noopener noreferrer"> 
                                          {ctfs.title}
                                        </a>
                                        <br></br>
                                        <span> 
                                          {ctfs.ranking}
                                        </span>
                                    </div>
                                </h3>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  ); 
};