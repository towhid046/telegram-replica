import PropTypes from "prop-types";

const Tab = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`py-2 px-4 font-medium  ${
        isActive ? "text-[#8774E1] border-b-2 border-[#8774E1]" : "text-[#AAA]"
      } focus:outline-none`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;
