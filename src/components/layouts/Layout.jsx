import Navbar from "../navbar/Navbar";
import PropTypes from "prop-types";
export default function Layout({ children }) {
  return (
    <div className="w-full mx-auto">
      <Navbar />
      <div className="mx-auto">{children}</div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired, // children prop is a node and is required
};
