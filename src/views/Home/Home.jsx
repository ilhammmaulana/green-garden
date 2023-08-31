import Layout from "../../components/layouts/Layout";
import backgroundImage from "../../assets/images/stock/Background-1.png";
import Button from "../../components/buttons/Button";
import starIcon from "../../assets/images/icons/icon-star.png";
import legalCompany from "../../assets/images/icons/Icon-legal-company.png";
import focusOnQualityIcon from "../../assets/images/icons/Icon-award.png";
import goodPriceIcon from "../../assets/images/icons/Icon-good-price.png";

export default function Home() {
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
      <section className="h-section-sm mx-auto bg-cover">
        <h1 className=" font-signpainter text-4xl mt-10 text-center">
          Why Should We?
        </h1>
        <p className="text-center mt-2 mx-2 mb-14">
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
    </Layout>
  );
}
