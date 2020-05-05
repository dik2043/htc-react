import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { modalOpened, userNameChanged } from "../../actions";

import "./header.css";


class Header extends Component {
    constructor(props) {
        super(props);
        
        this.state = { isInputActive: false }
    }
    
    
    render() {
        
        const { userName, modalOpened, userNameChanged } = this.props;
        const { isInputActive } = this.state;
        
        const userNameSpan = <span
                                onClick={() => { this.setState({isInputActive: true}) }}
                                className="header__user-name">{userName}</span>;
    
        const loginButton = <button
                                onClick={modalOpened}
                                className="header__login login-btn">Войти
                            </button>;
    
        const logoutButton = <button
                                onClick={() => {
                                    userNameChanged('');
                                    localStorage.removeItem('userName');
                                }}
                                className="header__logout">Выйти
                             </button>;
    
        const nameInput = <input
                                autoFocus={true}
                                onBlur={(e) => {
                                    userNameChanged(e.currentTarget.value);
                                    this.setState({isInputActive: false});
                                    localStorage.setItem('userName', e.currentTarget.value);
                                }}
                                defaultValue={userName}
                                className="form-input"/>;
    
        
        return (
            <header className="header">
                <div className="wrapper header__container">
                
                    <div className="header__logo-container">
                        <Link to="/" className="header__logo">
                            <span className="header__logo-text">Видеосервис</span>
                        </Link>
                        <img className="header__logo-img" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMzY
                    iIHZpZXdCb3g9IjAgMCAzNyAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0a
                    CBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM2LjAyMTggMjAuMTMyTDExLjgwNzkgMzQuODg
                    4OUMxMy43NiAzNS42MDc1IDE1Ljg3MDggMzYgMTguMDczNiAzNkMyNy4zMzExIDM2IDM0Ljk2MjkgMjkuMDY4MyAzNi4wMjE4I
                    DIwLjEzMlpNOCAzMi45NDdDMy4xNzQ2OSAyOS43MTUxIDAgMjQuMjI2OCAwIDE4QzAgMTEuNzczMiAzLjE3NDY5IDYuMjg0OTMg
                    OCAzLjA1Mjk2VjMyLjk0N1pNMTAuODE1NiAxLjUxMDIzQzEzLjAzNyAwLjUzOTAyNCAxNS40OTIxIDAgMTguMDczNiAwQzI3LjY
                    5NDQgMCAzNS41NTk1IDcuNDg2NTUgMzYuMTE1OCAxNi45MjkyTDEwLjgxNTYgMS41MTAyM1oiIGZpbGw9IiNFNTI2MUUiLz48L3
                    N2Zz4=" width={36} height={36} alt="logo" />
                    </div>
                    <form className="header__form">
                        <label>
                            <input className="header__search-input form-input" placeholder="Поиск..." type="text" />
                        </label>
                        <input className="header__search-confirm" type="submit" value="Найти" />
                    </form>
                    <div className="header__auth-container">
                        { !userName ? loginButton : null }
                        <div className="header__logout-container">
                            { isInputActive ? nameInput : userNameSpan }
                            { userName ? logoutButton : null }
                        </div>
                    </div>
            
                </div>
            </header>
        )
    }    
}


const mapStateToProps = ({ userName }) => {
    return { userName }
};

const mapDispatchToProps = (dispatch) => {
    return {
        modalOpened: () => dispatch(modalOpened()),
        userNameChanged: (name) => dispatch(userNameChanged(name))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);