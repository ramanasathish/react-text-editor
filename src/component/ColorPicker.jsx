import React, { useEffect, useRef, useState } from "react";
import { Button, Overlay } from "react-bootstrap";
import { CompactPicker } from "react-color";
import { FaFont } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { formatSelection } from "../redux/app-actions";

function ColorPicker(props) {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  // useOutsideAlerter(target, () => setShow(false));
  const dispatch = useDispatch();
  const [color, setColor] = useState("");

  const handleChangeComplete = (color) => {
    setColor(color.hex);
    dispatch(formatSelection({ color: color.hex }));
  };
  return (
    <>
      <Button
        ref={target}
        onClick={() => setShow(!show)}
        className="border-0"
        variant="outline-dark"
        style={{ color }}
        size="sm"
      >
        <FaFont />
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              padding: "2px 10px",
              color: "white",
              borderRadius: 3,
              ...props.style,
            }}
          >
            <CompactPicker
              color={color}
              onChangeComplete={handleChangeComplete}
            />
          </div>
        )}
      </Overlay>
    </>
  );
}

function useOutsideAlerter(ref, callback) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

export default ColorPicker;
