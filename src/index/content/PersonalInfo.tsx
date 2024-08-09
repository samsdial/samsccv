import { JSX } from "react/jsx-runtime";
import { Col, Container, Row } from "reactstrap";

const renderFeatures = () => {
  const features: JSX.Element[] = [];
  const elements = [
    {
      icon: "pe-7s-diamond",
      title: "Years of experience",
      time: "10",
    },
    {
      icon: "pe-7s-tools",
      title: "Project",
      time: "25",
    },
  ];

  elements.forEach((element, i) => {
    features.push(
      <Col md="12" key={i}>
        <div className="p-4 bg-whites shadow-box rounded shadow-hover">
          <span className="heading-line text-primary h2">{element.time} +</span>
          <i className={`pe ${element.icon} pe-3x mb-3 text-primary`} />
          <h5 className="bold">{element.title}</h5>
        </div>
      </Col>,
    );
  });

  return features;
};

const PersonalInfo = () => {
  return (
    <section id="features" className="section features">
      <Container>
        <div className="section-heading text-center">
          <h2 className="heading-line">What I Am Great At</h2>
          <p className="lead text-muted">If you can dream it, you can do it</p>
        
        </div>

        <Row className="gap-y text-md-left">
          <Col md="6">
            <div className="section-heading text-left">
              <h2 className="heading-line">Personal Info</h2>
            </div>
            <div className="d-flex mb-5">
              <div className=" text-left">
                <p className="lead text-muted mb-0">Name:</p>
                <p className="lead text-muted bold">Sergio Martinez</p>
                <p className="lead text-muted mb-0">Nationality:</p>
                <p className="lead text-muted bold">Colombian</p>
                <p className="lead text-muted mb-0">Email:</p>
                <p className="lead text-muted bold">andresmartinez.it@outlook.com</p>
              </div>
              <div className="flex-fill text-left px-5">
                <p className="lead text-muted mb-0">Age:</p>
                <p className="lead text-muted bold">38 years</p>
                <p className="lead text-muted mb-0">Location:</p>
                <p className="lead text-muted bold">Mosquera</p>
                <p className="lead text-muted mb-0">Language:</p>
                <p className="lead text-muted bold">Spanish, English</p>
              </div>
            </div>
            <div className="text-center text-md-left">
              <a
                className="btn btn-primary text-contrast p-3 ml-md-auto"
                href="https://drive.google.com/file/d/1VoXqBrd64uZd1a1wplhb6WexXJbVS0ac/view?usp=sharing"
                target="_blank"
              >Download CV</a>
            </div>
          </Col>
          <Row>
            {renderFeatures()}
          </Row>
        </Row>
      </Container>
    </section>
  );
};

export default PersonalInfo;
