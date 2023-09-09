// Components
import Layout from "../../components/layouts/Layout";
import backgroundImage from "../../assets/images/stock/Background-1.png";
import Button from "../../components/buttons/Button";
import PricingCard from "../../components/cards/PricingCard";
import BasicCard from "../../components/cards/BasicCard";

import starIcon from "../../assets/images/icons/icon-star.png";
import legalCompany from "../../assets/images/icons/Icon-legal-company.png";
import focusOnQualityIcon from "../../assets/images/icons/Icon-award.png";
import goodPriceIcon from "../../assets/images/icons/Icon-good-price.png";
import backgroundImage2 from "../../assets/images/stock/Background-3.jpeg";
import backgroundImage3 from "../../assets/images/stock/Background-2.jpeg";

import client1 from "../../assets/images/stock/Client-1.jpg";
import client2 from "../../assets/images/stock/Client-2.jpg";
import client3 from "../../assets/images/stock/Client-3.jpg";
import client4 from "../../assets/images/stock/Client-4.jpg";
import client5 from "../../assets/images/stock/Client-5.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imagService1 from "../../assets/images/stock/Service-1.jpg";
import imagService2 from "../../assets/images/stock/Service-5.jpeg";
import imagService3 from "../../assets/images/stock/Service-3.jpeg";
import imagService4 from "../../assets/images/stock/Service-4.jpeg";
import worker1 from "../../assets/images/stock/worker2.png";
import worker2 from "../../assets/images/stock/worker4.png";
// Icons
import iconArrow from "../../assets/images/icons/arrow-right.png";
import callPhone from "../../assets/images/icons/Footer-icon-phone.png";
import mailIcon from "../../assets/images/icons/Footer-icon-envelope.png";
import locationIcon from "../../assets/images/icons/Footer-icon-marker.png";
import doorOpenIcon from "../../assets/images/icons/Footer-icon-door-open.png";

// Projects
import project1 from "../../assets/images/stock/Project-1.jpeg";
import project2 from "../../assets/images/stock/Project-2.jpeg";
import project3 from "../../assets/images/stock/Project-3.jpeg";
import project4 from "../../assets/images/stock/Project-4.jpeg";
import logo from "../../assets/images/logos/Logo-GG-w200.png";

