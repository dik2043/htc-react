import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { fetchCurrentFilm, pageChanged } from "../../actions";
import { WithVideoService } from "../hoc";
import compose from "../../utils/compose";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import "./film-details.css";


class FilmDetails extends Component {
    
    componentDidMount() {
        this.props.pageChanged('currentFilm');
        const { filmId } = this.props;
        this.props.fetchCurrentFilm(filmId);
    }
    
    render() {
        
        const { currentFilm, loading, error } = this.props;
        
        if (error) {
            return <ErrorIndicator error={error} />
        }
        
        const mapGenre = {
            comedy: "Комедия",
            fantasy: "Фантастика",
            drama: "Драма",
            horror: "Ужасы"
        };
        
        const content = <Fragment>
                            <img alt="film-logo" className="film-details__logo" src={currentFilm.coverImage} />
                            <div className="film-details__info">
                                <h3 className="film-details__title">{currentFilm.name}</h3>
                                <h5 className="film-details__genre">{mapGenre[currentFilm.genre]}</h5>
                                <span className="films-details__duration">{currentFilm.duration}</span>
                                <p className="film-details__description">{currentFilm.description}</p>
                            </div>
                        </Fragment>;
        
        
        return (
            <div className="film-details">
                { loading ? <Spinner/> : content }                
            </div>
        );
    }
};



const mapStateToProps = ({ currentFilm, loading, error }) => {
    return { currentFilm, loading, error }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    
    const { videoService } = ownProps;
    
    return {
        fetchCurrentFilm: (id) => fetchCurrentFilm(id, videoService, dispatch),
        pageChanged: (page) => dispatch(pageChanged(page))
    }
};

export default compose(
    WithVideoService(),
    connect(mapStateToProps, mapDispatchToProps)
)(FilmDetails);