import React from "react";

import './error-indicator.css';


const ErrorIndicator = ({ error }) => {
    return (
        <div className="error-indicator__container">
            <span className="error-indicator__message">{error.message}</span>
            <span className="error-indicator__text">Обновите страницу</span>
        </div>
    )
};

export default ErrorIndicator;