import facebookIcon from "../../assets/images/icons/Social-Media-facebook-square.png";
import googgleIcon from "../../assets/images/icons/Social-Media-google-plus-square.png";
import instagramIcon from "../../assets/images/icons/Social-Media-instagram.png";
import linekdinIcon from "../../assets/images/icons/Social-Media-linkedin.png";
import XIcon from "../../assets/images/icons/Social-Media-twitter-square.png";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
  };

  return (
    <Layout>
      <section
        className="h-section-sm bg-no-repeat mx-auto bg-cover flex justify-center"
        style={{
          backgroundImage: `   linear-gradient(
            rgba(0, 0, 0, 0.3), 
            rgba(0, 0, 0, 0.1)
          ),url(${backgroundImage})`,
          backgroundPositionY: "90%",
        }}
      >
        <div className="pt-10 m-auto text-center">
          <h2 className="text-white text-5xl md:text-8xl font-signpainter ">
            Green View For Good Live
          </h2>
          <h6 className="text-white mb-3 text-lg font-light ">
            Prepare your garden with our profesional
          </h6>
          <Button>Hire Our Profesional Now!</Button>
        </div>
      </section>
      <section className="container mx-auto section-sm  bg-cover flex flex-col">
        <h1 className="font-signpainter text-5xl mt-1 text-center">
          Why Should We ?
        </h1>
        <p className="text-center mt-3 mx-2 mb-14">
          Because we belive you are our loss and we serve you with passion
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:sm:grid-cols-4 grid-rows-1 gap-4 justify-center">
          <div className="flex flex-col text-center">
            <img src={starIcon} alt="Star Image" className="mx-auto mb-7" />
            <h4 className="text-1xl font-bold">Good Reputation Since `89</h4>
            <p className="text-xs mt-1">
              Lorem ipsum dolor sit amet consectetur. <br />
              Lorem ipsum dolor sit.
            </p>
          </div>
          <div className="flex flex-col text-center">
            <img src={legalCompany} alt="Star Image" className="mx-auto mb-8" />
            <h4 className="text-1xl font-bold mt-auto">Legal Company</h4>
            <p className="text-xs mt-1">
              Vim Lorem ipsum dolor sit amet consectetur. <br />
              Lorem, ipsum.
            </p>
          </div>
          <div className="flex flex-col text-center">
            <img
              src={focusOnQualityIcon}
              alt="Star Image"
              className="mx-auto mb-7"
            />
            <h4 className="text-1xl font-bold">Focus On Quality</h4>
            <p className="text-xs mt-1">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="flex flex-col text-center">
            <img
              src={goodPriceIcon}
              alt="Star Image"
              className="mx-auto mb-7"
            />
            <h4 className="text-1xl font-bold">Good Price</h4>
            <p className="text-xs mt-1">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </section>
      <section
        className="section-sm bg-cover text-white"
        style={{
          backgroundImage: `   linear-gradient(
                rgba(0, 0, 0, 0.4), 
                rgba(0, 0, 0, 0.3)
              ),url(${backgroundImage2})`,
          backgroundPositionY: "40%",
        }}
      >
        <div className="container mx-auto">
          <h1 className="font-signpainter text-5xl mt-1 text-center">
            Our Best Boss
          </h1>
          <p className="text-center mt-3 mx-2 mb-14">
            Because we belive you are our loss and we serve you with passion
          </p>
          <Slider {...settings}>
            <div className="card-component md:flex gap-5">
              <img src={client1} alt="" className="mx-auto rounded-full" />
              <div className="text-center md:text-left">
                <h2 className="text-3xl mb-3 font-bold">Jean Fox JR</h2>
                <p className="rounded-2xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  consequatur ipsam eius ad cupiditate, assumenda explicabo
                  eaque facilis eveniet a nisi fuga natus sapiente beatae dolor
                  obcaecati numquam totam eligendi quos asperiores ab, quia
                  excepturi, quaerat repellendus. Id, ducimus soluta.
                </p>
              </div>
            </div>
            <div className="card-component md:flex justify-center  mx-auto gap-5">
              <img src={client2} alt="" className="mx-auto rounded-full" />
              <div className="text-center md:text-left">
                <h2 className="text-3xl mb-3 font-bold">Jessie Crager</h2>
                <p className="rounded-2xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  consequatur ipsam eius ad cupiditate, assumenda explicabo
                  eaque facilis eveniet a nisi fuga natus sapiente beatae dolor
                  obcaecati numquam totam eligendi quos asperiores ab, quia
                  excepturi, quaerat repellendus. Id, ducimus soluta.
                </p>
              </div>
            </div>
            <div className="card-component md:flex justify-center  mx-auto gap-5">
              <img src={client3} alt="" className="mx-auto rounded-full" />
              <div className="text-center md:text-left">
                <h2 className="text-3xl mb-3 font-bold">Gennie Dee</h2>
                <p className="rounded-2xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  consequatur ipsam eius ad cupiditate, assumenda explicabo
                  eaque facilis eveniet a nisi fuga natus sapiente beatae dolor
                  obcaecati numquam totam eligendi quos asperiores ab, quia
                  excepturi, quaerat repellendus. Id, ducimus soluta.
                </p>
              </div>
            </div>
            <div className="card-component md:flex justify-center  mx-auto gap-5">
              <img src={client4} alt="" className="mx-auto rounded-full" />
              <div className="text-center md:text-left">
                <h2 className="text-3xl mb-3 font-bold">Yoshi</h2>
                <p className="rounded-2xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  consequatur ipsam eius ad cupiditate, assumenda explicabo
                  eaque facilis eveniet a nisi fuga natus sapiente beatae dolor
                  obcaecati numquam totam eligendi quos asperiores ab, quia
                  excepturi, quaerat repellendus. Id, ducimus soluta.
                </p>
              </div>
            </div>
            <div className="card-component md:flex justify-center  mx-auto gap-5">
              <img src={client5} alt="" className="mx-auto rounded-full" />
              <div className="text-center md:text-left">
                <h2 className="text-3xl mb-3 font-bold">Tomy James</h2>
                <p className="rounded-2xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  consequatur ipsam eius ad cupiditate, assumenda explicabo
                  eaque facilis eveniet a nisi fuga natus sapiente beatae dolor
                  obcaecati numquam totam eligendi quos asperiores ab, quia
                  excepturi, quaerat repellendus. Id, ducimus soluta.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      <section className="container mx-auto">
        <h1 className="font-signpainter text-5xl mt-1 text-center">
          Our Spesial Service
        </h1>
        <p className="text-center mt-3 mx-2 mb-14">
          To give you a diferent think about garden, makes you feel comfortable
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          <BasicCard
            image={imagService1}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse doloremque voluptatum quis magnam aspernatur atque suscipit ipsa. Reiciendis, illum.
          "
            title="Grass Cuting"
          />
          <BasicCard
            image={imagService2}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse doloremque voluptatum quis magnam aspernatur atque suscipit ipsa. Reiciendis, illum.
          "
            title="Planting"
          />
          <BasicCard
            image={imagService3}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse doloremque voluptatum quis magnam aspernatur atque suscipit ipsa. Reiciendis, illum.
          "
            title="Seed Provider"
          />
          <BasicCard
            image={imagService4}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse doloremque voluptatum quis magnam aspernatur atque suscipit ipsa. Reiciendis, illum.
        "
            title="Prepare Land Garden"
          />
        </div>
      </section>
      <section
        id="offer-section"
        className="section-sm bg-cover text-white"
        style={{
          backgroundImage: `linear-gradient(
                 rgba(0, 0, 0, 0.4), 
                 rgba(0, 0, 0, 0.3)
               ),url(${backgroundImage3})`,
          backgroundPositionY: "40%",
        }}
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 ">
          <div className="sm:ms-28 sm:mt-14 z-20">
            <h1 className="font-signpainter mb-2 sm:mb-0  text-5xl mt-1 text-start text-white">
              Lets make your garden awesome !
            </h1>
            <p className="mb-3">
              With your profesional we make wonderfull garden in yard
            </p>
            <Button> Hire Our Profesional Now !</Button>
          </div>
          <img src={worker1} className="image-offer-section" alt="" />
        </div>
      </section>
      <section className="bg-green-dark-theme-500">
        <div className="container mx-auto  text-center text-white">
          <h1 className="font-signpainter mb-2 sm:mb-4  text-5xl mt-1">
            Recent Project
          </h1>
          <p className="mb-8 sm:mb-4 text-center ">
            With your profesional we make wonderfull garden in yard
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 container-image-projects mb-5 xl:mx-20">
            <img src={project1} alt="" />
            <img src={project2} alt="" />
            <img src={project3} alt="" />
            <img src={project4} alt="" />
          </div>
          <button className="bg-green-theme-500 flex align-middle justify-center mx-auto hover:bg-green-theme-600 text-white py-2 px-4 rounded">
            <p>More projects</p>
            <img
              src={iconArrow}
              alt="Arrow image"
              className="ms-2 w-5 m-auto"
            />
          </button>
        </div>
      </section>
      <section>
        <h1 className="font-signpainter mb-2 sm:mb-4 text-5xl mt-1 text-center">
          Pricing Guide
        </h1>
        <p className="mb-8 sm:mb-4 text-center">
          Choose your pricing plan and we will make your garden beuty
        </p>
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          <PricingCard
            name="Basic"
            price="10"
            subprice="68"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere veniam eius quidem veritatis culpa et? Accusantium nemo architecto perspiciatis unde?"
          />
          <PricingCard
            name="Standart"
            price="23"
            subprice="83"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere veniam eius quidem veritatis culpa et? Accusantium nemo architecto perspiciatis unde?"
          />
          <PricingCard
            name="Premium"
            price="47"
            subprice="98"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere veniam eius quidem veritatis culpa et? Accusantium nemo architecto perspiciatis unde?"
          />
        </div>
      </section>
      <section className="bg-green-dark-theme-500" id="footer">
        <footer className="container mx-auto text-white">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:gap-20 gap-3 md:mx-20 z-50">
            <div className="">
              <img src={logo} alt="" className="max-w-full h-auto" />
              <p className="text-white text-sm mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
                voluptates harum quaerat ratione. Unde officiis nemo, harum
                voluptatum suscipit quibusdam iure accusantium enim fugit est?
              </p>
              <h5 className="text-green-theme-500 fw-bold mt-3">
                Readmore &gt;
              </h5>
            </div>
            <div className="">
              <h4 className="text-2xl font-bold">Contact us :</h4>
              <ul className="mt-3">
                <li className="flex items-center mb-1 text-sm">
                  <img src={callPhone} alt="" className="me-2" />
                  +1 736 829 73
                </li>
                <li className="flex items-center mb-1">
                  <img src={mailIcon} alt="" className="me-2" />
                  contac@ilhamm.biz.id
                </li>
                <li className="flex items-center mb-1">
                  <img src={locationIcon} alt="" className="me-2" />
                  Jalan kenangan 20923 Semarang Banyumanik
                </li>
                <li className="flex items-center mb-1">
                  <img src={doorOpenIcon} alt="" className="me-2" />
                  Opening hour : Monday - Friday <br /> 09:00 - 17:00
                </li>
              </ul>
            </div>
            <div className="image-footer">
              <img src={worker2} alt="" className="max-w-full h-auto" />
            </div>
          </div>
        </footer>
      </section>
      <div className="bg-slate-800 relative bottom-0 z-40 py-4">
        <div className="flex justify-around flex-col sm:flex-row text-white">
          <p className="mx-2 sm:mx-0">
            &copy; Copyright Green Garden 2023. All Rights Reversed
          </p>
          <div className="flex gap-2 md:gap-3 sm:mt-0 mt-2 ms-2">
            <a href="https://ilhamm.biz.id">
              <img src={facebookIcon} alt="" />
            </a>
            <a href="https://ilhamm.biz.id">
              <img src={googgleIcon} alt="" />
            </a>
            <a href="https://ilhamm.biz.id">
              <img src={instagramIcon} alt="" />
            </a>
            <a href="https://ilhamm.biz.id">
              <img src={linekdinIcon} alt="" />
            </a>
            <a href="https://ilhamm.biz.id">
              <img src={XIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
