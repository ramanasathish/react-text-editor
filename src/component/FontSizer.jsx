import React, { useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { formatSelection } from "../redux/app-actions";
import IconButton from "./IconButton";

function FontSizer() {
  const [fontSize, setfontSize] = useState(14);
  const dispatch = useDispatch();
  const onChangeFont = (e) => {
    let value = +e.target.value;
    if (value < 0) {
      value = 1;
    }
    if (value > 72) {
      value = 72;
    }
    setfontSize(value);
  };
  const onIncFont = () => {
    if (fontSize < 72) {
      setfontSize(fontSize + 1);
      dispatch(formatSelection({ fontSize: +fontSize }));
    }
  };
  const onDecFont = () => {
    if (fontSize > 2) {
      setfontSize(fontSize - 1);
      dispatch(formatSelection({ fontSize: +fontSize }));
    }
  };
  const onBlurFont = (e) => {
    dispatch(formatSelection({ fontSize: +fontSize }));
  };
  return (
    <>
      <InputGroup size="sm" className="border" style={{ width: 100 }}>
        <InputGroup.Prepend>
          <IconButton onClickListener={onDecFont} icon={<FaMinus />} />
        </InputGroup.Prepend>
        <FormControl
          type="number"
          value={fontSize}
          onChange={onChangeFont}
          onBlur={onBlurFont}
        />
        <InputGroup.Append>
          <IconButton onClickListener={onIncFont} icon={<FaPlus />} />
        </InputGroup.Append>
      </InputGroup>
    </>
  );
}

export default FontSizer;
