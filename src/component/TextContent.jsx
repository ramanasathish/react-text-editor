import React from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { updateSelection } from "../redux/app-actions";

function TextContent(props) {
  const { text, format = {}, index } = props;
  const dispatch = useDispatch();

  const onMouseUpHandler = (event) => {
    event.preventDefault();
    const selectionObj = window.getSelection && window.getSelection();
    const selection = selectionObj.toString();
    const anchorNode = selectionObj.anchorNode;
    const focusNode = selectionObj.focusNode;
    const anchorOffset = selectionObj.anchorOffset;
    const focusOffset = selectionObj.focusOffset;
    const position = anchorNode.compareDocumentPosition(focusNode);
    let forward = false;
    if (position === anchorNode.DOCUMENT_POSITION_FOLLOWING) {
      forward = true;
    } else if (position === 0) {
      forward = focusOffset - anchorOffset > 0;
    }
    const start = forward ? anchorOffset : focusOffset;
    const end = start + selection.length;
    console.log("endIndex", index);
    dispatch(updateSelection(start, end, index, selection));
  };
  return (
    <span
      className={clsx(format)}
      style={{ ...format }}
      onMouseDown={() => console.log(index)}
      onMouseUp={onMouseUpHandler}
    >
      {text}
    </span>
  );
}

export default TextContent;
