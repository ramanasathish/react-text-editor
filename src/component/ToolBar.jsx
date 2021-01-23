import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import {
  FaBold,
  FaItalic,
  FaMinus,
  FaParagraph,
  FaPlus,
  FaStrikethrough,
  FaUnderline,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { formatSelection } from "../redux/app-actions";
import ColorPicker from "./ColorPicker";
import FontSizer from "./FontSizer";
import IconButton from "./IconButton";

function ToolBar() {
  const dispatch = useDispatch();
  function doAction(key) {
    dispatch(formatSelection({ [key]: true }));
  }
  return (
    <>
      <IconButton
        className="ml-3"
        icon={<FaBold />}
        iconKey="bold"
        onClickListener={doAction}
      />
      <IconButton
        icon={<FaItalic />}
        iconKey="italic"
        onClickListener={doAction}
      />
      <IconButton
        icon={<FaUnderline />}
        iconKey="underline"
        onClickListener={doAction}
      />
      <IconButton
        icon={<FaStrikethrough />}
        iconKey="strike"
        onClickListener={doAction}
      />
      <FontSizer />
      <ColorPicker />
      <IconButton
        style={{ position: "absolute", right: "7px" }}
        icon={<FaParagraph />}
      />
    </>
  );
}

export default ToolBar;
