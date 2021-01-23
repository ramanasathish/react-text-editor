import { Col, Container, Form, Row } from "react-bootstrap";
import './App.css';
import Chapter from "./component/Chapter";
import Editor from "./component/Editor";
import JsonViewer from "./component/JsonViewer";

function App() {
  return (
    <Container fluid className="vh-100 p-0" style={{ backgroundColor: '#F8F8FF' }}>
      <Row className="h-100 p-3 d-flex flex-nowrap" noGutters>
        <div className="h-100 p-3" style={{ width: 400 }} >
          <JsonViewer />
        </div>
        <div style={{ width: 'calc(100vw - 464px)' }}>
          <Row className="h-100 p-3 d-flex" noGutters>
            <div style={{ width: 250 }} className="bg-white">
              <Chapter />
            </div>
            <div style={{ flex: 1 }}>
              <Editor />
            </div>
          </Row>
        </div>
      </Row>
    </Container >
  );
}

export default App;
