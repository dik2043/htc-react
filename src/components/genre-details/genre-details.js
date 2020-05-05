import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import compose from "../../utils/compose";
import { WithVideoService } from "../hoc";
import { fetchFilteredFilms, pageChanged, genresLoaded } from "../../actions";
import { List } from "../films/films";
import NoveltyItem from "../novelty-item";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import "./genre-details.css";


class GenreDetails extends Component {
    
    componentDidMount() {
        const genre = this.props.genreId;
        this.props.fetchFilteredFilms(genre);
        this.props.pageChanged('genreDetails');
        this.props.genresLoaded();
    }
    
    render() {
        const { genres, genreId, filteredFilms, loading, error } = this.props;
        
        if (error) {
            return <ErrorIndicator error={error} />
        }
        
        const currentGenre = genres.filter((el) => el.genre === genreId)[0];
        
        const content = <Fragment>
                            <List data={filteredFilms} Component={NoveltyItem}/>
                        </Fragment>;
        
        
        return (
            <div className="genre-details">
                <div className={`genre-details__background genre-details__background--${genreId}`}>
                    { genres.length ? <img src={currentGenre.coverImage} width={48} height={49} alt="genre" /> : null }
                    { genres.length ? <span className="genre-details__title">{currentGenre.name}</span> : null }
                </div>
                { loading ? <Spinner/> : content }
            </div>
        );
    }
}


const mapStateToProps = ({ filteredFilms, loading, genres, error }) => {
    return { filteredFilms, loading, genres, error }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    
    const { videoService } = ownProps;
    
    return {
        fetchFilteredFilms: (genre) => fetchFilteredFilms(genre, videoService, dispatch),
        pageChanged: (page) => dispatch(pageChanged(page)),
        genresLoaded: () => dispatch(genresLoaded(videoService))
    }
};

export default compose(
    WithVideoService(),
    connect(mapStateToProps, mapDispatchToProps)
)(GenreDetails);