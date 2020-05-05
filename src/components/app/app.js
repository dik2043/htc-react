import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ModalContainer from "../modal"
import Header from "../header";
import ContentSwitcher from "../content-switcher";
import Films from "../films";
import FilmDetails from "../film-details";
import GenreDetails from "../genre-details";
import Channels from "../channels";
import Footer from "../footer";

import "./app.css";


const App = () => {
    return (
        <Router>
            <Fragment>
                <ModalContainer />
                <Header />
                <main>
                    <div className="wrapper">
                        <ContentSwitcher />
                        <Switch>
                            <Route path="/" component={Films} exact />
                            
                            <Route path="/films/:id" render={
                                ({ match }) => {
                                    const { id } = match.params;
                                    return <FilmDetails filmId={id} />
                                }
                            }/>
                            
                            <Route path="/channels" component={Channels} exact />
                            
                            <Route path="/genres/:id" render={
                                ({ match }) => {
                                    const { id } = match.params;
                                    return <GenreDetails genreId={id} />
                                }
                            }/>
                            
                            <Route render={() => <h2>Page not found</h2>} />
                        </Switch>
                    </div>
                </main>
                <Footer />
            </Fragment>
        </Router>
    )
};


export default App;