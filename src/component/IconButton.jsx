import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

function IconButton(props) {
  const {
    icon,
    size = "sm",
    onClickListener,
    style = {},
    className = "",
    iconKey = "",
  } = props;
  return (
    <Button
      className={["border-0", className]}
      size={size}
      onClick={(e) => {
        if (onClickListener) onClickListener(iconKey);
      }}
      variant="outline-dark"
      style={style}
    >
      {icon}
    </Button>
  );
}

IconButton.propTypes = {
  icon: PropTypes.element.isRequired,
  style: PropTypes.object,
  size: PropTypes.string,
  iconKey: PropTypes.string.isRequired,
  onClickListener: PropTypes.func,
};

export default IconButton;
