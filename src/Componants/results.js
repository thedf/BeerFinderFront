import React, { useEffect, useState } from "react";
import InfCard from "./beerCard";
import { Waypoint } from "react-waypoint";
import shortid from "shortid";
// import { PleaseUpgrade } from "./usefulParts";
import { Container, Col, Button, Row, CardDeck } from "react-bootstrap";
import axios from 'axios';

const ResultsPage = props => {
    const [idSelected, setidSelected] = useState(-1);
    const [appState, setAppState] = useState({
        loading: false,
        repos: [],
        page: 1
    });
    console.log(props.searchTerm);
    console.log(appState);

    useEffect(() => {
        if (props.searchTerm !== "") {
            setAppState({ ...appState, loading: true, page: 1 });

            console.log(appState);
            const apiUrl = `http://localhost:8080/beer`;
            let bodyFormData = new FormData();
            bodyFormData.append("name", props.searchTerm);
            bodyFormData.append("page", 1);
            axios.post(apiUrl, bodyFormData)
                .then((res) => res.data)
                .then((repos) => {
                    setAppState({ ...appState, loading: false, repos: repos.data });
                    console.log(repos.data);
                }).catch((error) =>
                    console.log(error)
                );
        }

    }, [props.searchTerm]);
    // if (props.error) {
    //     if (props.error.graphQLErrors[0].message === "Search Rate Limit Error") {
    //         PNotify.error({
    //             title: "Plan's Rates Exceeded",
    //             text: "You did reach Your Search Limit, Check Plan and Billing page!"
    //         });
    //         return <PleaseUpgrade />;
    //     } else {
    //         PNotify.error({
    //             title: "Warning",
    //             text: props.error.graphQLErrors[0].message
    //         });
    //         return <PleaseUpgrade />;
    //     }
    // }



    return (
        <div>
            {appState.repos.length !== 0 && (
                <Row >
                    {appState.repos.map((x, i) => (
                        <React.Fragment key={shortid.generate()}>
                            <InfCard
                                onClick={id => {
                                    // console.log(id);
                                    setidSelected(id.id);
                                    props.onChoice(id);
                                }}
                                node={x}
                                id={x.id}
                            />
                            {appState.repos.length % 25 === 0 &&
                                i === appState.repos.length - 1 && props.searchTerm !== "" && (
                                    <Waypoint
                                        onEnter={() => {
                                            //fetch more

                                            // setAppState({ ...appState, loading: true, page: appState.page++ });
                                            console.log(appState);
                                            const apiUrl = `http://localhost:8080/beer`;
                                            let bodyFormData = new FormData();
                                            bodyFormData.append("name", props.searchTerm);
                                            bodyFormData.append("page", appState.page + 1);
                                            axios.post(apiUrl, bodyFormData)
                                                .then((res) => res.data)
                                                .then((repos) => {
                                                    setAppState({ ...appState, loading: false, repos: [...appState.repos, ...repos.data], page: appState.page++ });
                                                    console.log(repos.data);
                                                }).catch((error) =>
                                                    console.log(error)
                                                );
                                            console.log("fetching more")
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
