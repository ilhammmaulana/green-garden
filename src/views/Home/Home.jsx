import Layout from "../../components/layouts/Layout";
import backgroundImage from "../../assets/images/stock/Background-1.png";
import Button from "../../components/buttons/Button";
import starIcon from "../../assets/images/icons/icon-star.png";
import legalCompany from "../../assets/images/icons/Icon-legal-company.png";
import focusOnQualityIcon from "../../assets/images/icons/Icon-award.png";
import goodPriceIcon from "../../assets/images/icons/Icon-good-price.png";
import backgroundImage2 from "../../assets/images/stock/Background-3.jpeg";
import client1 from "../../assets/images/stock/Client-1.jpg";
import client2 from "../../assets/images/stock/Client-2.jpg";
import client3 from "../../assets/images/stock/Client-3.jpg";
import client4 from "../../assets/images/stock/Client-4.jpg";
import client5 from "../../assets/images/stock/Client-5.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imagService1 from "../../assets/images/stock/Service-1.jpg";
import imagService2 from "../../assets/images/stock/Service-2.jpg";
import imagService3 from "../../assets/images/stock/Service-3.jpeg";
import imagService4 from "../../assets/images/stock/Service-4.jpeg";
import BasicCard from "../../components/cards/BasicCard";

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
          <h6 className="text-white mb-3 text-lg font-light mt-4">
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
            image={imagService1}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse doloremque voluptatum quis magnam aspernatur atque suscipit ipsa. Reiciendis, illum.
          "
            title="Grass Cuting"
          />
          <BasicCard
            image={imagService1}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse doloremque voluptatum quis magnam aspernatur atque suscipit ipsa. Reiciendis, illum.
          "
            title="Grass Cuting"
          />
          <BasicCard
            image={imagService1}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse doloremque voluptatum quis magnam aspernatur atque suscipit ipsa. Reiciendis, illum.
        "
            title="Grass Cuting"
          />
        </div>
      </section>
    </Layout>
  );
}
