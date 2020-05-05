import React from "react";
import { Link } from "react-router-dom"; 

import "./genre-item.css";


const GenreItem = ({ data }) => {
    
    return (
        <li className="films__category__item genres__item">
            <Link to={`/genres/${data.genre}`}  className="genres__item-container">
                <img src={data.coverImage} width={48} height={49} alt="genre" />
                <span className="genres__item-title">{data.name}</span>
            </Link>
            <div className={`genres__item-background genres__item-background--${data.genre}`} />
        </li>
        
    )
};

export default GenreItem;