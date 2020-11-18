import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import "./scssApp.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import ResultsPage from './Components/results';
import MiniReport from './Components/miniReport';
import SearchBox from './Components/searchBox';

const App = () => {
  const [searchParams, setSearch] = useState({
    name: undefined,
    timeout: 0,
  });

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
  };

  return (
    <div className="App">
      <Container lg={10} md={10} style={{ marginTop: 40 }}>

        <SearchBox setSearch={setSearch} searchParams={searchParams} />

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
