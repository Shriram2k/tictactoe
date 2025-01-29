import PropTypes from "prop-types";
const Reset = ({ handleReset }) => {
  return (
    <button onClick={handleReset} className="reset-button">
      Reset
    </button>
  );
};

Reset.propTypes = {
  handleReset: PropTypes.func.isRequired,
};

export default Reset;
