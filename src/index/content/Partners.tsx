import { Key } from "react";
import Slider from "react-slick";
import Aranda from "../../assets/img/logos/aranda.svg";
import Fac from "../../assets/img/logos/fac.svg";
import Fracttal from "../../assets/img/logos/fracttal.svg";
import Gditech from "../../assets/img/logos/gditech.svg";
import Optime from "../../assets/img/logos/optime.svg";

interface LogoItem {
  src: string;
}

const Logo: Array<LogoItem> = [
  {
    src: Fracttal,
  },
  {
    src: Fac,
  },
  {
    src: Aranda,
  },
  {
    src: Gditech,
  },
  {
    src: Optime,
  },
];

const Partners = () => {
  const params = {
    className: "center",
    centerPadding: "60px",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="section">
      <div className="container py-5 border-bottom">
        <Slider {...params}>
          {Logo.map((logo: { src: string }, i: Key | null | undefined) => (
            <div className="swiper-slide" key={i}>
              <img
                src={logo.src}
                className="img-responsive"
                alt=""
                style={{ maxHeight: "60px" }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Partners;
