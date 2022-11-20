import React from "react";
import Slider from "react-slick";

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="project py-5" id="project">
      <div className="container">
        <div className="row">
          <div className="col-lg-11 text-center mx-auto col-12">
            <div className="col-lg-8 mx-auto">
              <h2>Things I have designed for digital media agencies</h2>
            </div>

            <Slider {...settings} className="owl-carousel owl-theme">
              <div className="item">
                <div className="project-info">
                  <picture>
                    <img
                      src="images/project/project-image01.png"
                      className="img-fluid"
                      alt="project image"
                    />
                  </picture>
                </div>
              </div>

              <div className="item">
                <div className="project-info">
                  <picture>
                    <img
                      src="images/project/project-image02.png"
                      className="img-fluid"
                      alt="project image"
                    />
                  </picture>
                </div>
              </div>

              <div className="item">
                <div className="project-info">
                  <picture>
                    <img
                      src="images/project/project-image03.png"
                      className="img-fluid"
                      alt="project image"
                    />
                  </picture>
                </div>
              </div>

              <div className="item">
                <div className="project-info">
                  <picture>
                    <img
                      src="images/project/project-image04.png"
                      className="img-fluid"
                      alt="project image"
                    />
                  </picture>
                </div>
              </div>

              <div className="item">
                <div className="project-info">
                  <picture>
                    <img
                      src="images/project/project-image05.png"
                      className="img-fluid"
                      alt="project image"
                    />
                  </picture>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
