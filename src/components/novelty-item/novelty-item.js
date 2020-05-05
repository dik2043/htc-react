import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./novelty-item.css";


export default class NoveltyItem extends Component {
    constructor(props) {
        super(props);
        this.listItemRef = React.createRef();
    }
    
    addAnimation () {
        const listItem = this.listItemRef.current;
        window.setTimeout(() => listItem.classList.add('shown'), 100);
    }

    componentDidMount() {
        this.addAnimation()
    }
    
    render() {
        const { data } = this.props;
        
        return (
            <li ref={this.listItemRef} className="films__category__item novelty__item">
                <Link to={`/films/${data.id}`} className="novelty__item-container">
                    <div className="novelty__item-background" style={{
                            background: `url("${data.coverImage}") 50% 0 no-repeat`,
                            backgroundSize: "cover"}}>
                        <p className="novelty__item-layout">{data.description}</p>
                    </div>
                    <span className="novelty__item-title">{data.name}</span>
                </Link>
            </li>
        );
    }
}