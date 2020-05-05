import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import { VideoServiceProvider } from "./components/video-service-context";
import VideoService from "./services/video-service";
import App from "./components/app";

import store from "./store";

const videoService = new VideoService();


ReactDOM.render(
    <Provider store={store}>
        <VideoServiceProvider value={videoService}>        
            <App />
        </VideoServiceProvider>
    </Provider>,
    document.getElementById('root')
);