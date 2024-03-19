import PropTypes from "prop-types";
function Button(props) {
  return (
    <div>
      <button
        className={"btn btn-" + props.color}
        onClick={props.onClicked}
        type="button"
      >
        {props.children}
      </button>
    </div>
  );
}

Button.defaultProps = {
  color: "primary",
};
Button.propTypes = {
  color: PropTypes.string,
};
export default Button;
