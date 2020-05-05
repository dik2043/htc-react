import React, { Component } from "react";
import { connect } from "react-redux";

import { modalClosed, userNameChanged } from "../../actions";

import "./modal.css";


class ModalForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            value: "",
            pass: "",
            prompt: "",
            isRemember: false
        };
        
        this.formRef = React.createRef();
        
        this.mapPrompt = {
            "value": "Пожалуйста, введите имя пользователя",
            "pass": "Пожалуйста, введите пароль",
            "all": "Пожалуйста, введите логин и пароль"
        };
    }
    
    
    onNameChangeHandler = (e) => {
        this.setState({ value: e.target.value })
    };
    onPassChangeHandler = (e) => {
        this.setState({ pass: e.target.value })
    };
    
    addAnimation() {
        const form = this.formRef.current; 
        form.classList.add('modal__form--animation');
        window.setTimeout(() => form.classList.remove('modal__form--animation'), 200);
    };
    
    getPromptId = () => {
        let counter = [];
        
        if (!this.state.value) {
            counter.push("value");
        }
        if (!this.state.pass) {
            counter.push("pass");
        }
        
        return counter.length <= 1 ? counter[0] : 'all';
    };
    
    onSubmitHandler = (e) => {
        e.preventDefault();
        const prompt = this.mapPrompt[this.getPromptId()];
        this.setState({ prompt: prompt });
        
        if (prompt) {
            this.addAnimation()
        } else {
            this.props.closeModal();
            this.props.userNameChanged(this.state.value);
            if (this.state.isRemember) {
                localStorage.setItem('userName', this.state.value);
            }
        }
    };
    
    
    render() {
        return (
            <form
                ref={this.formRef}
                onSubmit={this.onSubmitHandler} className="modal__form">
                
                <label className="modal__login-label">
                    <input
                        placeholder="Логин"
                        onChange={this.onNameChangeHandler}
                        value={this.state.value}
                        className="modal__login form-input"
                        id="modal-login" type="text" />
                </label>
                <label className="modal__login-label">
                    <input
                        value={this.state.pass}
                        placeholder="Пароль"
                        onChange={this.onPassChangeHandler} 
                        className="modal__pass form-input"
                        id="modal-pass" type="password" />
                </label>
                <label className="modal__remember-label">
                    <input 
                        onChange={(e) => this.setState({ isRemember: e.target.checked })}
                        type="checkbox"
                        className="modal__remember" id="modal-remember" />Запомнить
                    <label className="modal__remember-box" htmlFor="modal-remember"> </label>
                </label>
                <span className="modal__prompt">{this.state.prompt}</span>
                <input 
                    type="submit"
                    defaultValue="Войти"
                    className="modal__confirm login-btn" />
            </form>
        )
    }
}


class Modal extends Component {
    constructor(props) {
        super(props);
        this.modalRef = React.createRef();
        this.body = document.querySelector('body');
    }
    
    componentDidMount() {
        this.addOpeningAnimation();
        let scrollWidth = window.innerWidth - document.documentElement.clientWidth;
        this.hideScroll(scrollWidth);
    }
    
    
    hideScroll(scrollWidth) {
        this.body.style.overflow = 'hidden';
        this.body.style.marginRight = `${ scrollWidth }px`;
    };
    showScroll() {
        window.setTimeout(() => {
            this.body.style.overflow = 'auto';
            this.body.style.marginRight = '0';
        }, 200)
    };    
    
    addOpeningAnimation() {
        const modal = this.modalRef.current;
        modal.classList.remove('modal--hidden');
        window.setTimeout(() => modal.classList.remove('modal--invisible'), 50);
    }
    
    addClosingAnimation() {
        const modal = this.modalRef.current;
        modal.classList.add('modal--invisible');
        window.setTimeout(() => modal.classList.add('modal--hidden'), 200);
    }
    
    closeModal = () => {
        this.props.modalClosed();
        this.showScroll();
        this.addClosingAnimation();
    };
    
    
    render() {
        
        return (
            <div ref={this.modalRef} className="modal modal--hidden modal--invisible">
                <section className="modal__container">
                    <h2 className="modal__title">Вход</h2>
                    <ModalForm closeModal={this.closeModal} userNameChanged={this.props.userNameChanged}/>
                </section>
                <div
                    onClick={() => {
                        this.closeModal()
                    }}
                    className="modal__background" />
            </div>
        )
    }
}


const ModalContainer = ({ isModalOpen, modalClosed, userNameChanged }) => {
    if (isModalOpen) {
        return <Modal modalClosed={modalClosed} userNameChanged={userNameChanged} />
    } else {
        return null;
    }
};


const mapStateToProps = ({ isModalOpen }) => {
    return { isModalOpen }
};

const mapDispatchToProps = (dispatch) => {    
    return {
        modalClosed: () => window.setTimeout(() => dispatch(modalClosed()), 100),
        userNameChanged: (name) => dispatch(userNameChanged(name))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);