import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
import meter4 from "../assets/img/meter4.png";
import meter5 from "../assets/img/meter5.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Team = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="team" id="team">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="team-bx wow zoomIn">
                        <h2>Meet the Team</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme team-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Maher</h5>
                                <h6>Founder, Game Director</h6>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Alex</h5>
                                <h6>Founding Engineer</h6>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Emily</h5>
                                <h6>Lead Artist</h6>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Josh</h5>
                                <h6>Business Development Executive</h6>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>Ryan</h5>
                                <h6>Lead Engineer</h6>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
