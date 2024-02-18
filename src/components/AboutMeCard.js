import { Col } from "react-bootstrap";

export const AboutMeCard = ({ title, description, imgUrl, url }) => {
  const linkStyle = {
    color: "inherit",
    textDecoration: "none",
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="aboutme-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="aboutme-txtx">
          <h4>
            <a href={url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              {title}
            </a>
          </h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
