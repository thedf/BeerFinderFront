import React, { useState } from 'react';
import { Row, Col, Card, Container, Button, Dropdown, FormControl, Collapse } from "react-bootstrap";
import UcFirst from "./Componants/UcFirst";
import "./scssApp.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import ResultsPage from './Componants/results';
import MiniReport from './Componants/miniReport';

const App = (props) => {
  const [searchParams, setSearch] = useState({
    name: undefined,
  });
  const [tempValues, setValue] = useState({
    timeout: 0,

  });
  const [specificName, setSpecificName] = useState("");
  const [state, setState] = useState({
    listOpen: false,
    node: { id: 0 }
  });

  const handleChoice = node => {
    setState({
      node: node,
      listOpen:
        state.listOpen === true && state.node === node ? false : true
    });
    // console.log(id);
  };
  const handleChange = value => {
    setSpecificName(value);
    // console.log(tempValues.timeout);
    if (tempValues.timeout) clearTimeout(tempValues.timeout);
    tempValues.timeout = setTimeout(() => {
      //search function
      setSearch({ name: value })
      console.log(value);
    }, 500);

  }
  return (
    <div className="App">
      <Container lg={10} md={10} style={{ marginTop: 40 }}>
        <Card>
          <Card.Body>
            <Row>
              <strong>
                <h5>Look for your Beer: </h5>
              </strong>
            </Row>
            <form

              onSubmit={event => {
                event.preventDefault();
                setValue({ name: specificName });
              }
              }
            >
              <Row className="align-content-center justify-content-center">

                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="For eg: Sunk Punk"
                    value={specificName === "" ? "" : specificName}
                    onChange={event => handleChange(event.target.value)}

                    required
                  />

                </div>

              </Row>
            </form>
          </Card.Body>
        </Card>

        <ResultsPage searchTerm={searchParams.name} onChoice={handleChoice} />
        {state.listOpen && (
          <MiniReport
            listOpen={state.listOpen}
            node={state.node}
            closed={() => {
              setState({ ...state, listOpen: false });
            }}
          />
        )}

      </Container>
    </div>
  );
}

export default App;
