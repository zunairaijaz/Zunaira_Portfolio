import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SiUpwork, SiFiverr, SiFreelancer, SiLinkedin } from 'react-icons/si';

const platformIcons = {
  Upwork: <SiUpwork size={24} color="#14A800" />,
  Fiverr: <SiFiverr size={24} color="#1DBF73" />,
  Freelancer: <SiFreelancer size={24} color="#29B2FE" />,
  LinkedIn: <SiLinkedin size={24} color="#0077B5" />,
};

const testimonials = [
  {
    review:
      "Working with Shamila was an absolute pleasure. The website he developed exceeded our expectations!",
    name: "John Doe",
    platform: "Upwork",
  },
  {
    review:
      "Incredible React Native skills and super fast delivery. Highly recommended!",
    name: "Sarah Malik",
    platform: "Fiverr",
  },
  {
    review:
      "Great communication, fantastic design sense, and truly professional. We loved the outcome!",
    name: "Michael Smith",
    platform: "LinkedIn",
  },
  {
    review:
      "Shamila helped us scale our mobile app flawlessly. Very talented developer!",
    name: "Ayesha Khan",
    platform: "Freelancer",
  },
  {
    review:
      "Highly skilled and responsive throughout the project. Will definitely work again.",
    name: "David Johnson",
    platform: "Upwork",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="testimonials" className="py-5 bg-dark-purple text-white">
         <h2 className="text-center fw-bold display-6 mb-2" style={{ color: '#00FFF7' }}>
            My Client's Stories
          </h2>
          <p className="text-center text-light mb-5">
            Empowering people in a new digital journey with my super services
          </p>
      <div className="container d-flex justify-content-center">
        <div
          className="p-5 shadow-lg"
          style={{
            width: '100%',
            maxWidth: '1500px',
            background: 'rgba(255, 255, 255, 0.06)',
            borderRadius: '2rem',
            border: '1px solid rgba(255,255,255,0.15)',
            backdropFilter: 'blur(20px)',
            maxHeight: '800px'
          
          }}
        >

          <Slider {...settings}>
            {testimonials.map((item, idx) => (
              <div key={idx} className="px-3">
                <div
                  className="card h-100 p-4 shadow"
                  style={{
                    borderRadius: '1.5rem',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    minHeight: '280px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <p className="fs-6 fst-italic text-light">
                    “{item.review}”
                  </p>
                  <div className="mt-4 d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="mb-1 fw-bold" style={{ color: '#00FFF7' }}>
                        {item.name}
                      </h5>
                      <div className="d-flex align-items-center gap-2 text-white text-bold">
                        {platformIcons[item.platform]}
                        <small>{item.platform}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
