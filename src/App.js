import './App.css';
import UsersFunction from './compenents/UsersFunction';
import {Container, Row, Col} from "react-bootstrap";
import UsersClass from './compenents/UsersClass';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Container  style={{margin: "auto"}}>
        <Row>
          <Col>
          <UsersFunction/>
          </Col>
          <Col>
            <UsersClass/>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
