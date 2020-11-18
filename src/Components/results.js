import React, { useEffect, useState } from "react";
import BeerCard from "./beerCard";
import { Waypoint } from "react-waypoint";
import shortid from "shortid";
import { Row } from "react-bootstrap";
import axios from 'axios';


const ResultsPage = props => {
    const [appState, setAppState] = useState({
        loading: false,
        repos: [],
        page: 1
    });


    useEffect(() => {
        if (props.searchTerm !== "") {
            setAppState({ ...appState, loading: true, page: 1 });
            const apiUrl = `http://localhost:8080/beer`;
            axios.get(apiUrl, { params: { name: props.searchTerm, page: 1 } })
                .then((res) => res.data)
                .then((repos) => {
                    setAppState({ ...appState, loading: false, repos: repos.data });
                }).catch((error) =>
                    console.log(error)
                );
        }

    }, [props.searchTerm]);


    return (
        <div>
            {appState.repos.length !== 0 && (
                <Row >
                    {appState.repos.map((x, i) => (
                        <React.Fragment key={shortid.generate()}>
                            <BeerCard
                                onClick={id => {
                                    props.onChoice(id);
                                }}
                                node={x}
                                id={x.id}
                            />
                            {appState.repos.length % 25 === 0 &&
                                i === appState.repos.length - 1 && props.searchTerm !== "" && (
                                    <Waypoint
                                        onEnter={() => {
                                            const apiUrl = `http://localhost:8080/beer`;
                                            axios.get(apiUrl, { params: { name: props.searchTerm, page: appState.page + 1 } })
                                                .then((res) => res.data)
                                                .then((repos) => {
                                                    setAppState({ ...appState, loading: false, repos: [...appState.repos, ...repos.data], page: appState.page++ });

                                                }).catch((error) =>
                                                    console.error(error)
                                                );
                                        }
                                        }
                                    />
                                )}
                        </React.Fragment>
                    ))}
                </Row>

            )}
            {appState.loading && (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>)
            }

        </div>
    );
};
export default ResultsPage;
