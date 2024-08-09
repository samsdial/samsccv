import { Col, Container, Row } from "reactstrap";
import SocialMedia from "../components/SocialMedia";

const Footer = () => {
  return (
    <footer className="site-footer section border-top">
      <Container className="pb-3">
        <Row className="gap-y text-center text-md-left">
          <Col md="6" lg="6" className="mr-auto">
            <span className="bold text-primary h3">Sm</span>
            <span className="bold text-dark h2">.</span>

            <p className="lead">
              <span className="bold">Sergio Martinez</span>
            </p>
            <p className="lead">
              UI/UX Designer, Full stack web Developer
            </p>
          </Col>


          <Col md="3" className="text-center">
            <h6 className="py-2 bold">Contact us</h6>
              <SocialMedia color="#ff6f61" />
          </Col>
        </Row>

        <hr className="mt-5" />

        <Row className="small align-items-center">
          <Col md="4">
            <p className="mt-2 mb-md-0 text-muted text-center text-md-left">
              © 2024
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 mr-2"
              >
                Sergio Martinez
              </a>
                All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
