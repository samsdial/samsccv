import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Container, Nav, NavItem, NavLink, NavbarBrand } from "reactstrap";
import SocialMedia from "../SocialMedia";

interface DefaultNavbarProps {
  useOnlyDarkLogo: boolean;
}

const DefaultNavbar = ({ useOnlyDarkLogo }: DefaultNavbarProps) => {
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const [iconsColors, setIconsColors] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  const toggleNavbar = () => {
    setNavbarExpanded((prevExpanded) => !prevExpanded);
  };
  const handleCloseMenu = () => {
    setNavbarExpanded(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navigation = navbarRef.current;
      if (navigation) {
        const navTop = navigation.offsetTop + navigation.offsetHeight;

        if (window.scrollY >= navTop) {
          navigation.classList.add("navbar-sticky");
          setIconsColors(true);
        } else {
          navigation.classList.remove("navbar-sticky");
          setIconsColors(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="navbar navbar-expand-md main-nav navigation fixed-top sidebar-left"
    >
      <Container>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>

        <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
          {useOnlyDarkLogo ? (
            <>
              <span className="bold text-primary h3">Sm</span>
              <span className="bold text-dark h2">.</span>
            </>
          ) : (
            <>
              <span className="text-primary dark">Sm.</span>
            </>
          )}
        </NavbarBrand>

        <div
          className={`collapse navbar-collapse mt-4 mt-lg-0 ${
            navbarExpanded ? "position-static" : ""
          }`}
        >
          <div className="sidebar-brand">
            <Link to="/">
              <span className="bold text-primary h3">Sm</span>
              <span className="bold text-dark h2">.</span>
            </Link>
          </div>

          <Nav className="nav navbar-nav ml-auto" navbar>
            <NavItem>
              <NavLink href="#features" onClick={handleCloseMenu}>
                About me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#skill" onClick={handleCloseMenu}>
                Skill-Set
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact" onClick={handleCloseMenu}>
                Contact
              </NavLink>
            </NavItem>
          </Nav>
          <SocialMedia color={!iconsColors ? "#fff" : "#ff6f61"} navbar />
        </div>
      </Container>
    </nav>
  );
};

export default DefaultNavbar;
