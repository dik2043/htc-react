import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { pageChanged } from "../../actions";

import "./content-switcher.css";


class ContentSwitcher extends Component {
    constructor(props) {
        super(props);
        this.navRef = React.createRef();
    }
    
    addAnimation () {
        const navContainer = this.navRef.current;
        const navLinks = navContainer.querySelectorAll('.content-switcher-tab');
        navLinks.forEach((el) => el.classList.remove('content-switcher-tab--active'));
        if (navContainer.querySelector(`#${this.props.currentPage}`)) {
            const navLink = navContainer.querySelector(`#${this.props.currentPage}`);
            window.setTimeout(() => navLink.classList.add('content-switcher-tab--active'), 100);
        }        
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.currentPage !== this.props.currentPage) {
            this.addAnimation();
        }
    }
    
    render() {
        
        return (
            <nav ref={this.navRef} className="content-switcher">
                <Link to="/"
                      className="content-switcher-tab" 
                      id="films">Фильмы</Link>
                
                <Link to="/channels"
                      className="content-switcher-tab"
                      id="channels">Телеканалы</Link>
            </nav>
        )
    }
}


const mapStateToProps = ({ currentPage }) => {
    return { currentPage }
};

const mapDispatchToProps = (dispatch) => {
    return {
        pageChanged: (page) => dispatch(pageChanged(page))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ContentSwitcher);