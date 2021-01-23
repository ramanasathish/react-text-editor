import React from "react";
import TextContent from "./TextContent";
import clsx from "clsx";

function Paragraph(props) {
  const { content, format = {} } = props;
  return (
    <div className={clsx(format)} style={format}>
      {content.map((e, i) => (
        <TextContent {...e} index={i} key={e} />
      ))}
    </div>
  );
}

export default Paragraph;
