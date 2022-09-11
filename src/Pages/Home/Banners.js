import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import img1 from "../../images/cover/1.png";
import img2 from "../../images/cover/2.png";
import img3 from "../../images/cover/3.jpg";
import img4 from "../../images/cover/4.jpg";
import img5 from "../../images/cover/5.jpg";
import img6 from "../../images/cover/6.jpg";
import CustomButton from "../Shared/CustomButton";
import { Link } from "react-router-dom";

const Banners = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <div
          className="hero h-[629px]"
          style={{
            backgroundImage: `url(${img1})`,
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-center text-white">
            <div className="max-w-md mb-[-300px]">
              <h1 className="mb-5 text-5xl font-bold">KTM RC 125</h1>
              <p className="mb-5">
                The KTM 125 FRR was a racing motorcycle made by KTM, which was
                used in the 125cc class of Grand Prix motorcycle racing from
                2003 until 2011. The bike has been replaced by the KTM RC250GP
                from 2012 onwards.
              </p>
              <div className=" justify-center flex mb-5">
                <Link to="/manage">
                  <CustomButton>Explore Inventories</CustomButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="hero h-[629px]"
          style={{
            backgroundImage: `url(${img2})`,
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-center text-white">
            <div className="max-w-md mb-[-300px]">
              <h1 className="mb-5 text-5xl font-bold">KTM 200 DUKE</h1>
              <p className="mb-5">
                The KTM 200 Duke is a 199.5 cc single-cylinder standard
                motorcycle made by KTM since 2012. It has a four-stroke,
                spark-ignition liquid-cooled engine. It has six-speed gearbox
                and a cable actuated multi-disc clutch.
              </p>
              <div className=" justify-center flex mb-5">
                <Link to="/manage">
                  <CustomButton>Explore Inventories</CustomButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="hero h-[629px]"
          style={{
            backgroundImage: `url(${img3})`,
          }}
        >
          <div className="hero-overlay "></div>
          <div className="hero-content text-center text-white">
            <div className="max-w-md mb-[-300px]">
              <h1 className="mb-5 text-5xl font-bold">KTM RC16</h1>
              <p className="mb-5">
                The KTM RC16 is a prototype grand prix racing motorcycle which
                was developed to race in the MotoGP series by KTM, starting from
                the 2017 season.
              </p>
              <div className=" justify-center flex mb-5">
                <Link to="/manage">
                  <CustomButton>Explore Inventories</CustomButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="hero h-[629px]"
          style={{
            backgroundImage: `url(${img4})`,
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-center text-white">
            <div className="max-w-md mb-[-300px]">
              <h1 className="mb-5 text-5xl font-bold uppercase">
                yamaha fz6r{" "}
              </h1>
              <p className="mb-5">
                The FZ6R is a great combination of performance, handling, and
                exciting sport bike style, but also with a low seat height
                that's both adjustable to fit a wider variety of riders and also
                narrower where it counts to make it even easier to put both feet
                on the ground.
              </p>
              <div className=" justify-center flex mb-5">
                <Link to="/manage">
                  <CustomButton>Explore Inventories</CustomButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="hero h-[629px]"
          style={{
            backgroundImage: `url(${img5})`,
          }}
        >
          <div className="hero-overlay "></div>
          <div className="hero-content text-center text-white">
            <div className="max-w-md mb-[-300px]">
              <h1 className="mb-5 text-5xl font-bold">YAMAHA V-MAX</h1>
              <p className="mb-5">
                The Yamaha V-Max, cruiser motorcycle was produced by Yamaha from
                1985. Known for its 70° V4 engine, shaft drive, and distinctive
                styling, the V-Max was discontinued following the 2020 model
                year.
              </p>
              <div className=" justify-center flex mb-5">
                <Link to="/manage">
                  <CustomButton>Explore Inventories</CustomButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="hero h-[629px]"
          style={{
            backgroundImage: `url(${img6})`,
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-center text-white">
            <div className="max-w-md mb-[-300px]">
              <h1 className="mb-5 text-5xl font-bold uppercase">
                Ducati XDiavel
              </h1>
              <p className="mb-5">
                The Ducati Diavel is a unique motorcycle in the brand’s
                portfolio. It is the Italian motorcycle maker’s interpretation
                of how a cruiser should look like, breaking away from the
                conventional design. Rishaad has ridden the Diavel and mentions,
                “The Diavel is stunning and menacing, one of the biggest
                attention magnets I’ve ridden.”
              </p>
              <div className=" justify-center flex mb-5">
                <Link to="/manage">
                  <CustomButton>Explore Inventories</CustomButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banners;
