import React, { Component } from "react";
import { connect } from "react-redux";

import compose from "../../utils/compose";
import { fetchFilms, genresLoaded, pageChanged, fetchRandomFilms } from "../../actions";
import { WithVideoService } from "../hoc";
import NoveltyItem from "../novelty-item";
import GenreItem from "../genres-item";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import "./films.css";


export const List = ({ data, Component }) => {
    return (
        <ul className="films__category__list">
            {
                data.map((item) => {
                    return <Component data={item} key={item.id}/>
                })
            }
        </ul>
    )
};


class Films extends Component {
    constructor(props) {
        super(props);
        this.filmsRef = React.createRef();
    }
    
    addAnimation() {
        const films = this.filmsRef.current;
        if (films) {
            window.setTimeout(() => films.classList.add('shown'), 100);
        }        
    }
    
    componentDidMount() {
        this.props.pageChanged('films');
        if (!this.props.films.length) {
            this.props.fetchFilms();
        }
        this.props.genresLoaded();
        this.addAnimation();
    }
    
    render() {
        
        const { films, genres, loading, fetchRandomFilms, error } = this.props;
        
        if (error) {
            return <ErrorIndicator error={error} />
        }
        
        const content = loading ?  <Spinner /> : <List data={films} Component={NoveltyItem}/>;
        
        
        return (
            <section ref={this.filmsRef} className="films">
                
                <section className="films__category films__category--novelty">
                    <div className="films__category-nav">
                        <h2 className="films__category-headline films__category-headline--fire">Новинки</h2>
                        <button 
                            onClick={() => fetchRandomFilms()} className="films__category-nav-button">Хочу ещё</button>
                    </div>
                    {content}
                </section>
                
                <section className="films__category films__category--genres">
                    <h2 className="films__category-headline">Жанры</h2>
                    
                    <List data={genres} Component={GenreItem} />
                </section>
                
            </section>
        )
    }
}


const mapStateToProps = ({ films, genres, loading, error }) => {
    return { films, genres, loading, error }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    
    const { videoService } = ownProps;
    
    return {
        fetchFilms: fetchFilms(videoService, dispatch),
        fetchRandomFilms: fetchRandomFilms(videoService, dispatch),
        genresLoaded: () => dispatch(genresLoaded(videoService)),
        pageChanged: (page) => dispatch(pageChanged(page))
    }
};


export default compose(
    WithVideoService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Films);