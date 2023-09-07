import PropTypes from "prop-types";

export default function BasicCard(props) {
  return (
    <div className="card-service mb-5 mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <img className="w-full h-auto" src={props.image} alt="Card Image" />
      <div className="px-6 py-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800">{props.title}</h2>
        <p className="text-gray-600 mt-2 text-sm">{props.text}</p>
      </div>
    </div>
  );
}

BasicCard.propTypes = {
  title: PropTypes.string.isRequired, // Require a string title prop
  text: PropTypes.string.isRequired, // Require a string text prop
  image: PropTypes.string.isRequired, // Require a string image prop
};
