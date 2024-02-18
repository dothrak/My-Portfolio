
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const ProjectCarousel = () =>{
  const getLanguageFromURL = () => {
    const path = window.location.pathname;
    const language = path.substring(1);
    return language;
  };

  const currentLanguage = getLanguageFromURL() || 'en';

  const projectsTranslations = {
        en: {
          cookbook: {
            id: 1,
            title: "Cookbook",
            description: "My cookbok is a user-friendly web app that helps you decide what to cook with the ingredients you already have: Just enter your available items and it will suggest recipes. Its database is based on the famous French website Marmiton, from which I retrieve recipes via an API.  My cookbook comes with an initial database, but it's completely customizable, depending on individual tastes. ",
            image: projImg1,
            url : "https://github.com/dothrak/Cookbook",
        },
        vrt: {
            id: 2,
            title: "Vinci Racing Team",
            titleDescription: "President of the karting and motor sports association of my engineering school",
            description: "I wear many hats to ensure the smooth running and growth of our organization. I actively participate in on-track activities as a driver and coach. At the same time, I look after the administrative aspects and oversee the association's day-to-day operations, such as organizing our endurance and charity races, and finding sponsors for our competition teams. Managing our online presence is also my responsibility, which involves content creation, community management and overall curation of our social media platforms. In addition, I look after the association's website, where I write articles, maintain the race results database and implement the automation of driver time analysis to provide our drivers with an overview of their performance.",      
            image: projImg2,
            url: "https://www.vinciracingteam.fr/",
        },
        tictactoe: {
          id: 2,
          title: "Ultimate Tic Tac Toe : AI Battle",
          description: "It's a combinatorial variation of the famous Tic-Tac-Toe game, featuring a game mode with combat between human players and artificial intelligence based on the Minimax algorithm with Alpha-Beta pruning. The game rules include a 3x3 board with the condition that the next player's choice of grid depends on the last position of the previous player. The AI makes dynamic decisions without using predefined move lists in less than 10 seconds to maintain a fluid game experience. The implementation also offers the possibility of letting two AIs, two humans or a human against an AI compete against each other.",      
          image: projImg3,
          url: "https://github.com/dothrak/Ultimate-Tic-Tac-Toe-AI-Battle",
        },},

        fr: {
          cookbook: {
            id: 1,
            title: "Cookbook",
            description: "Mon Cookbok est une application web simple d'utilisation qui vous aide à décider ce que vous allez cuisiner avec les ingrédients que vous avez déjà : Il vous suffit d'entrer vos ingrédients et l'application vous proposera des recettes. Sa base de données est basée sur le célèbre site français Marmiton, dont je récupère les recettes via une API.  Mon Cookbook est livré avec une base de données initiale, mais elle est entièrement personnalisable, en fonction des goûts de chacun.",
            image: projImg1,
            url : "https://github.com/dothrak/Cookbook",
        },
        vrt: {
            id: 2,
            title: "Vinci Racing Team",
            titleDescription: "Présidente de l'association de karting et de sports mécaniques de mon école d'ingénieurs",
            description: "Je porte plusieurs casquettes pour assurer le bon fonctionnement et la croissance de notre association. Je participe activement aux activités sur piste en tant que pilote et entraîneur. Parallèlement, je m'occupe des aspects administratifs et supervise les opérations quotidiennes de l'association, telles que l'organisation de nos courses d'endurance et de charité, et la recherche de sponsors pour nos équipes de compétition. Je suis également responsable de la gestion de notre présence en ligne, ce qui implique la création de contenu, la gestion de la communauté et la curation globale de nos plateformes de médias sociaux. En outre, je m'occupe du site web de l'association, où je rédige des articles, je maintiens la base de données des résultats des courses et je mets en œuvre l'automatisation de l'analyse des temps des pilotes afin de fournir à nos pilotes un aperçu de leurs performances.",      
            image: projImg2,
            url: "https://www.vinciracingteam.fr/",
        },
        tictactoe: {
          id: 2,
          title: "Ultimate Tic Tac Toe : AI Battle",
          description: "Il s'agit d'une variante combinatoire du célèbre jeu de Tic-Tac-Toe, avec un mode de jeu comportant des affrontements entre des joueurs humains et des IA basées sur l'algorithme Minimax avec élagage Alpha-Beta. Les règles du jeu comprennent un plateau de 3x3 avec la condition que le choix de la grille du joueur suivant dépende de la dernière position du joueur précédent. L'IA prend des décisions dynamiques sans utiliser de listes de mouvements prédéfinies en moins de 10 secondes afin de maintenir une expérience de jeu fluide. La mise en œuvre offre également la possibilité de faire s'affronter deux IA, deux humains ou un humain contre une IA.",      
          image: projImg3,
          url: "https://github.com/dothrak/Ultimate-Tic-Tac-Toe-AI-Battle",
        },},

        de: {
          cookbook: {
            id: 1,
            title: "Cookbook",
            description: "My Cookbok ist eine benutzerfreundliche Webanwendung, die Ihnen hilft zu entscheiden, was Sie mit den Zutaten, die Sie bereits haben, kochen können: Geben Sie einfach Ihre verfügbaren Zutaten ein, und sie schlägt Rezepte vor. Die Datenbank basiert auf der berühmten französischen Website Marmiton, von der ich die Rezepte über eine API abrufe.  Mein Kochbuch wird mit einer anfänglichen Datenbank geliefert, ist aber je nach Geschmack vollständig anpassbar.",
            image: projImg1,
            url : "https://github.com/dothrak/Cookbook",
        },
        vrt: {
            id: 2,
            title: "Vinci Racing Team",
            titleDescription: "Präsident des Kart- und Motorsportvereins meiner Ingenieurschule",
            description: "Ich trage viele Rollen, um den reibungslosen Ablauf und das Wachstum unserer Organisation zu gewährleisten. Ich nehme aktiv an den Aktivitäten auf der Rennstrecke als Fahrer und Trainer teil. Gleichzeitig kümmere ich mich um die administrativen Aspekte und beaufsichtige das Tagesgeschäft des Verbandes, wie die Organisation unserer Langstrecken- und Wohltätigkeitsrennen und die Suche nach Sponsoren für unsere Wettbewerbsteams. Ich bin auch für die Verwaltung unserer Online-Präsenz verantwortlich, was die Erstellung von Inhalten, das Community-Management und die allgemeine Pflege unserer Social-Media-Plattformen umfasst. Außerdem kümmere ich mich um die Website des Verbandes, wo ich Artikel schreibe, die Datenbank mit den Rennergebnissen pflege und die Automatisierung der Zeitanalyse für die Fahrer einführe, um ihnen einen Überblick über ihre Leistungen zu geben.",      
            image: projImg2,
            url: "https://www.vinciracingteam.fr/",
        },
        tictactoe: {
          id: 2,
          title: "Ultimate Tic Tac Toe : AI Battle",
          description: "Es handelt sich um eine kombinatorische Variante des berühmten Tic-Tac-Toe-Spiels, die einen Spielmodus mit Kämpfen zwischen menschlichen Spielern und künstlicher Intelligenz auf der Grundlage des Minimax-Algorithmus mit Alpha-Beta-Bereinigung bietet. Die Spielregeln umfassen ein 3x3-Brett mit der Bedingung, dass die Wahl des Gitters des nächsten Spielers von der letzten Position des vorherigen Spielers abhängt. Die KI trifft dynamische Entscheidungen ohne Verwendung vordefinierter Zuglisten in weniger als 10 Sekunden, um ein flüssiges Spielerlebnis zu gewährleisten. Die Implementierung bietet auch die Möglichkeit, zwei KIs, zwei Menschen oder einen Menschen gegen eine KI gegeneinander antreten zu lassen.",      
          image: projImg3,
          url: "https://github.com/dothrak/Ultimate-Tic-Tac-Toe-AI-Battle",
        },},
      };
  const currentProjects = projectsTranslations[currentLanguage];
  

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const titleDescriptionStyle = {
    fontSize: 17,
    color: "#bf636d",
    fontStyle: 'italic'
  };

  const descriptionStyle = {
    fontSize: 16,
    color: "#ffa459"
  };

  const linkStyle = {
    backgroundImage: 'linear-gradient(90.21deg, #ffa459 -5.91%, #9c3f78 111.58%)',
    backgroundClip: 'text',
    color: 'transparent',
    textDecoration: 'none',
    fontSize: 32,
    fontWeight: 'bold'
  };

  return (
  <Carousel 
    responsive={responsive} 
    ssr={true}
    showDots={true}
    infinite={true}
    containerClass="carousel-container"
  >
    {Object.values(currentProjects).map((project) => (
        <div key={project.id}>
          <img src={project.image} alt={project.title} />
          <div>
            <h3>
              <a href={project.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                {project.title}
              </a>
            </h3>
            <p style={titleDescriptionStyle} dangerouslySetInnerHTML={{ __html: project.titleDescription }}></p>
            <p style={descriptionStyle} dangerouslySetInnerHTML={{ __html: project.description }}></p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};