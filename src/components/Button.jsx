import PropTypes from "prop-types";

export const Button = ({ isActive, title }) => {
  return (
    <button
      className={
        !isActive
          ? "bg-white text-textBlack rounded-[8px] p-3 hover:bg-btnBlue/90 hover:text-white duration-150 transition-colors"
          : "bg-btnBlue text-white rounded-[8px] p-3 hover:bg-btnBlue/90 hover:text-white duration-150 transition-colors"
      }
    >
      {title}
    </button>
  );
};
Button.propTypes = {
  isActive: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};
