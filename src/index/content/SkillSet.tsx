import React from "react";
// import Fade from "react-reveal/Fade";
// import Tilt from "react-tilt";
import { Col, Container, Row } from "reactstrap";
import CircularProgressBar from "../../components/CircularProgressBar";
// import Img from "../../assets/img/screens/app/pieces/2.png";
// import MoreInfoButton from "../../components/MoreInfoButton";

const renderItems = () => {
  const features: JSX.Element[] = [];
  const elements = [
    {
      icon: "pe-7s-diamond",
      title: "HTML/JSX",
      percentage: 100,
    },
    {
      icon: "pe-7s-tools",
      title: "CSS/SASS or Styled Components",
      percentage: 100,
    },
    {
      icon: "pe-7s-tools",
      title: "Storybook or Styleguidist",
      percentage: 50,
    },
    {
      icon: "pe-7s-light",
      title: "Javascript Advanced + ES6",
      percentage: 100,
    },
    {
      icon: "pe-7s-light",
      title: "Typescript",
      percentage: 50,
    },
    {
      icon: "pe-7s-light",
      title: "React",
      percentage: 95,
    },
    {
      icon: "pe-7s-light",
      title: "Node +npm",
      percentage: 60,
    },
    {
      icon: "pe-7s-light",
      title: "Testing (Jest, React testing Library),",
      percentage: 65,
    },
    {
      icon: "pe-7s-light",
      title: "SQL, API Rest, GraphQL",
      percentage: 50,
    },
  ];

  elements.forEach((element, i) => {
    features.push(
      <Col md="3" key={i}>
        <div className="py-4 bg-white shadow-box rounded shadow-hover text-center" style={{  minHeight: 230 }}>
          <CircularProgressBar percentage={element.percentage} />
          <div className="px-4">
            <h5 className="bold small mb-0 mt-3">{element.title}</h5>
          </div>
        </div>
      </Col>,
    );
  });

  return features;
};

const SkillSet: React.FC = () => {
  return (
    <section id="skill" className="section powered-design">
      <div className="shapes-container">
        <div className="shape shape-circle shape-circle-1">
          <div />
        </div>
        <div className="shape shape-circle shape-circle-2">
          <div />
        </div>
        <div className="shape shape-ring animation--rotating-diagonal">
          <div />
        </div>
        <div className="shape shape-triangle shape-animated">
          <div className="animation--rotating" />
        </div>

        <div className="shape pattern-dots-1" />
      </div>

      <Container>
        <Row className="gap-y align-items-center">
          <Col md="12">
            <div className="section-heading">
              <h2 className="heading-line">Skill-Set</h2>
            </div>
          </Col>
        </Row>
        <Row noGutters={false} className="gap-y text-center text-md-left justify-content-md-center">
          {renderItems()}
        </Row>
      </Container>
    </section>
  );
};

export default SkillSet;
