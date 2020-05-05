import React from "react";

import {VideoServiceConsumer} from "../video-service-context";


const WithVideoService = () => (Wrapped) => {
    
    return (props) => {
        return (
            <VideoServiceConsumer>
                {
                    (videoService) => {
                        return (
                            <Wrapped {...props}
                                     videoService={videoService}
                            />
                        )
                    }
                }
            </VideoServiceConsumer>
        )
    }
};

export default WithVideoService;