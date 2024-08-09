// import Fade from "react-reveal/Fade";
import { Col, Container, Row } from "reactstrap";
import Screen from "../../assets/img/sm.png";
import IconSvg from "../../components/IconSvg";

const Heading = () => {
  return (
    <header className="header alter2-header section">
      <div className="shapes-container">
        <div className="animation-shape shape-ring animation--clockwise" />
        <div className="animation-shape shape-circle shape-circle-1 animation--anti-clockwise" />
        <div className="animation-shape shape-circle shape-circle-2 animation--clockwise" />
        <div className="animation-shape shape-heart animation--clockwise">
          <div className="animation--rotating" />
        </div>
        <div className="animation-shape shape-triangle animation--rotating-diagonal">
          <div className="animation--rotating" />
        </div>
        <div className="animation-shape shape-diamond animation--anti-clockwise">
          <div className="animation--rotating" />
        </div>
        <div className="static-shape shape-ring-1" />
        <div className="static-shape shape-ring-2" />
        <div className="static-shape shape-circle shape-circle-1">
          <div />
        </div>
        <div className="static-shape shape-circle shape-circle-2">
          <div />
        </div>
        <div className="static-shape pattern-dots-1" />
        <div className="static-shape pattern-dots-2" />
        <div className="static-shape background-shape-main" />
        <div className="static-shape ghost-shape ghost-shape-1" />
      </div>
      <Container>
        <Row>
          <Col md="6">
            <span className="rounded-pill shadow-box bg-contrast text-dark bold py-2 px-4">
              <IconSvg icon="light" size="20" stroke="#ff6f61" />
              <span className="ml-2 text-primary">Impressing</span> the world
            </span>
            <h1 className="display-2 display-md-4 mt-3">
              <span className="bold">Sergio Martinez</span>
              <span className="h1 text-primary">.</span>
            </h1>
            <p className="lead bold text-primary m-0">Introdution</p>
            <p className="lead m-0">UI/UX Designer, Full stack web Developer</p>
            <p className="small mb-2">
              I am Sergio Martinez, a full-stack JavaScript developer passionate
              about using technology as a tool for socio-economic change and
              solving real-life problems. My expertise lies in web development
              with proficiency in ReactJS, Node.js, and SQL. I also have
              experience in back-end development using Next.js and deploying
              applications on Vercel and AWS.
            </p>
            <p className="small m-0">
              I have a keen interest in UX/UI design and enjoy crafting
              user-friendly and visually appealing interfaces. With strong
              project management skills, I mentor junior developers in agile
              environments, ensuring efficient project completion. Outside of
              work, I enjoy diversifying my knowledge in relevant fields and
              engage in activities such as sports, research, and critical
              thinking.
            </p>

            <nav className="nav my-5">
              <a
                href="#features"
                className="btn btn-rounded btn-alternate mr-2 mr-md-3"
              >
                Learn more
              </a>
              <a
                href="https://wa.link/9qjbbz"
                target="_blank"
                className="btn btn-rounded btn-outline-alternate scrollto"
              >
                Contact me
              </a>
            </nav>
          </Col>
          <Col md="6" className="d-none d-sm-block">
            <div className="front mx-auto">
              <div className="screen">
                <img src={Screen} alt="..." />
              </div>
              <div className="notch" />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Heading;
