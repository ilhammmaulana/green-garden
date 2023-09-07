import PropTypes from "prop-types";
import iconArrow from "../../assets/images/icons/arrow-right.png";

export default function PricingCard(props) {
  return (
    <div className="card-price bg-green-dark-theme-500 rounded-md lg:mx-0 mx-auto">
      <h4 className="font-signpainter text-4xl text-white text-center py-3">
        {props.name}
      </h4>
      <hr className="" />
      <h3 className="text-5xl text-white text-center mt-5">
        <sup className="text-3xl">$</sup>
        {props.price}
        <sup className="text-xl">{props.subprice}</sup>
      </h3>
      <p className="px-4 mt-2 text-white font-extralight text-sm leading-7 space-x-3 text-center">
        {props.description}
      </p>
      <button className="bg-green-theme-500 flex align-middle justify-center mx-auto hover:bg-green-theme-600 text-white py-2 px-4 rounded md:mt-16">
        <p>Contact Now</p>
        <img src={iconArrow} alt="Arrow image" className="ms-2 w-5 m-auto" />
      </button>
    </div>
  );
}

PricingCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subprice: PropTypes.string.isRequired,
};
