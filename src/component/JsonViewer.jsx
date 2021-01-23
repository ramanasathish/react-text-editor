import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadInput, loadOutput } from "../redux/app-actions";
import inputJson from "../input.json";

function JsonViewer() {
  const output = useSelector((state) => state.output);
  const dispatch = useDispatch();
  const [input, setInput] = useState(JSON.stringify(inputJson));
  const doLoadOutput = (event) => dispatch(loadOutput());
  const doLoadInput = (event) => dispatch(loadInput(input));
  return (
    <Row className="shadow h-100 d-flex flex-row flex-wrap" noGutters>
      <Col lg={12} className="h-50 p-3 w-100 border-bottom bg-white">
        <span>Input</span>
        <Button
          className="float-right"
          variant="outline-primary"
          size="sm"
          onClick={doLoadInput}
        >
          Load Input
        </Button>
        <Form.Control
          as="textarea"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ resize: "none", height: "90%" }}
        />
      </Col>
      <Col lg={12} className="h-50 p-3 w-100 bg-white">
        <span>Output</span>
        <Button
          className="float-right"
          variant="outline-primary"
          size="sm"
          onClick={doLoadOutput}
        >
          Load Output
        </Button>
        <Form.Control
          as="textarea"
          value={JSON.stringify(output)}
          style={{ resize: "none", height: "90%" }}
        />
      </Col>
    </Row>
  );
}

export default JsonViewer;
