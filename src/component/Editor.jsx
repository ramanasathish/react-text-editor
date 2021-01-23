import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import ToolBar from "./ToolBar";
import Paragraph from "./Paragraph";

function Editor() {
  const chapter = useSelector((state) => state.chapter);
  return (
    <>
      <Row
        className="h-100 w-100 d-flex rounded flex-wrap shadow-lg "
        noGutters
      >
        <Col
          lg={12}
          className="shadow bg-white w-100 flex-shrink-1 d-flex align-items-center border-bottom"
          style={{ height: "50px" }}
        >
          <ToolBar />
        </Col>
        <Col
          lg={12}
          className="shadow-sm w-100  flex-grow-1 bg-white rounded d-flex"
          style={{ height: "calc(100% - 50px)" }}
        >
          <Row className="h-100 w-100 d-flex flex-wrap p-3 pt-4" noGutters>
            {chapter.paras?.map((para) => (
              <Paragraph {...para} key={para} />
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Editor;
