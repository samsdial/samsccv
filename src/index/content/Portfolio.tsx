import { Col, Container, Row } from "reactstrap";
import CategoryFilter from "./CategoryFilter";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section pricing-plans d-none">
      <div className="shapes-container overflow-clear">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
        <div className="shape shape-4" />
      </div>

      <Container>
        <div className="section-heading text-center">
          <span className="rounded-pill shadow-box bold py-2 px-4">            
            <span className="text-primary">Portfolio</span>
          </span>
          <h2 className="mt-3 heading-line">Masterpiece Collection</h2>
          <p className="lead text-muted">
            Our plans have everything you need to take your app to the next
            level. <span className="highlight">No hidden fees.</span>
          </p>
        </div>
        <Row className="no-gutters align-items-center pricing-plans-options">
          <CategoryFilter />
        </Row>
      </Container>

      <Container id="contact" className="pt-0 border-bottom">
        <Row className="align-items-center">
          <Col md="8">
            <div className="text-center text-md-left">
              <h4 className="bold accent">Get in touch</h4>
              <p className="mt-0">
                Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </div>
          </Col>

          <Col md="4" className="text-center text-md-right">
            <a
              href="https://wa.link/9qjbbz"
              target="_blank"
              className="btn btn-primary btn-lg text-contrast p-4 ml-md-auto"
            >
              Contact me
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
